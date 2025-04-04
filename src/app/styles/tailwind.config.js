
/** @type {import("tailwindcss").Config} */

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
        "text-danger"
    ],

    theme:{
        extend: {
            colors: {
                primary: "var(--color-primary)",
                "primary-hover": "var(--color-primary-hover)",
                secondary: "var(--color-secondary)",
                success: "var(--color-success)",
                warning: "var(--color-warning)",
                danger: 'rgb(var(--color-danger) / <alpha-value>)',
                info: "var(--color-info)",
                dark: "var(--color-dark)",
                white: "var(--color-white)",
                black: "var(--color-black)",
            },
            fontFamily: {
                base: ["var(--font-family-base)"],
            },
            fontSize: {
                xs: "var(--font-size-xs)",
                sm: "var(--font-size-sm)",
                md: "var(--font-size-md)",
                lg: "var(--font-size-lg)",
                xl: "var(--font-size-xl)",
            },
            spacing:{
                xxs: "var(--spacing-xxs)",
                xs: "var(--spacing-xs)",
                sm: "var(--spacing-sm)",
                md: "var(--spacing-md)",
                lg: "var(--spacing-lg)",
                xl: "var(--spacing-xl)",
                "2xl": "var(--spacing-2xl)", 
            },
            borderRadius: {
                sm: "var(--border-radius-sm)",
                md: "var(--border-radius-md)",
                lg: "var(--border-radius-lg)",
            }
        },
    },
    plugins: [],
}