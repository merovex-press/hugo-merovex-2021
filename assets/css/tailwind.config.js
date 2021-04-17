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
        DEFAULT: {
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
            // color: theme('colors.red.200'),
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.200'),
              },
            },
            'a:hover': {
              color: theme('colors.blue.200'),
            },
            'a:visited': {
              color: theme('colors.violet.200'),
            },
            p: {
              color: theme('colors.red.500')
            },
            'p+p': {
              'text-indent': '6ch'
            },
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.gray.50'),
              'font-weight': 'semibold'
            },
          },
        }
      }),
    },
    fontFamily: {
      'sans': ["MerovexSans", '-apple-system', 'system-ui', "Segoe UI", 'Roboto', 'Lato', 'Helvetica', 'Arial', 'sans-serif'],
      'serif': ["MerovexSerif", 'Cambria', 'Georgia', "Times New Roman", 'Times', 'serif'],
      'display': ['IMFellEnglish', "MerovexSerif", 'Cambria', 'Georgia', "Times New Roman", 'Times', 'serif']
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
        100: "#e0e6e1",
        200: "#c1ccc3",
        300: "#a1b3a6",
        400: "#829988",
        500: "#63806a",
        600: "#4f6655",
        700: "#3b4d40",
        800: "#28332a",
        900: "#141a15"
      },
      gray: {
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
        'DEFAULT': '#e6e4e3'
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