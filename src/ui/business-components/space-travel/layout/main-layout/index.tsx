import { ReactNode } from 'react'

import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

import PrimaryNavigation from '../../primary-navigation'

import { SpaceTravelStyle } from '~/ui/theme/space-travel-style'

import logo from 'public/space-travel/assets/shared/logo.svg'
import { Header, Layout } from './style'
import { Box, Flex } from '~/ui/components/utils'

interface LayoutProps {
  children?: ReactNode
}

const MainLayout = (props: LayoutProps) => {
  const appTitle = `Space-Travel`

  return (
    <Layout>
      <Head>
        <title>{appTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      <SpaceTravelStyle />

      <Header>
        <div>
          <Image src={logo} width="100px" height="100px" alt="Space tourism logo" />
        </div>
        <PrimaryNavigation />
      </Header>

      <div className="all-children">{props.children}</div>
      <Flex justifyContent="space-between">
        <Box color="white">Very</Box>
        <Box color="white">NICE</Box>
      </Flex>
      {/* <Link href="/">Home from Home</Link> */}
    </Layout>
  )
}

export default MainLayout
