

const defaultTheme = require('tailwindcss/defaultTheme')

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./content/**/*.md",
    "./content/**/*.html",
    "./content/**/*.js",
    "./themes/hugo-merovex-2021/layouts/**/*.html",
    "./themes/hugo-merovex-2021/layouts/**/*.svg",
    "./themes/hugo-merovex-2021/layouts/partials/**/*.html",
    "./themes/hugo-merovex-2021/layouts/partials/svg/*.svg",
    "./themes/hugo-merovex-2021/layouts/partials/posts/*.html"
  ],
  theme: {
    extend: {
      animation: {
        fade: 'fadeOut 4s ease-in-out',
      },
      keyframes: theme => ({
        fadeOut: {
          '0%': { opacity: 1.0 },
          '30%': { opacity: 1.0 },
          '100%': { opacity: 0.0 },
        },
      }),
      screens: {
        'print': { 'raw': 'print' },
      },
      aspectRatio: {
        'book': '2 / 3',
      },
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'background': 'none',
            color: theme('colors.zinc.900'),
            a: {
              color: theme('colors.blue.500'),
              '&:visited': {
                color: theme('colors.violet.500'),
              },
            },
            'p+p': {
              'text-indent': '2rem',
              'margin': '0',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.zinc.50'),
            a: {
              color: theme('colors.blue.300'),
              '&:hover': {
                color: theme('colors.blue.100'),
              },
              '&:visited': {
                color: theme('colors.violet.300'),
              }
            },
            'p, li': {
              color: theme('colors.zinc.100')
            },
            'p+p': {
              'text-indent': '2rem',
              'margin': 0,
            },
            blockquote: {
              color: theme('colors.zinc.200'),
            },
            strong: {
              color: theme('colors.yellow.300'),
              'font-weight': 'bold'
            },
            'h1,h2,h3,h4,h5': {
              color: theme('colors.amber.100')
            },
          },
        }
      }),
      colors: (theme) => ({
        // https://mycolor.space/?hex=%232E497A&sub=1
        // https://palettte.app
        heatmap: {
          DEFAULT: '#528f51', //'#528F51',
          dark: '#8BF683',
          '0': '#FFFFFF',
          '1': '#A9C7A8',
          '2': '#86B185',
          '3': '#639A62',
          // '4': '#528F51',
          '4': '#427241',
        },
        brand: {
          DEFAULT: '#51528f',//'#5A5B9F',
          light: '#9797BC',
          dark: '#313156'
        },
        accent: {
          light: '#DCE3E9',
          DEFAULT: '#51718F',
          dark: '#314456',
        },
        yellow: colors.amber,
        

        shade: { // Tailwind Stone 
          lighter: '#fafaf9', // 50
          light: '#e7e5e4', // 200
          DEFAULT: '#57534e', // 600 #374140
          dark: '#292524', // 800
          darker: '#1c1917', // 900
        },
        'old-primary': {
          100: '#b9c6df',
          200: '#738ebf',
          300: '#5071af',
          400: '#405b8c',
          500: '#202d46',
        },
        primary: {
          100: '#96B5F0',
          200: '#5F81C1',
          300: '#2E5399',
          400: '#173162',
          500: '#051533',
        },
        'old-secondary': {
          100: '#f4dfa4',
          200: '#efcf76',
          300: '#eabf48',
          400: '#b78c15',
          500: '#5b460b',
        },
        secondary: {
          50: '#FFEEBF',
          100: '#FFDD80',
          200: '#CCAB52',
          300: '#997C2E',
          400: '#665014',
          500: '#332705',
        },
        // gray: colors.zinc,
        gray: {
          100: '#C9CBCF',
          200: '#A3A6AB',
          300: '#93969f',
          400: '#60636c',
          500: '#3a3b41',
          600: '#2a2b31',
          // '600': theme('colors.zinc.200')
          // 100: theme('colors.zinc.100'),
          // 200: theme('colors.zinc.300'),
          // 300: theme('colors.zinc.500'),
          // 400: theme('colors.zinc.700'),
          // 500: theme('colors.zinc.900'),
        },
        // heatmap: colors.emerald,
        'black': '#18191b',
        'white': '#FFFFFF',
        'ceramic': '#FFFDFB',
        'warm-shadow': '#0F0',
        'alert': colors.amber,
        'notice': colors.blue,
        'info': colors.blue,
        info: {
          light: '#fafaf9',
          dark: '#292524',
        },
        success: {
          light: '#93CCAA',
          DEFAULT: '#499B6B',
          dark: '#254F36',
        },
        warning: {
          light: '#E3C291',
          DEFAULT: '#C68B33',
          dark: '#996C28',
        },
        purple: {
          light: '#ad89c6',
          DEFAULT: '#744793',
          dark: '#513267'
        },
        green: {
          light: '#8bd297',
          DEFAULT: '#348843',
          dark: '#245f2f'
        },
        red: {
          light: '#D2B9BA',
          DEFAULT: '#8f5152',
          dark: '#563131'
        },
        danger: {
          light: '#F88B83',
          DEFAULT: '#F44336',
          dark: '#7B0F07'
        },
        amazon: {
          dark: '#8F5600',
          DEFAULT: '#FF9900',
          light: '#FFE2B8'
        },
        noble: {
          DEFAULT: '#366251',
          light: '#8FC1AE'
        },
        white: {
          DEFAULT: '#FFFFFF'
        }
      }),
      fontFamily: {
        'sans': ['Atkinson Hyperlegible', ...defaultTheme.fontFamily.sans],
        'serif': ['Source Serif Pro', ...defaultTheme.fontFamily.serif],
        'display': ['Atkinson Hyperlegible', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp')
  ]
}
