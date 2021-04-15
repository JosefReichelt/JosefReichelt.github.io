import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import BaseConfig from './webpack.config';

const devServerConf:WebpackDevServer.Configuration = {
    contentBase: 'src',
    compress: true,
    port: 1337,
    open: false,
    watchContentBase: true,
    hot: true,
    quiet: true,
    clientLogLevel: 'silent',

};

const DevConfig: webpack.Configuration = {
    ...BaseConfig,
    mode:"development",
    devServer: devServerConf
}





export default DevConfig;