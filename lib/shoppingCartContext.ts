import { ContextInitialApp } from "@/types/ContextInitialApp";
import { createContext } from "react";

export const ShoppingCartContext = createContext<ContextInitialApp>({
    products: [],
    cart: []
});
