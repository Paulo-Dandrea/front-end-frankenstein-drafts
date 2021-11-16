import Head from 'next/head'
import PrimaryNavigation from '../primary-navigation'
import Link from 'next/link'
import { ReactNode } from 'react'
import { SpaceTravelStyle } from '~/ui/theme/space-travel-style'

interface LayoutProps {
  children?: ReactNode
}

const Layout = (props: LayoutProps) => {
  const appTitle = `Space-Travel`

  return (
    <div>
      <Head>
        <title>{appTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      <SpaceTravelStyle />

      <div>{props.children}</div>
      <PrimaryNavigation />
      <Link href="/">Home from Home</Link>
    </div>
  )
}

export default Layout
