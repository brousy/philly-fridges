const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        fridges: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Fridge',
            },
        ],
        items: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Item',
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
    }
);

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const rounds = 10;
      this.password = await bcrypt.hash(this.password, rounds);
    }
  
    next();
  });
  
  // compare the incoming password with the hashed password
  userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };
  
const User = model('User', userSchema);

module.exports = User;