import { ContextInitialApp } from "@/types/ContextInitialApp";
import { ItemCart } from "@/types/ItemCart";
import { Product } from "@/types/Product";
import { setLocalStorageCart } from "./manageLocalStorageCart";

export default function changeQuantityItemCart(product: Product, action: string, context: ContextInitialApp, setContext: any) {

    let cart: ItemCart[] = [];
    if (context.cart.filter((p: ItemCart) => p.id === Number(product.id)).length === 0) {
        cart = [...context.cart, { id: Number(product.id), quantity: 1 }]
    } else {
        cart = context.cart.reduce((acc: ItemCart[], curr: ItemCart) => {
            if (curr.id === Number(product.id)) {
                let quantity = curr.quantity;
                if (action === 'add') {
                    quantity += 1;
                } else {
                    if(quantity > 1) {
                        quantity -= 1;
                    } else {
                        quantity = 0;
                    }
                }
                return [...acc, { id: curr.id, quantity }];
            }
            return [...acc, curr];
        }, [])
    }
    setContext({
        ...context,
        cart
    })
    setLocalStorageCart(cart);
}