import Link from 'next/link'
import { PrimaryUL } from './style'
import { useRouter } from 'next/router'

const navItems = [
  {
    name: 'Home',
    href: '',
    index: '00'
  },
  {
    name: 'Destination',
    href: '/destination',
    index: '01'
  },
  {
    name: 'Crew',
    href: '/crew',
    index: '02'
  },
  {
    name: 'Technology',
    href: '/technology',
    index: '03'
  }
]

const PrimaryNavigation = () => {
  const { pathname } = useRouter()

  function isTargetPageActive(targetUrl: string) {
    if (pathname === targetUrl) {
      return 'active'
    }
    return ''
  }

  function Item({ name, href, index }: any) {
    const actualHref = `/space-travel${href}`
    return (
      <Link href={actualHref} key={index}>
        <li className={isTargetPageActive(actualHref)}>
          <a>
            <span>{index}</span>
            {name}
          </a>
        </li>
      </Link>
    )
  }

  return (
    <nav>
      <PrimaryUL>
        {navItems.map(item => (
          <Item key={item.index} {...item} />
        ))}
      </PrimaryUL>
    </nav>
  )
}

export default PrimaryNavigation
