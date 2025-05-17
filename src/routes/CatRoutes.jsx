import { Navigate, Route, Routes } from "react-router-dom"
import { CatalogView } from "../componets/CatalogView"
import { CartView } from "../componets/CartView"




export const CatRoutes = ({handlerAddProductCart, cartItems, handlerDeleteProductCart }) => {
    return (
        <Routes>
            <Route path="catalog"
                element={<CatalogView handler={handlerAddProductCart} />}
            />

            <Route path="cart"
                element={(
                    cartItems?.length <= 0 ?
                        <div className="alert alert-warning">Carro vacío</div>
                        :
                        (
                            <div className="my-4 w-50">
                                <CartView items={cartItems} handlerDelete={handlerDeleteProductCart} />
                            </div>
                        )
                )}
            />
            <Route path="/" element={<Navigate to="/catalog" />} />

        </Routes>
    )
}
