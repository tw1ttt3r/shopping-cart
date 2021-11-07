import Layout from '../components/Layout'
import 'tailwindcss/tailwind.css'
import { ShoppingCartContext } from '../lib/shoppingCartContext';
import { useState } from 'react';
import { Products } from '../types/Products';

function MyApp({ Component, pageProps, products }: any) {

  const [context, setContext] = useState<Products>({
    products: products,
  });

  return(
    <ShoppingCartContext.Provider value={[context, setContext]}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ShoppingCartContext.Provider>
  ) 
}

MyApp.getInitialProps = async (ctx: any) => {
  let products = null
  await fetch('https://products-api-meru.vercel.app/api/products', {
    method: 'GET'
  }).then( res => res.json())
  .then( data => products = data)
  return {...{ products}}
}


export default MyApp
