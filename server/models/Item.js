const { Timestamp } = require('mongodb');
const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

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
            type: String,
            required: true,
        },
        addDate: {
            type: Date, 
            default: Date.now(),
            get: (timestamp) => dateFormat(timestamp),
        },
        expiryDate: {
            type: Date, 
            default: () => {
                if ( this.length > 0 ) {
                    return expiryDate
                } if (this.isFrozen) {
                    return new Date(+new Date() + 28 * 24 * 60 * 60 * 1000);
                } else {
                   return new Date(+new Date() + 5 * 24 * 60 * 60 * 1000);
                }
            },
            get: (timestamp) => dateFormat(timestamp),
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

