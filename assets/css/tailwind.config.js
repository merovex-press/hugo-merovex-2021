module.exports = {
  // mode: 'jit',
  darkMode: 'media', // or 'media' or 'class'
  variants: {
    extend: {
      typography: ['dark'],
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
            color: theme('colors.black'),
            a: {
              color: theme('colors.blue.500'),
              '&:visited': {
                color: theme('colors.violet.500'),
              },
            },
            'p+p': {
              'text-indent': '2ch'
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.50'),
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
              color: theme('colors.gray.50')
            },
            'p+p': {
              'text-indent': '2ch'
            },
            blockquote: {
              color: theme('colors.gray.200'),
            },
            strong: {
              color: theme('colors.yellow.300'),
              'font-weight': 'bold'
            },
            'h1,h2,h3,h4,h5': {
              color: theme('colors.brand.200')
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
    colors: { // https://tailwindpalette.jurs.me/
      brand: {
        50: '#e0c1b6',
        100: "#e5dad7",
        200: "#cbb5ae",
        300: "#b09186",
        400: "#966c5d",
        500: "#7c4735",
        600: "#63392a",
        700: "#4a2b20",
        800: "#321c15",
        900: "#190e0b"
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
      'petina-blue': {
        '50': '#f0f8f8',
        '100': '#d0eaea',
        '200': '#b0dcdc',
        '300': '#91cece',
        '400': '#71c0c0',
        '500': '#51b2b2',
        '600': '#439494',
        '700': '#357575',
        '800': '#275757',
        '900': '#193838',
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
      gray: {
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
      }
    }
  }
}