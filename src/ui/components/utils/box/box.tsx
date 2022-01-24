import styled from 'styled-components'
import {
  space,
  color,
  border,
  layout,
  flexbox,
  grid,
  SpaceProps,
  ColorProps,
  BorderProps,
  LayoutProps,
  FlexboxProps,
  GridProps
} from 'styled-system'


type BoxProps = SpaceProps &
  ColorProps &
  BorderProps &
  FlexboxProps &
  GridProps &
  LayoutProps

export const Box = styled.div<BoxProps>(
  { boxSizing: 'border-box' },
  space,
  color,
  border,
  layout,
  flexbox,
  grid
)
