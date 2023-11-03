const { Schema, model } = require('mongoose');

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
        itemUsername: {
            type: String,
            required: true,
            trim: true
        },
        itemFridgename: {
            type: String,
            required: true,
            trim: true
        }
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

const Item = model('Item', itemSchema);

module.exports = Item;

