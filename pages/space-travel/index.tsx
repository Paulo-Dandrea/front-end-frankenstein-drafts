import MainLayour from '~/ui/business-components/space-travel/layout/main-layout'
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
    font-size: ${({ theme }) => theme.fontSizes.xxLarge};
    color: ${({ theme }) => theme.colour.spaceTravel.accent};
  }
  span {
    font-family: 'Bellefair', serif;
    font-size: ${({ theme }) => theme.fontSizes.xHuge};
    color: ${({ theme }) => theme.colour.white};
  }
`

const SpaceTravel = () => {
  return (
    <>
      <MainLayour>
        <GlobalContentContainer>
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
        </GlobalContentContainer>
      </MainLayour>

      {/* <nav>
        <ul className="primary-navigation underline-indicators flex">
        <li className="active">
        <a className="uppercase text-white letter-spacing-2" href="#">
        <span>00</span>Home
        </a>
        </li>
        <li>
        <a className="uppercase text-white letter-spacing-2" href="#">
        <span>01</span>Destination
        </a>
        </li>
        <li>
        <a className="uppercase text-white letter-spacing-2" href="#">
        <span>02</span>Crew
        </a>
        </li>
        <li>
        <a className="uppercase text-white letter-spacing-2" href="#">
        <span>03</span>Technology
        </a>
        </li>
        </ul>
      </nav> */}
    </>
  )
}

export default SpaceTravel

// 00 Home
// 01 Destination
// 02 Crew
// 03 Technology

// Explore
