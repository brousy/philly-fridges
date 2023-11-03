const { Item, User } =  require('../models');

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
        const item = await Item.findOne({ _id: req.params.thoughtId });
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
            { username: req.body.username },
            { $addToSet: { items: item._id } },
            { new: true }
        );
        res.status(200).json({ item, updateUser, updateFridge });
    } catch (error) {
        console.log(error);
    }
};




module.exports = {

    getAllItems,
    getItem,
    createItem,
    deleteThought,
    updateThought
  
  };