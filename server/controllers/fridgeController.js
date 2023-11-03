const { User, Fridge, Item } = require('../models');

// add a fridge to a user

const addFridge = async (req, res) => {
    try {
        const fridgeUpdate = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { fridges: req.params.fridgeId } },
            { new: true }
        );
        res.status(200).json(fridgeUpdate);
    } catch (error) {
        res.status(404).json({ msg: `No fridges found with the provided id: ${req.params.userId}`, error: error });
    }
};

const removeFridge = async (req, res) => {
    try {
        const fridgeUpdate = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: {friends: req.params.friendId } },
            { new: true }
        );
        res.status(200).json(userUpdate);
    } catch (error) {
        res.status(404).json({ msg: `No fridges found`, error: error})
    }
}




module.exports = {
    addFridge,
    removeFridge,
}