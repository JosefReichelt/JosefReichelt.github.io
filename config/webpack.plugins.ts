import { resolve } from 'path';
import { WebpackPluginInstance } from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import SpriteLoaderPlugin from 'svg-sprite-loader/plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { PUBLIC_PATH } from './constants';
import HtmlWebpackPlugin from 'html-webpack-plugin';


export const plugins = (): WebpackPluginInstance[] => {
    // Base Plugins
    const plugins = [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new SpriteLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: resolve(PUBLIC_PATH, 'index.html'),
            favicon: resolve(PUBLIC_PATH, 'favicon.ico')
        }),
        new MiniCssExtractPlugin(),
    ];
    return plugins;
};
