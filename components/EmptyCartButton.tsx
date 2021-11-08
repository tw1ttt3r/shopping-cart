import { useContext } from "react"
import TrashIcon from "./TrashIcon";
import { ShoppingCartContext } from "@/lib/shoppingCartContext";
import { setLocalStorageCart } from "@/lib/manageLocalStorageCart";

function EmptyCartButton() {

    const [context, setContext] = useContext(ShoppingCartContext as any);

    const handleEmpyCart = () => {
        setContext({
            ...context,
            cart: []
        })
        setLocalStorageCart([])
    }


    return (
        <div onClick={handleEmpyCart} className='cursor-pointer fixed flex justify-center items-center bottom-0 right-0 z-50 w-20 h-20 mb-20 mr-10 rounded-full shadow-sm bg-gray-400'>
            <TrashIcon classnames="w-13 h-13"></TrashIcon>
        </div>
    )
}

export default EmptyCartButton;