import { GLOBALTYPES } from '../actions/globalTypes'

const initialState = {
    loading: false,
    items: [],
    totalPrice: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case GLOBALTYPES.ADD_TO_CART:
            return {
                ...state,
                items: action.payload.user.cart.items,
                totalPrice: action.payload.user.cart.totalPrice
            }
            
        case GLOBALTYPES.REMOVE_FROM_CART:
            return {
                ...state,
                items: action.payload.user.cart.items,
                totalPrice: action.payload.user.cart.totalPrice
            }
            
        case GLOBALTYPES.UPDATE_CART_ITEM:
            return {
                ...state,
                items: action.payload.user.cart.items,
                totalPrice: action.payload.user.cart.totalPrice
            }
            
        case GLOBALTYPES.LOADING_CART:
            return {
                ...state,
                loading: action.payload
            }
            
        case GLOBALTYPES.AUTH:
            // Actualizar el carrito cuando cambia la autenticación
            return {
                ...state,
                items: action.payload.user?.cart?.items || [],
                totalPrice: action.payload.user?.cart?.totalPrice || 0
            }
            
        default:
            return state
    }
}

export default cartReducer