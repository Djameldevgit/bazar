const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  subCategory: {
    type: String,
    required: true
  }, 

  title: {
    type: String,
  
  },

  
  description: {
    type: String,
  },

  price: {
    type: String,
  },

  unidaddeprecio: {
    type: String,
  },

  oferta: {
    type: String,
  },

  change: {
    type: String,

  },

  quartier: {
    type: String,

  },

  wilaya: {
    type: String,

  },
  commune: {
    type: String,

  },
 marca: {
    type: String,

  },
  modelo: {
    type: String,

  },
  wilaya: {
    type: String,

  },
  marcas: {
    type: String,

  },
  modelos: {
    type: String,

  },
  telefono: {
    type: String,

  },
  

  attributes: {
    type: Object, // Cambiar Map por Object
    default: {}   // Establecer un valor predeterminado
  },
  estado: {
    type: String,
    enum: ['pendiente', 'aprobado', 'rechazado'],
    default: 'pendiente',
  },

  images: {
    type: Array,
    required: true
  },
  likes: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
  comments: [{ type: mongoose.Types.ObjectId, ref: 'comment' }],
  user: { type: mongoose.Types.ObjectId, ref: 'user' }
}, {
  timestamps: true
})

module.exports = mongoose.model('post', postSchema)