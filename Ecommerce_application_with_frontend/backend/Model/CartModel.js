

const mongoose = require('mongoose')

const cartschem = mongoose.Schema({
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "product", required: true },
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        quantity: { type: Number, default: 1 },
}
)
const CartModel = mongoose.model('cart', cartschem)
module.exports = CartModel