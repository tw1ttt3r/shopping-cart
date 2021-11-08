import { ItemCart } from "./ItemCart";
import { Product } from "./Product";

export type CartItemProps = {
    product: Product;
    itemCart: ItemCart;
    key: string;
}