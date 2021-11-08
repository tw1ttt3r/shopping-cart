import { useState } from 'react';
import 'tailwindcss/tailwind.css'
import Layout from '@/components/Layout'
import { ShoppingCartContext } from '@/lib/shoppingCartContext';
import { ContextInitialApp } from '@/types/ContextInitialApp';

function MyApp({ Component, pageProps, products }: any) {

  const [context, setContext] = useState<ContextInitialApp>({
    products: products,
    cart: []
  });

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
  return {...{ products}}
}


export default MyApp
