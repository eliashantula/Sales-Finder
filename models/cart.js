let mongoose = require('mongoose')


const cartInfoSchema = new mongoose.Schema ({
  total: {type: Number},
  amount: {type: Number},
  shopperID: {type: String},
  items: {type: String}
})


const Cart = mongoose.model('Cart', cartInfoSchema)
module.exports = Cart