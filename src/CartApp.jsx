
import { useItemsCart } from "./hooks/useItemsCart"
import { NavBar } from "./componets/NavBar";
import { CatRoutes } from "./routes/CatRoutes";

export const CartApp = () => {

    const { cartItems, handlerAddProductCart, handlerDeleteProductCart } = useItemsCart();

    return (
        <>
            <NavBar />
            <div className="container my-4">
                <h3>Cart App</h3>
                <CatRoutes 
                cartItems={cartItems} 
                handlerAddProductCart={handlerAddProductCart}
                handlerDeleteProductCart={handlerDeleteProductCart} />
            </div>
        </>
    )
}