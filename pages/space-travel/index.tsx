import Link from 'next/link'
import { SpaceTravelStyle } from '~/ui/theme/space-travel-style'

import PrimaryNavigation from '~/ui/business-components/space-travel/primary-navigation/'

const SpaceTravel = () => {
  return (
    <>
      <SpaceTravelStyle />
      <div className='debug'>Space travel</div>
      <button className='large-button'>BUTTO</button>
      <Link href="space-travel/page2">page 2</Link>
      <Link href="/">Home from Home</Link>

<PrimaryNavigation />


    <nav>
        <Link href="/space-travel">Home</Link>
        <Link href="/space-travel/destination">Destination</Link>
        <Link href="/space-travel/crew">Crew</Link>
        <Link href="/space-travel/technology">Technology</Link>

        <ul className="primary-navigation underline-indicators flex">
            <li className="active"><a className="uppercase text-white letter-spacing-2" href="#"><span>00</span>Home</a></li>
            <li><a className="uppercase text-white letter-spacing-2" href="#"><span>01</span>Destination</a></li>
            <li><a className="uppercase text-white letter-spacing-2" href="#"><span>02</span>Crew</a></li>
            <li><a className="uppercase text-white letter-spacing-2" href="#"><span>03</span>Technology</a></li>

        </ul>
    </nav>

    </>
  )
}

export default SpaceTravel


// 00 Home
// 01 Destination
// 02 Crew
// 03 Technology

// So, you want to travel to
// Space
// Let’s face it; if you want to go to space, you might as well genuinely go to 
// outer space and not hover kind of on the edge of it. Well sit back, and relax 
// because we’ll give you a truly out of this world experience! 

// Explore