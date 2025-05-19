const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  }, 
/*
  subCategoryArtsNumeriques: {
    type: String,
  },

subCategoryArtTextile: {
    type: String,
  },

  subCategoryCollages: {
    type: String,
  },

  subCategoryDesign: {
    type: String,
  },

  subCategoryDessin: {
    type: String,
  },

 

  subCategoryGravures: {
    type: String,

  },
   subCategoryPeinture: {
    type: String,

  },
  subCategoryPhotographie: {
    type: String,

  },
*/ envolverobra: {
    type: String,

  },
  subcategory: {
    type: String,

  },

  measurementValue: {
    type: String,

  },
  venteOption: {
    type: String,

  },
  
  price: {
    type: String,

  },
  subCategorySculpture: {
    type: String,

  },
  artStyle: {
    type: String,

  },
  subCategorytalle: {
    type: String,

  },
  theme: {
    type: String,

  },
  measurementUnit: {
    type: String,

  },
  description: {
    type: String,

  },

 wilaya: {
    type: String,

  },
  commune: {
    type: String,

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