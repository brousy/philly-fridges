const { Schema, model } = require('mongoose');

const fridgeSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        online: {
            type: String,
            default: false,
        },
        username: {
            type: String,
            required: true
        },
        items: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Item'
            }
        ],
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

const Fridge = model('Fridge', fridgeSchema);

module.exports = Fridge; 