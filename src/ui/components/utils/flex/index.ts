import styled from 'styled-components'

interface FlexProps {
  gap?: string
  direction?: 'row' | 'column'
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
  align?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch'
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
  grow?: number
  shrink?: number
  basis?: string
  style?: any
  className?: string
  children?: any
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  gap: ${props => props.gap};
`
