module.exports = {
  mode: 'jit',
  content: [
    "./content/**/*.md",
    "./content/**/*.html",
    "./themes/hugo-merovex-2021/layouts/**/*.html",
    "./themes/hugo-merovex-2021/layouts/partials/**/*.html",
    "./themes/hugo-merovex-2021/layouts/partials/posts/*.html"
  ],
  darkMode: 'media',
  variants: {
    extend: {
      typography: ['dark'],
      borderWidth: ['hover', 'focus'],
      backgroundColor: ['responsive', 'first', 'last', 'even', 'odd', 'hover', 'focus']
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
  theme: {
    extend: {
      screens: {
        'print': { 'raw': 'print' },
        // => @media  print { ... }
      },
      typography: (theme) => ({
        pink: {
          css: {
            '--tw-prose-body': theme('colors.brand'),
            color: theme('colors.brand')
          },
        },
        DEFAULT: {
          css: {
            '--tw-prose-body': '#FFDEAD',
            'background': 'none',
            color: theme('colors.brand'),
            a: {
              color: theme('colors.brand'),
              "font-family": theme('font.serif'),
              '&:visited': {
                color: theme('colors.violet.500'),
              },
            },
            'p+p': {
              'text-indent': '2rem',
              'margin': '0',
            },
            blockquote: {
              border: 'none',
            }
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
              border: 'none',
            },
            strong: {
              color: theme('colors.warning'),
              'font-weight': 'bold'
            },
            'h1,h2,h3,h4,h5': {
              color: theme('colors.brand.light')
            },
            code: {
              color: theme('colors.accent.light')
            }
          },
        }
      })
    },
    fontFamily: {
      'sans': ["Merovex Sans", '-apple-system', 'system-ui', "Segoe UI", 'Roboto', 'Lato', 'Helvetica', 'Arial', 'sans-serif'],
      'serif': ["Merovex Serif", 'Cambria', 'Georgia', "Times New Roman", 'Times', 'serif'],
      'display': ["Merovex Display", "MerovexSans", '-apple-system', 'system-ui', "Segoe UI", 'Roboto', 'Lato', 'Helvetica', 'Arial', 'sans-serif'],
      'code': ["Merovex Code", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"]
    },
    colors: {
      brand: {
        DEFAULT: '#326287',
        light: '#8ac2da', // WCAG 2.0 7:0
        dark: '#294a68' // WCAG 2.0 7:0
      },
      accent: {
        lightest: '#E4D1B9',
        lighter: '#d6b68b', // WCAG 2.0 7:0
        light: '#ba8b5b',
        DEFAULT: '#9d6938',
        dark: '#603b1e',
        darkest: '#29180f', // WCAG 2.0 7:0
      },
      shade: { // Tailwind Stone
        lighter: '#fafaf9',
        light: '#e7e5e4', // white
        DEFAULT: '#57534e',
        dark: '#292524', // black
        darker: '#1c1917',
      },
      info: {
        light: '#FeF1F2',
        dark: '#202434',
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
      }
    }
  }
}