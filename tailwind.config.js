module.exports = {
    purge: ['./public/**/*.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            gridTemplateColumns: {
                minmax: 'repeat(4, min-content)',
            },
            gridTemplateRows: {
                minmax: 'min-content min-content 6rem',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
