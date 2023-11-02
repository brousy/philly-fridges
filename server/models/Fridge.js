const mongoose = require('mongoose');

const { Schema } = mongoose;

const fridgeSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    quantity: {
        type: Number,
        min: 0,
        default: 0
    },
    is_frozen: {
        type: Boolean,
    },
    add_date: {
        type: Date,
        default: Date.now
    },
},
    {
        toJSON: {
            virtuals: true,
        },
    }
)


// 5 days for non frozen

