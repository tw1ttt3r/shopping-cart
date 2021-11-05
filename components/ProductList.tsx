import { ProductItem } from "./ProductItem";

export function ProductList({ products }: any) {
    return(
        <ul className="flex flex-wrap justify-around">
            { products.map((product: any) => <ProductItem product={product} />)}
        </ul>
    )
}
