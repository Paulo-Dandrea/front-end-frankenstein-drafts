import MainLayout from '~/ui/business-components/space-travel/layout/main-layout'

import { LargeButton } from '~/ui/business-components/space-travel/buttons/large-button/style'
import { GridContainerHome } from '~/ui/business-components/space-travel/layout/main-layout/grid-container'
import { TextContainerHome } from '~/ui/business-components/space-travel/layout/home-layout'

const SpaceTravel = () => {
  return (
    <>
      <MainLayout>
        <TextContainerHome>
          <GridContainerHome>
            <div>
              <h1>
                So, you want to travel to<span>Space</span>
              </h1>
              <p>
                Let’s face it; if you want to go to space, you might as well genuinely go
                to outer space and not hover kind of on the edge of it. Well sit back, and
                relax because we’ll give you a truly out of this world experience!
              </p>
            </div>
            <div>
              {/* TODO: I've Learned that any styled component element can render 'as' another */}
              <LargeButton as="a">Explore</LargeButton>
            </div>
          </GridContainerHome>
        </TextContainerHome>
      </MainLayout>
    </>
  )
}

export default SpaceTravel
