const { User, Fridge, Item } = require('../models');

// add a fridge to a user

const addFridge = async (req, res) => {
    try {
        const fridgeUpdate = await User.findOneAndUpdate(
            { userId: req.params.userId },
            { $addToSet: { fridges: req.params.fridgeId } },
            { new: true }
        );
        res.status(200).json(fridgeUpdate);
    } catch (error) {
        res.status(404).json({ msg: `No fridges found with the provided id: ${req.params.userId}`, error: error });
    }
};

// delete a fridge

const deleteFridge = async (req, res) => {
    try {
        const fridgeDelete = await Fridge.findByIdAndDelete({ fridgeId: req.params.fridgeId });
        res.status(200).json(fridgeDelete);
    } catch (error) {
        res.status(404).json({ msg: `No fridges found`, error: error})
    }
}

// Update a fridge 

const updateFridge = async (req, res) => {
    try {
        const fridgeUpdate = await Fridge.findByIdAndUpdate(
            { fridgeId: req.params.fridgeId },
            { $set: req.body }
        );
        res.status(200).json(fridgeUpdate);
    } catch (error) {
        res.status(404).json({ msg: `No fridge found with this id`, error: error });
    }
}

const getAllFridges = async (req,res) => {
    try {
        const allFridges = await Fridge.find({});
        res.status(200).json(allFridges);
    } catch (error) {
        res.status(404).json({ msg: `No fridges found`, error: error });
    }
}



module.exports = {
    addFridge,
    deleteFridge,
    updateFridge,
    getAllFridges
}