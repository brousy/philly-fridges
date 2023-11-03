const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

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
                /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        'Please provide valid email'
            ],
            unique: true,
        },
        password: {
            type: String,
            required: false,
            minLength: 8,
            description: "Password must be at least 8 characters"
        }
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

module.exports = model('user', userSchema);