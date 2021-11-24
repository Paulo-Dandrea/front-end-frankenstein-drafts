export default {
  mobile: {
    fs900: '5rem',
    fs800: '3.5rem',
    fs700: '1.5rem',
    fs600: '1rem',
    fs500: '1.75rem',
    fs400: '0.9375rem',
    fs300: '1rem',
    fs200: '0.875rem'
  },
  tablet: {
    fs900: '9.375rem',
    fs800: '3.5rem',
    fs600: '1.5rem',
    fs400: '1rem'
  },
  desktop: {
    fs800: '6.25rem',
    fs700: '3.5rem',
    fs600: '2rem',
    fs500: '1.75rem',
    fs400: '1.125rem',
    fs300: '1rem',
    fs200: '0.875rem'
  },
  // TODO: I've learned that I could put CSS functions inside strings
  clamp5remTo9375rem: 'clamp(5rem, 10vw + 1rem, 9.375rem)',
}
