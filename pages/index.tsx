import type { NextPage } from 'next'
import Head from 'next/head'
import { useContext, useState } from 'react'
import { ProductList } from '../components/ProductList'
import { ShoppingCartContext } from '../lib/shoppingCartContext'
import { HomeState } from '../types/HomeState'

const Home: NextPage = () => {
  const [state, setState] = useState<HomeState>({
    loading: true
  });

  const [ context, setContext ] = useContext(ShoppingCartContext);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="px-5 my-5 h-screen w-screen">
        <ProductList products={context.products} />
      </div>
    </>
  )
}

export default Home
