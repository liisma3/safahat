import Head from 'next/head'
import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import '@/styles/global.css'
import SEO from '@/lib/next-seo-config';
import { NextSeo } from 'next-seo';
import Layout from '@/components/Layout';
import { InterfaceProvider } from '@/store/contexts/InterfaceContext'
import { useApollo } from '@/lib/apolloClient';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


export default function myApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const apolloClient = useApollo(pageProps)

  return (

    <>
      <Head>
        <title>liismaiil /ludique Organistaion and Family tools </title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <NextSeo {...SEO} />

      <Layout>
        <ToastContainer position="top-center" />
        <ApolloProvider client={apolloClient}>
          <InterfaceProvider>

            <Component {...pageProps} />
          </InterfaceProvider>
        </ApolloProvider>

      </Layout>
    </>
  )
}
