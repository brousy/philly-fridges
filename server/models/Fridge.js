const { Schema, Types, model } = require('mongoose');

const fridgeSchema = new Schema(
    {
        fridgeId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        name: {
            type: String,
            required: true,
            trim: true
        },
        online: {
            type: Boolean,
            default: false,
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