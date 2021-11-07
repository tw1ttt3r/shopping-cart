import { Product } from "../types/Product";
import { ProductDetailProps } from "../types/ProductDetailProps";
import { ProductItem } from "./ProductItem";

export function ProductList({ products }: ProductDetailProps) {
    return(
        <ul className="flex flex-wrap justify-around">
            { products.map(
                (product: Product, index: number) => 
                    <ProductItem key={`product-${index}`} product={product} />
                )
            }
        </ul>
    )
}
