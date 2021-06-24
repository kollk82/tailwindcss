module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            gridTemplateColumns: {
                minmax: 'repeat(4, minmax(max-content, 1fr))',
            },
            gridTemplateRows: {
                minmax: 'min-content min-content 1fr',
            },
            margin: {
                xss: '.1rem',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
