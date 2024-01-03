/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'body-bg-light': '#ebeff2',
                'body-bg-dark': '#282e38',
                'card-bg-light': '#fff',
                'card-bg-dark': '#313844',
                'body-fg-light': '#6c757d',
                'body-fg-dark': '#adb5bd',
                'footer-bg-light': '#e3e9ed',
                'footer-bg-dark': '#2c333e',
                'footer-fg-light': '#6c757d',
                'footer-fg-dark': '#adb5bd',
                'footer-hover-light': '#636b72',
                'footer-hover-dark': '#a2abb4',
                'link-fg-light': '#71b6f9',
                'link-fg-dark': '#71b6f9',
                'link-hover-light': '#609bd4',
                'link-hover-dark': '#609bd4',
                'border-light': '#f7f7f7',
                'border-dark': '#3a4250',
                'disabled-light': '#98a6ad',
                'disabled-dark': '#98a6ad',
                'input-bg-light': '#fff',
                'input-bg-dark': '#363e4b',
                'input-fg-light': '#98a6ad',
                'input-fg-dark': '#98a6ad',
                'input-border-light': '#ced4da',
                'input-border-dark': '#424c5c',
                'input-focusborder-light': '#b9bfc4',
                'input-focusborder-dark': '#545f73',
                'input-disabled-light': '#353d4a',
                'input-disabled-dark': '#353d4a',
                'rightbar-light': '#323a46',
                'rightbar-dark': '#323a46',
                'topbar-light': '#ebeff2',
                'topbar-dark': '#2c333e',
                'topsearch-light': '#e2e6ea',
                'topsearch-dark': '#323a46',
                'navlink-light': '#6c757d',
                'navlink-dark': '#dee2e6',
                'pagetitle-light': '#343a40',
                'pagetitle-dark': '#f8f9fa',

                'text-dark-light': '#343a40',
                'text-dark-dark': '#f7f7f7',

                'popover-light': '#f8f9fa',
                'popover-dark': '#282e38',
                'popover-item-hover-light': '#71b6f9',
                'popover-item-hover-dark': '#71b6f9',

                'dropdown-bg-dark': '#313844',
                'dropdown-bg-light': '#fff',
                'dropdown-link-hover-bg-light': '#f8f9fa',
                'dropdown-link-hover-bg-dark': '#3a4250',
                'dropdown-link-hover-fg-light': '#2d343f',
                'dropdown-link-hover-fg-dark': '#d4d8d9',
                'dropdown-hr-light': '#f1f2f3',
                'dropdown-hr-dark': '#3a4250',
                'dropdown-title-light': '#343a40',
                'dropdown-title-dark': '#f7f7f7',
                'dropdown-link-fg-light': '#323a46',
                'dropdown-link-fg-dark': '#adb5bd',

                'leftbar-light': '#fff',
                'leftbar-dark': '#313844',
                'leftbar-username-fg-light': '#6c757d',
                'leftbar-username-fg-dark': '#fff',
                'leftbar-text-muted-light': '#98a6ad',
                'leftbar-text-muted-dark': '#98a6ad',
                'leftbar-text-muted-hover-light': '#609bd4',
                'leftbar-text-muted-hover-dark': '#609bd4',
                'leftbar-navbar-item-fg-light': '#6e768e',
                'leftbar-navbar-item-fg-dark': '#9097a7',
                'leftbar-navbar-item-active-fg-light': '#71b6f9',
                'leftbar-navbar-item-active-fg-dark': '#71b6f9',
                'leftbar-navbar-item-fg-hover-light': '#71b6f9',
                'leftbar-navbar-item-fg-hover-dark': '#c8cddc',

                'userbox-border-light': '#f5f5f5',
                'userbox-border-dark': '#ffffff33',

                success: '#10c469',
                pink: '#ff8acc',
                purple: '#5b69bc',
                'purple-hover': '#4d59a0',

                danger: '#ff5b5b',
                'alert-danger-fg-light': '#993737',
                'alert-danger-fg-dark': '#f25656'
            },
            boxShadow: {
                box: '0px 0px 35px 0px rgba(66, 72, 80, 0.15)',
                'box-sm': '0 0.75rem 6rem rgba(56, 65, 74, 0.03)',
                'box-lg': '0 0 45px 0 rgba(0, 0, 0, 0.12)',
                'box-inset': 'inset 0 1px 2px rgba(0, 0, 0, 0.075)'
            }
        },
        screens: {
            sm: "580px",
            md: "790px",
            lg: "960px",
            xl: "1400px",
          },
    },
    plugins: []
}
