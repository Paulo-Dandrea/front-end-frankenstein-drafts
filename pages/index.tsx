import type { NextPage } from 'next'
// import Head from "next/head";
// import Image from "next/image";
// import styles from '../styles/Home.module.css'
import styled from 'styled-components'

const Title = styled.h1`
  color: red;
`

const Home: NextPage = () => {
  return (
    <div>
      <Title> The confidence to show me to the world. </Title>
    </div>
  )
}

export default Home
