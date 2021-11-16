import { toRem } from '~/lib/helpers/utils/to-rem'

const interfaceGrid = 8

export default {
  tiny: toRem(2),
  small: toRem(4),
  default: toRem(8),
  medium: toRem(16),
  large: toRem(24),
  xLarge: toRem(32),
  xxLarge: toRem(40),
  xxxLarge: toRem(48),
  huge: toRem(56),
  xHuge: toRem(64),
  xxHuge: toRem(72),
  xxxHuge: toRem(80),

  // [ 0, 4, 8, 16, 24, 32, 48, 64, 128, 256, 512 ]
  [0]: toRem(interfaceGrid * 0),
  [1]: toRem(interfaceGrid * 0.5),
  [2]: toRem(interfaceGrid * 1),
  [3]: toRem(interfaceGrid * 2),
  [4]: toRem(interfaceGrid * 3),
  [5]: toRem(interfaceGrid * 4),
  [6]: toRem(interfaceGrid * 6),
  [7]: toRem(interfaceGrid * 8),
  [8]: toRem(interfaceGrid * 16),
  [9]: toRem(interfaceGrid * 32),
  [10]: toRem(interfaceGrid * 64)
}
