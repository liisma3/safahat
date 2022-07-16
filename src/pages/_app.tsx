import Head from 'next/head'
import { AppProps } from 'next/app'
import '../styles/index.css'
import SEO from '@/lib/next-seo-config';
import { NextSeo } from 'next-seo';
import { withApollo } from '@/lib/withApollo';
export default withApollo(({ Component, pageProps }: AppProps) => {

  return (

    <>
      <Head>
        <title>liismaiil /ludique Organistaion and Family tools </title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <NextSeo {...SEO} />


      <Component {...pageProps} />
    </>
  )
})
