const { User, Item, Fridge } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        items: async () => {
            return Item.find({});
        },
        fridges: async () => {
            return Fridge.find().sort({ name: -1 });
        },
        users: async () => {
            return User.find({}).sort({ name: 1 });;
        },
        fridge: async (parent, { fridge }) => {
            return Fridge.findOne({ name: fridge });
        },
        userItems: async (parent, { user }) => {
            return User.findOne({ username: user }).populate('items');
        },
        fridgeItems: async (parent, { fridge }) => {
            return Fridge.findOne({ name: fridge }).populate('items');
        },
        itemId: async (parent, { item }) => {
            return Item.findOne({ _id: item })
        },
    },
    Mutation: {
        addFridge: async (parent, { name, online, username }) => {
            return Fridge.create({ name, online, username });
        },
        updateFridge: async (parent, { name, status }) => {
            const upFridge = await Fridge.findOneAndUpdate(
                { name: name },
                { $set: {online: status} },
                { new: true }
            );
            return upFridge            
        },
        deleteFridge: async (parent, { fridge }) => {
            const deleteFridge = await Fridge.findOneAndDelete({ name: fridge });
            return deleteFridge
        },
        addItem: async (parent, { itemName, itemQuantity, isFrozen, itemUsername, itemFridgename }) => {
            const item = await Item.create(
                { itemName, itemQuantity, isFrozen, itemUsername, itemFridgename }
                );

            console.dir(item)

            await User.findOneAndUpdate(
                { username: itemUsername },
                { $addtoSet: { items: item._id.toString() } }
            );

            return item;
        },
        deleteItem: async (parent, { itemId }) => {
            return Item.findByIdAndDelete({ _id: itemId });
        },
        updateItem: async (parent, { itemId, name, quantity }) => {
            const item = await Item.findByIdAndUpdate(
                { _id: itemId },
                { itemName: name },
                { itemQuantity: quantity }
            );
            return { item }
        },
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user }
        },
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });
            if (!user) {
                throw AuthenticationError
            }
            const correctPw = await user.isCorrectPassword(password)
            if (!correctPw) {
                throw AuthenticationError
            }
            const token = signToken(user);
            return { token, user }
        },
        deleteUser: async (parent, { user }) => {
            return User.findOneAndDelete({ username: user });
        },


    }
}

module.exports = resolvers