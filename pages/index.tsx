import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ProductList } from '../components/ProductList'
import { HomeState } from '../types/HomeState'

const Home: NextPage = ({ products, fetching }: any) => {

  const [state, setState] = useState<HomeState>({
    loading: true
  })

  useEffect(() => {
    if (!fetching) {
      setState({
        loading: false,
      })
    }
  }, [fetching])

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      { state.loading
        ? <Image src="/loading.gif" width="100%" height="100%" />
        : <div className="px-5 my-5 h-screen w-screen">
          <ProductList products={products} />
        </div>
      }
    </>
  )
}

Home.getInitialProps = async (ctx) => {
  let products = null
  await fetch('https://products-api-meru.vercel.app/api/products', {
    method: 'GET'
  }).then( res => res.json())
  .then( data => products = data)

  return { products, fetching: false }
}

export default Home
