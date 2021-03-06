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

      // brand: { // This is my blue shirt
      //   DEFAULT: '#326287',
      //   light: '#8ac2da', // WCAG 2.0 7:0
      //   dark: '#294a68' // WCAG 2.0 7:0
      // },
      // accent: {
      //   lightest: '#E4D1B9',
      //   lighter: '#d6b68b', // WCAG 2.0 7:0
      //   light: '#ba8b5b',
      //   DEFAULT: '#9d6938',
      //   dark: '#603b1e',
      //   darkest: '#29180f', // WCAG 2.0 7:0
      // },
      shade: { // Tailwind Stone 
        lighter: '#fafaf9', // 50
        light: '#e7e5e4', // 200
        DEFAULT: '#57534e', // 600 #374140
        dark: '#292524', // 800
        darker: '#1c1917', // 900
      },
      // slate: { // Tailwind Slate
      //   lighter: '#f8fafc', // 50
      //   light: '#e2e8f0', // 200
      //   DEFAULT: '#475569', // 600
      //   dark: '#1e293b', // 800
      //   darker: '#18181b', // 900
      // },
      // zinc: { // Tailwind Zinc
      //   lighter: '#fafafa', // 50
      //   light: '#e4e4e7', // 200
      //   DEFAULT: '#52525b', // 600
      //   dark: '#27272a', // 800
      //   darker: '#0f172a', // 900
      // },
      // charcoal: { // Tailwind Charcoal
      //   lighter: '#FFFFFF', // Forcing white
      //   light: '#D7DADE', // Mix 000
      //   DEFAULT: '#425167', // Mix 400
      //   dark: '#2D3746', // Mix 500
      //   darker: '#161C23', // Mix 700
      // },
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
    }
  }
}