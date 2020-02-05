// This file reexports styled components so that
import * as styledComponents from 'styled-components'

import { ColorOptions } from './themes/colors'
import ThemeInterface, {
  FontSizeOptions,
  FontWeightOptions,
} from './themes/ThemeInterface'

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  ThemeInterface
>

export interface StyledInterface
  extends styledComponents.ThemeProps<ThemeInterface> {
  'style'?: React.CSSProperties
  'children'?: React.ReactNode
  'className'?: string
  'key'?: number | string
  'data-testid'?: string
  'ref'?: React.ReactElement<HTMLElement>
}

export { css, createGlobalStyle, keyframes, ThemeProvider }
export default styled

type StyledFunction<T> = (
  name: T
) => styledComponents.InterpolationFunction<
  styledComponents.ThemeProps<ThemeInterface>
>

/**
 * Use a color, font size, or font weight in a styled component.
 *
 * Usage:
 *
 *   const RedContainer = styled('div')`
 *     background: ${color('r4')}
 *   `
 *
 *   const TinyText = styled(Text)`
 *     font-size: ${fontSize('fs300')}
 *   `
 *
 *   const ThinText = styled(Text)`
 *     font-weight: ${fontWeight('fwLight')}
 *   `
 */

export const color: StyledFunction<ColorOptions> = (name) => (p) =>
  p.theme.colors[name]

export const fontSize: StyledFunction<FontSizeOptions> = (name) => (p) =>
  p.theme[name]

export const fontWeight: StyledFunction<FontWeightOptions> = (name) => (p) =>
  p.theme[name]
