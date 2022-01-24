import React from 'react'
import { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
}

const Wrapper = styled.div`
  padding-inline: 2em;
  margin-inline: auto;
  max-width: 80rem;
`

export const ContentContainer = ({ children }: Props) => <Wrapper>{children}</Wrapper>
