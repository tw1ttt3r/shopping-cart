import { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css'
import Layout from '@/components/Layout'
import { ShoppingCartContext } from '@/lib/shoppingCartContext';
import { ContextInitialApp } from '@/types/ContextInitialApp';
import { getLocalStorageCart } from '@/lib/manageLocalStorageCart';

function MyApp({ Component, pageProps, products, cartLocalStorage }: any) {

  const [context, setContext] = useState<ContextInitialApp>({
    products: [],
    cart: []
  });

  useEffect(() => {
    setContext({
      ...context,
      products,
      cart: cartLocalStorage
    })
  }, [products, cartLocalStorage])

  return(
    <ShoppingCartContext.Provider value={[context, setContext] as any}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ShoppingCartContext.Provider>
  ) 
}

MyApp.getInitialProps = async () => {
  let products = null
  await fetch('https://products-api-meru.vercel.app/api/products', {
    method: 'GET'
  }).then( res => res.json())
  .then( data => products = data)

  const cartLocalStorage = await getLocalStorageCart()
  return {...{ products, cartLocalStorage }}
}

export default MyApp
