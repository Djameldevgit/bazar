// actions/cartAction.js
import { GLOBALTYPES } from './globalTypes'
import { putDataAPI, deleteDataAPI, patchDataAPI } from '../../utils/fetchData'

export const addToCart = ({ post, auth }) => async (dispatch) => {
  dispatch({ type: GLOBALTYPES.LOADING_CART, payload: true })

  try {
    await putDataAPI(`cart/add/${post._id}`, null, auth.token)

    const updatedItems = [...auth.user.cart.items, {
      productId: post._id,
      title: post.title,            // 🔥 agrega esto
      image: post.image,
      quantity: 1,
      price: post.price
    }]
    const updatedPrice = auth.user.cart.totalPrice + post.price

    dispatch({
      type: GLOBALTYPES.ADD_TO_CART,
      payload: {
        user: {
          ...auth.user,
          cart: { items: updatedItems, totalPrice: updatedPrice }
        }
      }
    })
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { error: err.response?.data?.msg || "Error al agregar al carrito" }
    })
  } finally {
    dispatch({ type: GLOBALTYPES.LOADING_CART, payload: false })
  }
}

export const removeFromCart = ({ post, auth }) => async (dispatch) => {
  dispatch({ type: GLOBALTYPES.LOADING_CART, payload: true })

  try {
    await deleteDataAPI(`remove/${post._id}`, auth.token)

    const item = auth.user.cart.items.find(i => i.productId === post._id)
    const updatedItems = auth.user.cart.items.filter(i => i.productId !== post._id)
    const updatedPrice = auth.user.cart.totalPrice - (item.price * item.quantity)

    dispatch({
      type: GLOBALTYPES.REMOVE_FROM_CART,
      payload: {
        user: {
          ...auth.user,
          cart: { items: updatedItems, totalPrice: updatedPrice }
        }
      }
    })
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { error: err.response?.data?.msg || "Error al quitar del carrito" }
    })
  } finally {
    dispatch({ type: GLOBALTYPES.LOADING_CART, payload: false })
  }
}

export const updateCartItem = ({ post, auth, quantity }) => async (dispatch) => {
  dispatch({ type: GLOBALTYPES.LOADING_CART, payload: true })

  try {
    await patchDataAPI(`update/${post._id}`, { quantity }, auth.token)

    const items = auth.user.cart.items.map(item => {
      if (item.productId === post._id) {
        const priceDiff = (quantity - item.quantity) * post.price
        return { ...item, quantity }
      }
      return item
    })

    const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0)

    dispatch({
      type: GLOBALTYPES.UPDATE_CART_ITEM,
      payload: {
        user: {
          ...auth.user,
          cart: { items, totalPrice }
        }
      }
    })
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { error: err.response?.data?.msg || "Error al actualizar cantidad" }
    })
  } finally {
    dispatch({ type: GLOBALTYPES.LOADING_CART, payload: false })
  }
}
