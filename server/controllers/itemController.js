const { Item, Fridge, User } =  require('../models');

// Get all items 

const getAllItems = async (req, res) => {
    try {
        const items = await Item.find({});
        res.status(200).json(items);
    } catch (error) {
        res.status(404).json({ msg: `No items found`, error: error });
    }
};

// Get a single item

const getItem = async (req, res) => {
    try {
        const item = await Item.findOne({ _id: req.params.itemId });
        res.status(200).json(item);
    } catch (error) {
        res.status(404).json({ msg: `No item(s) found with that id` });
    } 
};

// Create a new item

const createItem = async (req, res) => {
    try {
        const item = await Item.create(req.body);
        const updateUser = await User.findOneAndUpdate(
            { username: req.body.username },
            { $addToSet: { items: item._id } },
            { new: true }
        );
        const updateFridge = await Fridge.findOneAndUpdate(
            { name: req.body.fridgename },
            { $addToSet: { items: item._id } },
            { new: true }
        );
        res.status(200).json({ item, updateUser, updateFridge });
    } catch (error) {
        console.log(error);
    }
};

// Update one item by ID. Useful for quantity updates as people remove items. 

const updateItem = async (req, res) => {
    try {
        const item = await Item.findOneAndUpdate(
            { _id: req.params.itemId },
            { $set: req.body }
        );
        res.status(200).json(item);
    } catch (error) {
        res.status(404).json({ msg: `No items found with this id`, error: error });
    }
};

// Find an item by ID and delete it

const deleteItem = async (req, res) => {
    try {
        const deletedItem = await Item.findByIdAndDelete({ _id: req.params.itemId });
        res.status(200).json({ msg: `item deleted!`, deletedItem });
    } catch (error) {
        res.status(404).json({ msg: `No items found`, error: error });
    }
};

// Get all items for one user

const oneUserItems = async (req, res) => {
    try {
        const userItems = await Item.find({ username: req.params.username });
        res.status(200).json(userItems);
    } catch (error) {
        res.status(404).json({ msg: `No items found matching that username`, error: error });
    }
};


module.exports = {

    getAllItems,
    getItem,
    createItem,
    deleteItem,
    updateItem,
    oneUserItems,
  
  };