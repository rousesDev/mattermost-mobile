// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    env: {
        production: {
            plugins: ['transform-remove-console'],
        },
    },
    plugins: [
        '@babel/plugin-transform-runtime',
        ['module-resolver', {
            root: ['.'],
            alias: {
                assets: './dist/assets',
                '@actions': './app/actions',
                '@components': './app/components',
                '@constants': './app/constants',
                '@mm-redux': './app/mm-redux',
                '@i18n': './app/i18n',
                '@selectors': './app/selectors',
                '@store': './app/store',
                '@telemetry': './app/telemetry',
                '@utils': './app/utils',
                '@websocket': './app/client/websocket',
            },
        }],
    ],
    exclude: ['**/*.png', '**/*.jpg', '**/*.gif'],
};
