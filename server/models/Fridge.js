const { Schema, Types, model } = require('mongoose');

const fridgeSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        online: {
            type: Boolean,
            default: false,
        },
        username: {
            type: String,
            required: true
        },
        items: [
            {
                type: Schema.Types.ObjectId,
                ref: 'item'
            }
        ],
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

module.exports = model('fridge', fridgeSchema)