import { resolve } from 'path';
// @ts-ignore
import { WebpackPluginInstance } from 'webpack'; // @ts-ignore
import { CleanWebpackPlugin } from 'clean-webpack-plugin'; // @ts-ignore
import SpriteLoaderPlugin from 'svg-sprite-loader/plugin';
import { PUBLIC_PATH } from './webpack.config';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export const plugins = (): WebpackPluginInstance[] => {
    // Base Plugins
    const plugins = [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new SpriteLoaderPlugin(),
        new HtmlWebpackPlugin(
            {
                template: resolve(PUBLIC_PATH,'index.html'),
                favicon: resolve(PUBLIC_PATH,'favicon.ico')
            },
        ),
    ];
    return plugins;
};
