/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      mobile: '30rem',
      tablet: '40rem',
      laptop: { min: '1024px', max: '1600px' },
      desktop: '1920px',
    },
    extend: {
      colors: {
        primary: '#F58220',
        'card-header-bg': '#58595B',
        'card-text-color': '#707070',
        'card-icon-color': '#9D9D9D',
        accent: '#F58220',
        neutral: '#374151',
        'base-100': '#FFFFFF',
        info: '#3ABFF8',
        success: '#36D399',
        warning: '#FBBD23',
        error: '#F87272',
      },
      backgroundImage: {
        'page-bg': '#f5821f',
        'page-gradient':
          'linear-gradient(224.9deg, #f5821f 0%, #ffd565 50.2%, #f5821f 100%)',
        'header-gradient':
          'linear-gradient(180deg, #f58220 0%, rgba(245, 130, 32, 0) 100%)',
      },
      fontSize: {
        sm: '0.9375rem',
        md: '1.125rem',
        xl: '1.4375rem',
      },
    },
  },
  plugins: [],
}
