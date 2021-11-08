import { ItemCart } from "@/types/ItemCart"

export async function getLocalStorageCart(): Promise<ItemCart[]> {
    if (typeof window !== "undefined") {
        if (!!window.localStorage.getItem('shoppingCartTest')) {
            return JSON.parse(String(window.localStorage.getItem('shoppingCartTest')))
        }
    }
    return []
}

export function setLocalStorageCart(cart: ItemCart[]) {
    window.localStorage.setItem('shoppingCartTest', JSON.stringify(cart))
}