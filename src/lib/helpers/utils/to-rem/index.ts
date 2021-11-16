const BASE = 16

export const toRem = (pixel: number): string => {
  const rem = `${((1 / BASE) * pixel).toFixed(2)}rem`

  return rem
}
