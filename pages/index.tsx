import type { NextPage } from 'next'
import Head from 'next/head'
import { useContext } from 'react'
import { ProductList } from '@/components/ProductList'
import { ShoppingCartContext } from '@/lib/shoppingCartContext'

const Home: NextPage = () => {
  const [ context, setContext ] = useContext(ShoppingCartContext as any);

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
