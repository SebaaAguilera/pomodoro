import Head from 'next/head'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

/**
 * 
 * DefaultLayout, it holds the Header and Footer
 * @component
 */
export default function DefaultLayout({ children }) {
  return (
    <>
      <Head>
        <title>NeuralClocks</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
          <Header />
          { children }
          <Footer />
      </main>
    </>
  )
}