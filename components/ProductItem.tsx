import Image from 'next/image';

export function ProductItem({ product }: any) {
    return(
        <li key={`${product.id.toString()}-${product.name[0]}`}>
            <div className="flex flex-col h-120 w-150 p-4 shadow-sm border-2 cursor-pointer hover:bg-gray-100">
                <h1>{product.name}</h1>
                <Image src={product.cover} alt="product-image" width="100%" height="240" objectFit="contain" />
                <p className="text-center">{new Intl.NumberFormat('es-MX', {style: 'currency', currency: 'MXN'}).format(product.price)}</p>
                <p className="text-center">Cantidad: 0</p>
                <div className="flex justify-center">
                    <button className="w-8 h-8 text-lg border hover:bg-gray-200">+</button>
                    <button className="w-8 h-8 text-lg border hover:bg-gray-200">-</button>
                </div>
            </div>
        </li>
    )
}
