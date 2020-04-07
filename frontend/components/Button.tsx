import styled from 'styled-components'
import { color, ColorProps, space, SpaceProps, layout, LayoutProps, typography, TypographyProps } from 'styled-system'
export const Button = styled.button<ColorProps & SpaceProps & LayoutProps & TypographyProps>`
  ${color}
  ${space}
  ${layout}
  ${typography}
`
