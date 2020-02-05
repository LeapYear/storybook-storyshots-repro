import { ThemeColors } from './colors'

interface ThemeHeadings {
  hd1: string
  hd2: string
  hd3: string
  hd4: string
  hd5: string
  hd6: string
}

export type HeadingOptions = keyof ThemeHeadings

interface ThemeFontSizes {
  fs200: string
  fs300: string
  fs400: string
  fs500: string
  fs600: string
  fs700: string
}

export type FontSizeOptions = keyof ThemeFontSizes

interface ThemeFontWeight {
  fwLight: number
  fwNormal: number
  fwBold: number
}

export type FontWeightOptions = keyof ThemeFontWeight

export default interface ThemeInterface
  extends ThemeHeadings,
    ThemeFontSizes,
    ThemeFontWeight {
  colors: ThemeColors
  navigationHeight: string
  addBorders: () => string
  addBordersWithColor: (borderColor: string, shadowColor: string) => string
  truncate: () => string
  toRGB: (hex: string, opacity: string) => string
  addHover: () => string
  addBoxShadow: () => string
}
