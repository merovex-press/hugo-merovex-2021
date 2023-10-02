

const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./content/**/*.{md,html,js,svg}",
    "./sveltekit-author-dashboard/src/**/*.{js,html,svelte}",
    "./themes/hugo-merovex-2021/layouts/**/*.html",
    "./themes/hugo-merovex-2021/layouts/**/*.svg",
    "./themes/hugo-merovex-2021/layouts/partials/**/*.html",
    "./themes/hugo-merovex-2021/layouts/partials/components/*.html",
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
        grey: {
          '50': 'oklch(100% 0 0)',
          '100': 'oklch(96% 0.001 220)',
          '200': 'oklch(89% 0.002 220)',
          '300': 'oklch(82% 0.003 220)',
          '400': 'oklch(69% 0.005 220)',
          '500': 'oklch(54% 0.008 220)',
          '600': 'oklch(50% 0.007 220)',
          '700': 'oklch(44% 0.006 220)',
          '800': 'oklch(38% 0.006 220)',
          '900': 'oklch(33% 0.005 220)',
          '950': 'oklch(28% 0.005 220)'
        },
        primary: {
          '50': 'oklch(95% 0.03 278)',
          '100': 'oklch(91% 0.04 278)',
          '200': 'oklch(85% 0.07 278)',
          '300': 'oklch(75% 0.12 278)',
          '400': 'oklch(66% 0.17 278)',
          '500': 'oklch(58% 0.2 278)',
          '600': 'oklch(50% 0.2 278)',
          '700': 'oklch(45% 0.21 278)',
          '800': 'oklch(39% 0.17 278)',
          '900': 'oklch(36% 0.13 278)',
          '950': 'oklch(25% 0.08 278)'
        },
        xprimary: {
          '50': 'oklch(94.72% 0.009 352.37)',
          '100': 'oklch(88.88% 0.014 342.98)',
          '200': 'oklch(77.81% 0.039 345.61)',
          '300': 'oklch(66.74% 0.064 348.24)',
          '400': 'oklch(55.67% 0.089 350.87)',
          '500': 'oklch(44.6% 0.114 353.5)',
          '600': 'oklch(66.54% 0.064 347.19)',
          '700': 'oklch(55.47% 0.089 349.82)',
          '800': 'oklch(44.4% 0.114 352.45)',
          '900': 'oklch(33.33% 0.139 355.08)',
        },
        secondary: {
          '50': 'oklch(99% 0.03 107)',
          '100': 'oklch(97% 0.06 107)',
          '200': 'oklch(95% 0.12 107)',
          '300': 'oklch(92% 0.15 107)',
          '400': 'oklch(87% 0.18 107)',
          '500': 'oklch(81% 0.16 107)',
          '600': 'oklch(70% 0.14 107)',
          '700': 'oklch(58% 0.11 107)',
          '800': 'oklch(50% 0.08 107)',
          '900': 'oklch(43% 0.07 107)',
          '950': 'oklch(30% 0.05 107)'
        },
        'dove-gray': {
          '50': '#f8f8f8',
          '100': '#f0f1f1',
          '200': '#dadbdc',
          '300': '#c3c5c6',
          '400': '#969a9c',
          '500': '#696f71',
          '600': '#5f6466',
          '700': '#4f5355',
          '800': '#3f4344',
          '900': '#333637'
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
