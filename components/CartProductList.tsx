import { CartProductListProps } from "@/types/CartProductListProps";
import { ItemCart } from "@/types/ItemCart";
import { Product } from "@/types/Product";
import CartItem from "./CartItem";

export function CartProductList({ products, cart }: CartProductListProps) {
    return(
        <ul className="px-10">
            {
                cart
                    .map((item: ItemCart) => 
                        <CartItem product={products.filter( (p: Product) => p.id === item.id)[0]} itemCart={item} key={`product-${item.id}`} />
                    )
            }
        </ul>
    )
}