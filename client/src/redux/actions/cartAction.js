import { GLOBALTYPES } from './globalTypes'
import { patchDataAPI, deleteDataAPI } from '../../utils/fetchData'

export const addToCart = ({post, auth}) => async (dispatch) => {
    // Verificar y crear carrito si no existe
    if (!auth.user.cart) {
        auth.user.cart = { items: [], totalPrice: 0 }
    }
    
    // Actualización optimista
    const newCartItems = [...auth.user.cart.items, {
        productId: post._id,
        quantity: 1,
        price: post.price
    }]
    const newTotalPrice = auth.user.cart.totalPrice + post.price
    
    const newUser = {
        ...auth.user,
        cart: {
            items: newCartItems,
            totalPrice: newTotalPrice
        }
    }
    
    dispatch({ 
        type: GLOBALTYPES.AUTH, 
        payload: {...auth, user: newUser}
    })

    try {
        // Usa tu función patchDataAPI con la URL correcta
        await patchDataAPI(`cart/add/${post._id}`, null, auth.token)
    } catch (err) {
        // Revertir en caso de error
        dispatch({
            type: GLOBALTYPES.AUTH,
            payload: auth
        })
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {error: err.response?.data?.msg || 'Error al agregar al carrito'}
        })
    }
}
export const removeFromCart = ({post, auth}) => async (dispatch) => {
    // Encontrar el item a eliminar
    const itemToRemove = auth.user.cart.items.find(item => item.productId === post._id)
    if (!itemToRemove) return
    
    // Actualización optimista
    const newCartItems = auth.user.cart.items.filter(item => item.productId !== post._id)
    const newTotalPrice = auth.user.cart.totalPrice - (itemToRemove.price * itemToRemove.quantity)
    
    const newUser = {
        ...auth.user,
        cart: {
            items: newCartItems,
            totalPrice: newTotalPrice
        }
    }
    
    dispatch({ 
        type: GLOBALTYPES.AUTH, 
        payload: {...auth, user: newUser}
    })

    try {
        await deleteDataAPI(`cart/remove/${post._id}`, auth.token)
    } catch (err) {
        // Revertir en caso de error
        dispatch({
            type: GLOBALTYPES.AUTH,
            payload: auth
        })
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {error: err.response?.data?.msg || 'Error al eliminar del carrito'}
        })
    }
}

export const updateCartItem = ({post, auth, quantity}) => async (dispatch) => {
    // Encontrar el item a actualizar
    const itemIndex = auth.user.cart.items.findIndex(item => item.productId === post._id)
    if (itemIndex < 0) return
    
    // Calcular diferencia
    const oldQuantity = auth.user.cart.items[itemIndex].quantity
    const priceDifference = (quantity - oldQuantity) * post.price
    
    // Actualización optimista
    const newCartItems = [...auth.user.cart.items]
    newCartItems[itemIndex].quantity = quantity
    
    const newUser = {
        ...auth.user,
        cart: {
            items: newCartItems,
            totalPrice: auth.user.cart.totalPrice + priceDifference
        }
    }
    
    dispatch({ 
        type: GLOBALTYPES.AUTH, 
        payload: {...auth, user: newUser}
    })

    try {
        await patchDataAPI(`cart/update/${post._id}`, { quantity }, auth.token)
    } catch (err) {
        // Revertir en caso de error
        dispatch({
            type: GLOBALTYPES.AUTH,
            payload: auth
        })
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {error: err.response?.data?.msg || 'Error al actualizar cantidad'}
        })
    }
}