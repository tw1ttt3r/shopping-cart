import React, { useContext } from "react";
import Image from 'next/image';
import { CartItemProps } from "@/types/CartItemProps";
import { ShoppingCartContext } from "@/lib/shoppingCartContext";
import changeQuantityItemCart from "@/lib/changeQuantityItemCart";


function CartItem({ product, itemCart, key }: CartItemProps) {

    const [ context, setContext ] = useContext(ShoppingCartContext as any);

    const handleAddRemoveItem = (e: React.MouseEvent<HTMLButtonElement>): void => {
        const action = e.currentTarget.getAttribute("data-action")
        changeQuantityItemCart(product, String(action), context, setContext)
    }

    return (
        <React.Fragment key={ key }>
            <div className="flex flex-col border-2 border-gray-300 p-4">
                <h1>{product.name}</h1>
                <div className="flex xs:flex-col md:flex-row justify-around items-center">
                    <Image src={product.cover as any} alt="product-image" width="100%" height="240" objectFit="contain" />
                    <div className="flex flex-col">
                        <p className="text-center">Cantidad: {itemCart.quantity}</p>
                        <div className="flex justify-center">
                            <button data-action="add" onClick={handleAddRemoveItem} className="w-8 h-8 text-lg border hover:bg-gray-200">+</button>
                            <button data-action="remove" onClick={handleAddRemoveItem} className="w-8 h-8 text-lg border hover:bg-gray-200">-</button>
                        </div>
                    </div>
                    <p className="text-center">Precio: {new Intl.NumberFormat('es-MX', {style: 'currency', currency: 'MXN'}).format(Number(product.price))}</p>
                    <p className="text-center">Total: {new Intl.NumberFormat('es-MX', {style: 'currency', currency: 'MXN'}).format(Number(product.price) * itemCart.quantity)}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CartItem;