const { Schema, Types, model } = require('mongoose');

const userSchema = new Schema(
    {
        fridges: [
            {
                type: Schema.Types.ObjectId,
                ref: 'fridge',
            },
        ],
        items: [
            {
                type: Schema.Types.ObjectId,
                ref: 'item',
            },
        ],
        username: {
            type: String,
            required: [true, 'Please provide a username'],
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: [true, 'Please provide email'],
            match: [
                /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
        'Please provide valid email'
            ],
            unique: true,
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

module.exports = model('user', userSchema);