const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        maxlength: 25,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: 'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png'
    },
    role: { type: String, default: 'user' },
    mobile: { type: String, default: '' },
    address: { type: String, default: '' },
    story: {
        type: String, 
        default: '',
        maxlength: 200
    },
    website: { type: String, default: '' },
    followers: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
    following: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
    saved: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
    
    cart: {
        items: {
            type: [{
                productId: { type: mongoose.Types.ObjectId, ref: 'Post', required: true },
                quantity: { type: Number, default: 1, min: 1 },
                price: { type: Number, required: true }
            }],
            default: [] // Asegura que siempre haya un array
        },
        totalPrice: {
            type: Number,
            default: 0
        }
    },
    
}, {
    timestamps: true
})

module.exports = mongoose.model('user', userSchema)