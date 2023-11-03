const { User, Fridge, Item } = require('../models');

// Get all users

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find({});
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(404).json({ msg: `No users found`, error: error });
    }
};

// Get one user

const getOneUser = async (req, res) => {
    try {
        const oneUser = await User.findOne({ userId: req.params.userId})
        .populate('item')
        .populate('fridge');
        res.status(200).json(oneUser);
    } catch (error) {
        res.status(404).json({ msg: `User not found with that id` });
    }
};

// Post | Create one user

const createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json({ msg: `new user creation was unsuccessful`, error });
    }
};

// Update one user

const updateUser = async (req, res) => {
    try {
        const userUpdate = await User.findOneAndUpdate(
            { userId: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        );
        res.status(200).json(userUpdate);
    } catch (error) {
        res.status(404).json({ msg: `No user found with this id`, error: error });
    }
};

const deleteUser = async (req, res) => {
    try {
        const userDelete = await User.findByIdAndDelete({ userId: req.params.userId });

        const fridgeDelete = await Fridge.deleteMany({ fridgeId: { $in: userDelete.fridge },
    
        });
        res.status(200).json({
            message: 'user and user fridges and items deleted',
            userDelete,
            fridgeDelete, 
        });
    } catch (err) {
        res.status(404).json({ msg: `No users with the provided id: ${req.params.userId}` });
    }
};

module.exports = {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser
};

