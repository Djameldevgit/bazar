const Posts = require('../models/postModel')
const Users = require('../models/userModel')

const carritoCtrl = {
    addToCart: async (req, res) => {
        try {
            // Cambiar variable 'product' por 'post' para ser consistente
            const post = await Posts.findById(req.params.id);
            if (!post || !post.price) {
                return res.status(404).json({ msg: "Publicación no encontrada o sin precio" });
            }
            
            const user = await Users.findById(req.user._id);
            const postIndex = user.cart.items.findIndex(item => 
                item.productId.toString() === req.params.id
            );
            
            if (postIndex >= 0) {
                user.cart.items[postIndex].quantity += 1;
            } else {
                user.cart.items.push({
                    productId: post._id,  // Mantener productId por consistencia con el schema
                    quantity: 1,
                    price: post.price
                });
            }
            
            user.cart.totalPrice = user.cart.items.reduce(
                (total, item) => total + (item.price * item.quantity), 0
            );
            
            await user.save();
            
            res.json({
                msg: 'Publicación agregada al carrito',
                cart: user.cart
            });
            
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },

    removeFromCart: async (req, res) => {
        try {
            const user = await Users.findById(req.user._id)
            const initialItemCount = user.cart.items.length
            
            // Filtrar para remover el producto
            user.cart.items = user.cart.items.filter(item => 
                item.productId.toString() !== req.params.id
            )
            
            if (user.cart.items.length === initialItemCount) {
                return res.status(404).json({ msg: "Producto no encontrado en el carrito" })
            }
            
            // Recalcular total
            user.cart.totalPrice = user.cart.items.reduce(
                (total, item) => total + (item.price * item.quantity), 0
            )
            
            await user.save()
            
            res.json({
                msg: 'Producto eliminado del carrito',
                cart: user.cart
            })
            
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },

    getCart: async (req, res) => {
        try {
            const user = await Users.findById(req.user._id).populate('cart.items.productId')
            
            res.json({
                items: user.cart.items,
                totalPrice: user.cart.totalPrice,
                itemCount: user.cart.items.reduce((sum, item) => sum + item.quantity, 0)
            })
            
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },

    updateCartItemQuantity: async (req, res) => {
        try {
            const { quantity } = req.body
            if (!quantity || quantity < 1) {
                return res.status(400).json({ msg: "Cantidad inválida" })
            }
            
            const user = await Users.findById(req.user._id)
            const item = user.cart.items.find(item => 
                item.productId.toString() === req.params.id
            )
            
            if (!item) {
                return res.status(404).json({ msg: "Producto no encontrado en el carrito" })
            }
            
            // Calcular diferencia de precio
            const priceDifference = (quantity - item.quantity) * item.price
            item.quantity = quantity
            
            // Actualizar total
            user.cart.totalPrice += priceDifference
            
            await user.save()
            
            res.json({
                msg: 'Cantidad actualizada',
                cart: user.cart
            })
            
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    }
}

module.exports = carritoCtrl