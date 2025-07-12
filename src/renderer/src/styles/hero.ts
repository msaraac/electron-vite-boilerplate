import { heroui } from '@heroui/react'

export default heroui({
  prefix: 'heroui',
  addCommonColors: false,
  defaultTheme: 'light',
  defaultExtendTheme: 'light',
  themes: {
    light: {
      colors: {
        default: {
          '50': '#f8f8f8',
          '100': '#efefef',
          '200': '#e5e5e5',
          '300': '#dcdcdc',
          '400': '#d2d2d2',
          '500': '#c9c9c9',
          '600': '#a6a6a6',
          '700': '#838383',
          '800': '#5f5f5f',
          '900': '#3c3c3c',
          foreground: '#000',
          DEFAULT: '#c9c9c9'
        },
        primary: {
          '50': '#dff3fe',
          '100': '#b3e2fd',
          '200': '#86d1fb',
          '300': '#59c0fa',
          '400': '#2daff8',
          '500': '#009ef7',
          '600': '#0082cc',
          '700': '#0067a1',
          '800': '#004b75',
          '900': '#002f4a',
          foreground: '#000',
          DEFAULT: '#009ef7'
        },
        secondary: {
          '50': '#ede6fc',
          '100': '#d5c4f9',
          '200': '#bca1f5',
          '300': '#a37ef1',
          '400': '#8b5cee',
          '500': '#7239ea',
          '600': '#5e2fc1',
          '700': '#4a2598',
          '800': '#361b6f',
          '900': '#221146',
          foreground: '#fff',
          DEFAULT: '#7239ea'
        },
        success: {
          '50': '#e9f9f0',
          '100': '#cbf0dc',
          '200': '#ace7c7',
          '300': '#8ddfb2',
          '400': '#6fd69e',
          '500': '#50cd89',
          '600': '#42a971',
          '700': '#348559',
          '800': '#266141',
          '900': '#183e29',
          foreground: '#000',
          DEFAULT: '#50cd89'
        },
        warning: {
          '50': '#fff8df',
          '100': '#ffeeb3',
          '200': '#ffe486',
          '300': '#ffdb59',
          '400': '#ffd12d',
          '500': '#ffc700',
          '600': '#d2a400',
          '700': '#a68100',
          '800': '#795f00',
          '900': '#4d3c00',
          foreground: '#000',
          DEFAULT: '#ffc700'
        },
        danger: {
          '50': '#fde7ed',
          '100': '#fbc6d3',
          '200': '#f8a5b9',
          '300': '#f6849f',
          '400': '#f36286',
          '500': '#f1416c',
          '600': '#c73659',
          '700': '#9d2a46',
          '800': '#721f33',
          '900': '#481420',
          foreground: '#000',
          DEFAULT: '#f1416c'
        },
        background: '#fafaff',
        foreground: {
          '50': '#e0dfe1',
          '100': '#b4b3b8',
          '200': '#88868e',
          '300': '#5c5a64',
          '400': '#302d3b',
          '500': '#040111',
          '600': '#03010e',
          '700': '#03010b',
          '800': '#020008',
          '900': '#010005',
          foreground: '#fff',
          DEFAULT: '#040111'
        },
        content1: {
          DEFAULT: '#f2f8ff',
          foreground: '#000'
        },
        content2: {
          DEFAULT: '#d9e9ff',
          foreground: '#000'
        },
        content3: {
          DEFAULT: '#bfdaff',
          foreground: '#000'
        },
        content4: {
          DEFAULT: '#a6cbff',
          foreground: '#000'
        },
        focus: '#0069ff',
        overlay: '#000000',
        divider: '#111111'
      }
    },
    dark: {
      colors: {
        default: {
          '50': '#0c0e11',
          '100': '#13161b',
          '200': '#1a1f24',
          '300': '#21272e',
          '400': '#282f38',
          '500': '#4e535b',
          '600': '#73787e',
          '700': '#999ca0',
          '800': '#bfc1c3',
          '900': '#e4e5e6',
          foreground: '#fff',
          DEFAULT: '#282f38'
        },
        primary: {
          '50': '#002f4a',
          '100': '#004b75',
          '200': '#0067a1',
          '300': '#0082cc',
          '400': '#009ef7',
          '500': '#2daff8',
          '600': '#59c0fa',
          '700': '#86d1fb',
          '800': '#b3e2fd',
          '900': '#dff3fe',
          foreground: '#000',
          DEFAULT: '#009ef7'
        },
        secondary: {
          '50': '#221146',
          '100': '#361b6f',
          '200': '#4a2598',
          '300': '#5e2fc1',
          '400': '#7239ea',
          '500': '#8b5cee',
          '600': '#a37ef1',
          '700': '#bca1f5',
          '800': '#d5c4f9',
          '900': '#ede6fc',
          foreground: '#fff',
          DEFAULT: '#7239ea'
        },
        success: {
          '50': '#183e29',
          '100': '#266141',
          '200': '#348559',
          '300': '#42a971',
          '400': '#50cd89',
          '500': '#6fd69e',
          '600': '#8ddfb2',
          '700': '#ace7c7',
          '800': '#cbf0dc',
          '900': '#e9f9f0',
          foreground: '#000',
          DEFAULT: '#50cd89'
        },
        warning: {
          '50': '#4d3c00',
          '100': '#795f00',
          '200': '#a68100',
          '300': '#d2a400',
          '400': '#ffc700',
          '500': '#ffd12d',
          '600': '#ffdb59',
          '700': '#ffe486',
          '800': '#ffeeb3',
          '900': '#fff8df',
          foreground: '#000',
          DEFAULT: '#ffc700'
        },
        danger: {
          '50': '#481420',
          '100': '#721f33',
          '200': '#9d2a46',
          '300': '#c73659',
          '400': '#f1416c',
          '500': '#f36286',
          '600': '#f6849f',
          '700': '#f8a5b9',
          '800': '#fbc6d3',
          '900': '#fde7ed',
          foreground: '#000',
          DEFAULT: '#f1416c'
        },
        background: '#030208',
        foreground: {
          '50': '#46464d',
          '100': '#6e6e79',
          '200': '#9797a6',
          '300': '#bfbfd2',
          '400': '#e8e8ff',
          '500': '#ececff',
          '600': '#f0f0ff',
          '700': '#f4f4ff',
          '800': '#f8f8ff',
          '900': '#fcfcff',
          foreground: '#000',
          DEFAULT: '#e8e8ff'
        },
        content1: {
          DEFAULT: '#001026',
          foreground: '#fff'
        },
        content2: {
          DEFAULT: '#001533',
          foreground: '#fff'
        },
        content3: {
          DEFAULT: '#001a40',
          foreground: '#fff'
        },
        content4: {
          DEFAULT: '#00204d',
          foreground: '#fff'
        },
        focus: '#0069ff',
        overlay: '#ffffff',
        divider: '#ffffff'
      }
    }
  },
  layout: {
    fontSize: {
      tiny: '0.75rem',
      small: '0.875rem',
      medium: '1rem',
      large: '1.125rem'
    },
    lineHeight: {
      tiny: '1rem',
      small: '1.25rem',
      medium: '1.5rem',
      large: '1.75rem'
    },
    radius: {
      small: '0.5rem',
      medium: '0.75rem',
      large: '0.875rem'
    },
    borderWidth: {
      small: '1px',
      medium: '2px',
      large: '3px'
    },
    disabledOpacity: '0.5',
    dividerWeight: '1',
    hoverOpacity: '0.9'
  }
})
