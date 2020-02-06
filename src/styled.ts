// This file reexports styled components so that
import * as styledComponents from 'styled-components'
import { theme } from './themes'

type ThemeInterface = typeof theme
type ColorOptions = keyof ThemeInterface['colors']

const {
  default: styled,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  ThemeInterface
>

export default styled

type StyledFunction<T> = (
  name: T
) => styledComponents.InterpolationFunction<
  styledComponents.ThemeProps<ThemeInterface>
>

export const color: StyledFunction<ColorOptions> = (name) => (p) =>
  p.theme.colors[name]
