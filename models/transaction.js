const mongoose = require("mongoose");

const schema =mongoose.Schema

const transactionSchema = new Schema(

{
    name: {
        type: String,
        trim: true,
        required: "Enter the transaction's name"
    },
    value: {
        type: Number,
        required: "Enter the amount"
    },
    date: {
        type: Date,
        default: Date.now
    }
}
)