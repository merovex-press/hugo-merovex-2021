module.exports = {
  // mode: 'jit',
  darkMode: 'media', // or 'media' or 'class'
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
    xcolors: { // https://tailwindpalette.jurs.me/
      xbrand: {
        '50': '#fcfbf9',
        '100': '#f9f1e6',
        '200': '#f3d8c9',
        '300': '#e2af9b',
        '400': '#d3816b',
        '500': '#bc5e47',
        '600': '#9e4330',
        '700': '#783224',
        '800': '#52221a',
        '900': '#321510',
      },
      brown: {
        50: "#fbf8f6",
        100: "#f1e4dd",
        200: "#e3c9ba",
        300: "#d5af98",
        400: "#c79475",
        500: "#b97953",
        600: "#946142",
        700: "#6f4932",
        800: "#4a3021",
        900: "#251811"
      },
      blue: {
        50: '#e9eff1',
        100: "#d7e1e5",
        200: "#afc4cb",
        300: "#86a6b1",
        400: "#5e8997",
        500: "#366b7d",
        600: "#2b5664",
        700: "#20404b",
        800: "#162b32",
        900: "#0b1519"
      },
      yellow: {
        50: '#ffffff',
        100: "#f7ebda",
        200: "#efd7b4",
        300: "#e8c28f",
        400: "#e0ae69",
        500: "#d89a44",
        600: "#ad7b36",
        700: "#825c29",
        800: "#563e1b",
        900: "#2b1f0e"
      },
      green: {
        50: '#ffffff',
        100: '#e0eee8',
        200: '#c1ddd2',
        300: '#a1cbbb',
        400: '#82baa4',
        500: '#72a792',
        600: '#629380',
        700: '#51806d',
        800: '#416c5b',
        900: '#315949',
      },
      xgray: {
        50: "#fcfcfc",
        100: "#d7d4d4",
        200: "#afaaa9",
        300: "#887f7d",
        400: "#605552",
        500: "#382a27",
        600: "#2d221f",
        700: "#221917",
        800: "#161110",
        900: "#0b0808"
      },
      indigo: {
        100: "#e6e4e3",
        200: "#ccc9c8",
        300: "#b3adac",
        400: "#999291",
        500: "#807775",
        600: "#665f5e",
        700: "#4d4746",
        800: "#33302f",
        900: "#1a1817"
      },
      violet: {
        100: "#e4dbed",
        200: "#cab6db",
        300: "#af92c9",
        400: "#956db7",
        500: "#7a49a5",
        600: "#623a84",
        700: "#492c63",
        800: "#311d42",
        900: "#180f21"
      },
      'white': {
        'DEFAULT': '#FFFFFF'
      },
      'bone-white': {
        'DEFAULT': '#FFFFFF'
      },
      'black': {
        'DEFAULT': '#1a1817'
      },
      brand: {
        DEFAULT: '#5C84B9',
        '50': '#DCE5F0',
        '100': '#CEDAEA',
        '200': '#B2C5DE',
        '300': '#95AFD2',
        '400': '#799AC5',
        '500': '#5C84B9',
        '600': '#42689B',
        '700': '#324E73',
        '800': '#21334C',
        '900': '#101925'
      },
      'secondary': {
        DEFAULT: '#5DB4BA',
        '50': '#DEF0F1',
        '100': '#CFE9EB',
        '200': '#B3DCDF',
        '300': '#96CED2',
        '400': '#7AC1C6',
        '500': '#5DB4BA',
        '600': '#43979C',
        '700': '#327175',
        '800': '#214B4E',
        '900': '#102526'
      },
      'gray': {
        DEFAULT: '#7186A2',
        '50': '#E0E5EB',
        '100': '#D4DAE3',
        '200': '#BBC5D2',
        '300': '#A2B0C2',
        '400': '#8A9BB2',
        '500': '#7186A2',
        '600': '#576A84',
        '700': '#404F62',
        '800': '#2A3440',
        '900': '#14191F'
      }
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