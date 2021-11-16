import Link from 'next/link'
import { Flex } from '~/ui/components/utils/flex'
import { PrimaryNav } from './style'

const PrimaryNavigation = () => {
  return (
    <PrimaryNav>
      <Flex gap='1rem'>
        <li>
          <Link href="/space-travel">
            <a>
              <span>00</span>Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/space-travel/destination">
            <a>
              <span>01</span>Destination
            </a>
          </Link>
        </li>
        <li>
          <Link href="/space-travel/crew">
            <a>
              <span>02</span>Crew
            </a>
          </Link>
        </li>
        <li>
          <Link href="/space-travel/technology">
            <a>
              <span>03</span>Technology
            </a>
          </Link>
        </li>
      </Flex>
    </PrimaryNav>
  )
}

export default PrimaryNavigation
