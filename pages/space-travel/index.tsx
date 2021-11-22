import MainLayout from '~/ui/business-components/space-travel/layout/main-layout'
import { ContentContainer as GlobalContentContainer } from '~/ui/containers/container'

import styled from 'styled-components'

import { LargeButton } from '~/ui/business-components/space-travel/buttons/large-button/style'
import { GridContainer } from '~/ui/business-components/space-travel/layout/main-layout/grid-container'

const TextContainer = styled.div`
  h1,
  span {
    text-transform: uppercase;
  }
  h1 {
    font-family: 'Barlow Condensed', sans-serif;
    letter-spacing: ${({ theme }) => theme.space.medium};
    font-size: ${({ theme }) => theme.fontSizes.mobile.fs700};

    @media (min-width: 53em) {
      font-size: ${({ theme }) => theme.fontSizes.tablet.fs700};
    }
    @media (min-width: 45em) {
      font-size: ${({ theme }) => theme.fontSizes.desktop.fs700};
    }
    color: ${({ theme }) => theme.colour.spaceTravel.accent};
  }
  span {
    font-family: 'Bellefair', serif;
    font-size: ${({ theme }) => theme.fontSizes.mobile.fs900};
    @media (min-width: 53em) {
      font-size: ${({ theme }) => theme.fontSizes.tablet.fs900};
    }
    @media (min-width: 45em) {
      font-size: ${({ theme }) => theme.fontSizes.desktop.fs900};
    }
    color: ${({ theme }) => theme.colour.white};
  }
`

const SpaceTravel = () => {
  return (
    <>
      <MainLayout>
        <TextContainer>
          <GridContainer>
            <div>
              <h1>
                So, you want to travel to<span>Space</span>
              </h1>
              <p>
                Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover
                kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world
                experience!
              </p>
            </div>
            <div>
              <LargeButton>Explore</LargeButton>
            </div>
          </GridContainer>
        </TextContainer>
      </MainLayout>
    </>
  )
}

export default SpaceTravel
