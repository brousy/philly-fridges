const { User, Item, Fridge } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        items: async () => {
            return Item.find({});
        },
        fridges: async () => {
            return Fridge.find().sort({ name: 1 });
        },
        users: async () => {
            return User.find({}).sort({ name: 1 });;
        },
        fridgeItems: async (parent, { fridgeId }) => {
            return Fridge.findOne({ _id: fridgeId }).populate('items');
        },
        itemId: async (parent, { item }) => {
            return Item.findOne({ _id: item })
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate(['fridges', 'items']);
          },
        me: async (parent, args, context) => {
            if (context.user) {
              return User.findOne({ _id: context.user._id }).populate('fridges');
            }
            throw AuthenticationError;
          },
    },
    // looking into adding auth errors to the below mutations
    Mutation: {
        addFridge: async (parent, { name, online, username }) => {
            const fridge = await Fridge.create({ name, online, username });

            await User.findOneAndUpdate(
                { username: username },
                { $addToSet: { fridges: fridge._id } }
            );

            return fridge;
        },
        updateFridge: async (parent, { name, status }) => {
            const upFridge = await Fridge.findOneAndUpdate(
                { name: name },
                { $set: {online: status} },
                { new: true }
            );
            return upFridge;            
        },
        deleteFridge: async (parent, { fridge }) => {
            const deleteFridge = await Fridge.findOneAndDelete({ name: fridge });
            return deleteFridge;
        },
        addItem: async (parent, { itemName, itemQuantity, isFrozen, expiryDate,itemUsername, itemFridgename }) => {
                
            const item = await Item.create(
                { itemName, itemQuantity, isFrozen, expiryDate, itemUsername, itemFridgename }
                );
            
            await Fridge.findOneAndUpdate(
                { name: itemFridgename },
                { $addToSet: { items: item._id } }
            );

            await User.findOneAndUpdate(
                { username: itemUsername },
                { $addToSet: { items: item._id } },
                
            );

            return item;
        },
        deleteItem: async (parent, { itemId }) => {
            return Item.findByIdAndDelete({ _id: itemId });
        },
        updateItem: async (parent, { itemId, name, quantity }) => {
            const item = await Item.findByIdAndUpdate(
                { _id: itemId }, 
                { $set: { itemName: name,
                itemQuantity: quantity } },
                { new: true }
            );
            return item
        },
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
          },
          login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw AuthenticationError;
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw AuthenticationError;
            }
      
            const token = signToken(user);
      
            return { token, user };
          },
        deleteUser: async (parent, { user }) => {
            return User.findOneAndDelete({ username: user });
        },


    }
}

module.exports = resolvers