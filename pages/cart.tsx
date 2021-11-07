import Link from "next/link"

function Cart() {
    return (
        <>
            <Link href="/" passHref>
                <h1 className="cursor-pointer text-indigo-700">Seguir comprando</h1>
            </Link>
            <h1>cart</h1>
        </>
    )
}

export default Cart