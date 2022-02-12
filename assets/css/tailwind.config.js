module.exports = {
  mode: 'jit',
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
  safelist: ["rm-link", "rm-parent"],
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
      'sans': ["Merovex Sans", 'Arial', 'sans-serif'],
      'serif': ["Merovex Serif", 'Cambria', 'Georgia', "Times New Roman", 'Times', 'serif'],
      'display': ["Merovex Display", 'Arial', 'sans-serif'],
      'code': ["Merovex Code", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"]
    },
    colors: {
      heatmap: {
        DEFAULT: '#348843',
        light: '#348843', // WCAG 2.0 7:0
        dark: '#8ec79b' // WCAG 2.0 7:0
      },
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
        lighter: '#FFFFFF',
        light: '#eaeded', // white
        DEFAULT: '#495655', // #374140
        dark: '#2A2C2B', // black
        darker: '#1d1f1e',
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
        light: '#d3847b',
        DEFAULT: '#a34136',
        dark: '#933a31'
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
    }
  }
}