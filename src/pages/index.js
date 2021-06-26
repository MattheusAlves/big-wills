import Head from 'next/head'
import Background from '../components/background'

export default function Home() {
  return (
    <>
      <Head>
        <title>Big Wills</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Background />
    </>
  )
}
