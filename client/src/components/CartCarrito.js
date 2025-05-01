import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../redux/actions/cartAction'

const CartCarrito = () => {
  const dispatch = useDispatch()
  const { cart, auth } = useSelector(state => state)

  const cartItems = cart.items || []
  const totalPrice = cart.totalPrice || 0

  if (!auth.token) {
    return <p>Inicia sesión para ver tu carrito</p>
  }

  return (
    <div className="cart_container">
      <h2>Tu Carrito</h2>

      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={item.productId || index} className="cart_item">
          <img src={item.image} alt={item.title} />
          <h4>{item.title}</h4>
          <p>${(item.price * (item.quantity || 1)).toFixed(2)}</p>
          <button onClick={() => dispatch(removeFromCart({ post: item, auth }))}>
            Eliminar
          </button>
        </div>
        ))
      )}

<div className="cart_total">
  Total: ${parseFloat(totalPrice || 0).toFixed(2)}
</div>
    </div>
  )
}

export default CartCarrito
