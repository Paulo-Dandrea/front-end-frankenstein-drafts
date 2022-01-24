import type { NextPage } from 'next'
import styled from 'styled-components'
import Link from 'next/link'

const Title = styled.h1`
  color: red;
`

const Home: NextPage = () => {
  return (
    <>
      <nav>
        <Link href="/space-travel">
          <a>Space Travel</a>
        </Link>
      </nav>

      <div className='debug'>
        <Title> The confidence to show me to the world. </Title>
      </div>
    </>
  )
}

export default Home
