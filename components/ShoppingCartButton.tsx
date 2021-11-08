import { useState, useEffect } from "react"
import { useRouter } from 'next/router';
import Link from "next/link";
import cn from 'classnames';
import CartIcon from "./CartIcon";

function ShoppingCartButton() {
    const [ state, setState ] = useState({
        noShow: false
    })

    const router = useRouter()

    useEffect( () => {
        if (!!router) {
            setState({
                ...state,
                noShow: router.pathname === '/cart' ? true : false
            })
        }
    }, [router])

    return (
        <Link href="/cart" passHref>
            <div className={cn('cursor-pointer fixed flex justify-center items-center bottom-0 right-0 z-50 w-20 h-20 mb-10 mr-10 rounded-full shadow-sm bg-gray-400', {'hidden': state.noShow})}>
                <CartIcon classnames="w-13 h-13"></CartIcon>
            </div>
        </Link>
    )
}

export default ShoppingCartButton;