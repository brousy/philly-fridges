const { Schema, Types, model } = require('mongoose');

const itemSchema = new Schema(
    {
        itemName: {
            type: String,
            required: true,
        },
        itemQuantity: {
            type: Number,
            required: true,
        },
        isFrozen: {
            type: Boolean,
            required: true,
        },
        addDate: {
            type: Date, 
            default: Date.now(),
        },
        expiryDate: {
            type: Date, 
            default: () => {
                if(this.isFrozen){
                    return new Date(+new Date() + 28 * 24 * 60 * 60 * 1000);
                } else {
                   return new Date(+new Date() + 5 * 24 * 60 * 60 * 1000);
                }
            }
        },
        username: {
            type: String,
            required: true,
        }
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

module.exports = model('item', itemSchema);

