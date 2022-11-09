const colors = require('tailwindcss/colors');

module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                primary: colors.sky,
                secondary: colors.emerald,
            },
            animation: {
                dropIn: 'dropIn 0.2s ease-out',
            },
            keyframes: {
                dropIn: {
                    '0%': { transform: 'translateY(-100px)' },
                    '100%': { transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [
        // require('daisyui'),
        require('@tailwindcss/forms')
    ],
    mode: 'jit',
    content: ['./app/**/*.{ts,tsx}'],
    important: '#app',
    // daisyui: {
    //   themes: ['garden'],
    // },
};
