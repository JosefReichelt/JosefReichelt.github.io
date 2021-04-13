import { resolve } from 'path';
import { RuleSetRule } from 'webpack';
import { ASSETS_PATH, PROJ_NAME } from './webpack.config';
import sveltePreprocess from 'svelte-preprocess';

export const rules: RuleSetRule[] = [
    {
        test: /\.(svelte)$/,
        use: {
            loader: 'svelte-loader',
            options:{
                preprocess: sveltePreprocess({
                    scss: true,
                }),
                compilerOptions:{
                    cssHash:({ hash, css, name, filename })=>{
                        return `${name}-${hash(css)}`
                    }
                }
            }
        },
      },
    {
        test: /[^.test]\.ts(x)?$/,
        use: [ 'babel-loader', 'ts-loader' ],
        exclude: /node_modules/
    },
    {
        test: /\.scss$/,
        use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 1,
                    modules: { localIdentName: `${PROJ_NAME}-[local]-[hash:base64:8]` }
                }
            },
            {
                loader: 'postcss-loader',
                options: { postcssOptions: { config: resolve(__dirname, '../postcss.config.js') } }
            },
            'sass-loader'
        ]
    },
    {
        oneOf: [
            {
                test: /\.svg$/,
                resourceQuery: /sprite/,
                use: [
                    {
                        loader: 'svg-sprite-loader',
                        options: {
                            spriteFilename: (svgpath: string) => {
                                const path = svgpath.replace(/\\/g, '/');
                                const fileName = path.match(/(?<=assets\/).*(?=\/)/);
                                if (fileName && fileName[0]) {
                                    return `/sprites/${fileName[0]}-sprite.svg`;
                                }
                                return '/sprites/assets-sprite.svg';
                            },
                            extract: true,
                            outputPath: ASSETS_PATH,
                            publicPath: ASSETS_PATH,
                        }
                    },
                    {
                        loader: 'svgo-loader',
                        options: {
                            plugins: [
                                { removeTitle: false },
                                { cleanupIDs: false },
                                { removeStyleElement: false },
                                { removeUselessStrokeAndFill: false },
                            ]
                        }
                    },
                ]
            },
            {
                test: /\.svg$/,
                resourceQuery: /component/,
                use: [
                    {
                        loader: '@svgr/webpack',
                        options: {}
                    }
                ]
            },
            {
                test: /\.(png|jpg|ico|gif|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: ASSETS_PATH,
                        publicPath: ASSETS_PATH,
                        name: (resourcePath: string) => {
                            const path = resourcePath.replace(/\\/g, '/');
                            const fileName = path.match(/(?<=assets\/).*$/);
                            if (fileName && fileName[0]) {
                                // eslint-disable-next-line max-len
                                return `[folder]/${fileName[0].slice(0, fileName[0].lastIndexOf('.'))}-[hash:base64:8].[ext]`;
                            }
                            return '[folder]/[name]-[hash:base64:8].[ext]';
                        }
                    }
                }
            },
        ]
    },

];