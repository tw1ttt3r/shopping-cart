import ShoppingCartButton from "./ShoppingCartButton";

export default function Layout({  children }: any) {
    return (
        <section className="flex justify-center items-center">
            <main>
                {children}
            </main>
            <ShoppingCartButton />
        </section>
    )
}
