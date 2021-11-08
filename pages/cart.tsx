import { useContext } from "react"
import Link from "next/link"
import { CartProductList } from "@/components/CartProductList";
import { ShoppingCartContext } from "@/lib/shoppingCartContext";
import EmptyCartButton from "@/components/EmptyCartButton";

function Cart() {

    const [context, setContext] = useContext(ShoppingCartContext as any);

    return (
        <>
            <Link href="/" passHref>
                <h1 className="cursor-pointer text-indigo-700">Seguir comprando</h1>
            </Link>
            {
                context.cart.length > 0
                    ? <><CartProductList products={context.products} cart={context.cart} />
                        <div className="flex justify-end right-0 fixed bottom-10">
                            <h2 className="mr-10 bg-gray-600 text-white px-6">Total: {new Intl.NumberFormat('es-MX', {style: 'currency', currency: 'MXN'}).format(Number(context.cart.reduce((acc: any, item: any) => acc + item.quantity * context.products.filter( (p: any) => p.id === item.id)[0].price, 0)))} </h2>
                        </div>
                        <EmptyCartButton /></>
                    : <div>
                        <h1 className="text-center">No hay productos en el carrito</h1>
                    </div>
            }
            
        </>
    )
}

export default Cart