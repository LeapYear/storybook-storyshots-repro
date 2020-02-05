import { themeColors } from './colors'
import ThemeInterface from './ThemeInterface'

const hd1 = '2.25rem'
const hd2 = '2rem'
const hd3 = '1.75rem'
const hd4 = '1.5rem'
const hd5 = '1.25rem'
const hd6 = '1.125rem'

const fs200 = '0.625rem'
const fs300 = '0.75rem'
const fs400 = '0.875rem'
const fs500 = '1rem'
const fs600 = '1.125rem'
const fs700 = '1.25rem'

const fwLight = 300
const fwNormal = 400
const fwBold = 700

export const theme: ThemeInterface = {
  colors: themeColors,
  hd1,
  hd2,
  hd3,
  hd4,
  hd5,
  hd6,
  fs200,
  fs300,
  fs400,
  fs500,
  fs600,
  fs700,
  fwLight,
  fwNormal,
  fwBold,
  navigationHeight: '48px',
  addBorders(): string {
    return `
			border: 1px solid ${themeColors.border};
			box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 15px -5px;
		`
  },
  addBordersWithColor(borderColor, shadowColor): string {
    return `
			border: 1px solid ${borderColor};
			box-shadow: ${shadowColor} 0px 5px 15px -5px;
		`
  },
  addBoxShadow(): string {
    return `
			transition: box-shadow 0.2s ease;
		`
  },
  truncate(): string {
    return `
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
		`
  },
  toRGB(hex: string, opacity: string): string {
    let rgb: string[] = hex.replace('#', '').split('', 3)
    rgb.map((str) => parseInt(str, 10))

    if (opacity) {
      rgb = rgb.concat(opacity)
    }

    return `rgba(${rgb.join(',')})`
  },
  addHover(): string {
    return `
			transition: opacity 0.2s ease;
			&:hover {
				opacity: 0.7;
				cursor: pointer;
			}
		`
  },
}
