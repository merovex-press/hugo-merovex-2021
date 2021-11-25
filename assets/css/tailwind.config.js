module.exports = {
  // mode: 'jit',
  darkMode: 'media',
  variants: {
    extend: {
      typography: ['dark'],
      borderWidth: ['hover', 'focus'],
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    // require('@tailwindcss/forms')
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        light: {
          css: {
            'background': 'none',
            color: theme('colors.shade.dark'),
            a: {
              color: theme('colors.brand'),
              "font-family": theme('font.sans'),
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
            color: theme('colors.shade.light'),
            a: {
              color: theme('colors.brand.light'),
              fontFamily: theme('font.sans'),
              '&:hover': {
                color: theme('colors.accent'),
              },
              '&:visited': {
                color: theme('colors.accent'),
              }
            },
            'p, li': {
              color: theme('colors.shade.light')
            },
            'p+p': {
              'text-indent': '2rem',
              'margin': 0,
            },
            blockquote: {
              color: theme('colors.shade.light'),
            },
            strong: {
              color: theme('colors.warning'),
              'font-weight': 'bold'
            },
            'h1,h2,h3,h4,h5': {
              color: theme('colors.accent.light')
            },
          },
        }
      }),
    },
    fontFamily: {
      'sans': ["MerovexSans", '-apple-system', 'system-ui', "Segoe UI", 'Roboto', 'Lato', 'Helvetica', 'Arial', 'sans-serif'],
      'serif': ["MerovexSerif", 'Cambria', 'Georgia', "Times New Roman", 'Times', 'serif'],
      'display': ["MerovexDisplay", "MerovexSans", '-apple-system', 'system-ui', "Segoe UI", 'Roboto', 'Lato', 'Helvetica', 'Arial', 'sans-serif']
    },
    colors: {
      brand: {
        DEFAULT: '#406EA6',
        light: '#98B6D7', // WCAG 2.0 7:0
        dark: '#31537D' // WCAG 2.0 7:0
      },
      accent: {
        lightest: '#91B5CA', // WCAG 2.0 7:0
        light: '#6D9F89',
        dark: '#7B4B42',
        darkest: '#70473E', // WCAG 2.0 7:0
      },
      shade: {
        lighter: '#fcfcfc',
        light: '#F3F1F2', // white
        dark: '#202434', // black
        darker: '#11131c',
      },
      info: {
        light: '#FeF1F2',
        dark: '#202434',
      },
      success: {
        light: '#499C6D',
        DEFAULT: '#499B6B',
        dark: '#397954',
      },
      warning: {
        light: '#C68B33',
        DEFAULT: '#C68B33',
        dark: '#8E6425',
      },
      danger: {
        light: '#F55347',
        DEFAULT: '#F44336',
        dark: '#DA190B'
      },
      amazon: {
        DEFAULT: '#FF9900'
      },
      noble: {
        DEFAULT: '#366251'
      }
    }
  }
}