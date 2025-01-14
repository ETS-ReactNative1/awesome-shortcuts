const config = require('./src/config');

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false,
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('daisyui')
    ],
    daisyui: {
        logs: false,
        themes: config.themeConfig.themes,
    },
}
