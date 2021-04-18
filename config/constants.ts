import { resolve } from 'path';

export const PROJ_NAME = 'jr-site';
export const BUILD_PATH = resolve(__dirname, '../dist');
export const SOURCE_PATH = resolve(__dirname, '../src/');
export const PUBLIC_PATH = resolve(__dirname, '../public/');
export const ASSETS_PATH = '/assets';
export const IS_ANALYZE = process.argv.some(arg => arg.includes('-analyze'));
