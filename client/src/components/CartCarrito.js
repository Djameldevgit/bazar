import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
//import { removeFromCart} from '../../redux/actions/cartAction'
import { GLOBALTYPES } from '../redux/actions/globalTypes'
import { removeFromCart, updateCartItem  } from '../redux/actions/cartAction'
 

const CartCarrito = () => {
    const { auth } = useSelector(state => state)
    
    // Verificación segura
    const cartItems = auth.user?.cart?.items || []
    const totalPrice = auth.user?.cart?.totalPrice || 0

    if (!auth.user) {
        return (
            <div className="cart_empty">
                <p>Por favor inicia sesión para ver tu carrito</p>
            </div>
        )
    }

    return (
        <div className="cart_container">
            <h2>Tu Carrito</h2>
            
            {cartItems.length === 0 ? (
                <div className="cart_empty">
                    <p>Tu carrito está vacío</p>
                </div>
            ) : (
                <div className="cart_items">
                    {cartItems.map(item => (
                        <div key={item.productId} className="cart_item">
                            {/* Renderizar cada item */}
                        </div>
                    ))}
                </div>
            )}
            
            <div className="cart_total">
                Total: ${totalPrice.toFixed(2)}
            </div>
        </div>
    )
}

export default CartCarrito