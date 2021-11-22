import { toRem } from '~/lib/helpers/utils/to-rem'

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
  tiny: toRem(12),
  small: toRem(14),
  normal: toRem(16),
  medium: toRem(20),
  large: toRem(24),
  xLarge: toRem(32),
  xxLarge: toRem(48),
  xxxLarge: toRem(64),
  huge: toRem(96),
  xHuge: toRem(128),
  xxHuge: toRem(192),
  xxxHuge: toRem(256)
}
