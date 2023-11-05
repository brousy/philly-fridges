const { User, Fridge, Item } = require('../models');
const bcrypt = require('bcrypt');

// Get all users

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find(
            {}, {"email": 0, "password": 0} 
            );
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(404).json({ msg: `No users found`, error: error });
    }
};

// Get one user '/:userId'

const getOneUser = async (req, res) => {
    try {
        const oneUser = await User.findOne({ _id: req.params.userId })
        .populate('items')
        .populate('fridges');
        res.status(200).json(oneUser);
    } catch (error) {
        res.status(404).json({ msg: `User not found with that id` });
    }
};

// Post | Create one user

const createUser = async (req, res) => {
    try {
        const newUser = req.body;
        newUser.password = await bcrypt.hash(req.body.password, 10);
        const userData = await User.create(newUser);
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json({ msg: `new user creation was unsuccessful`, error });
    }
};

// Update one user

const updateUser = async (req, res) => {
    try {
        const userUpdate = await User.findByIdAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        );
        res.status(200).json(userUpdate);
    } catch (error) {
        res.status(404).json({ msg: `No user found with this id`, error: error });
    }
};


// Delete a user and associated fridges

const deleteUser = async (req, res) => {
    try {
        const userDelete = await User.findOneAndDelete({ _id: req.params.userId });

        const fridgeDelete = await Fridge.deleteMany({ _id: { $in: userDelete.fridge },
    
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

// login route 

const loginUser = async (req, res) => {
    try {
        const userData = await User.findOne({ username: req.body.username });
        if (!userData) {
            res.status(404).json({ msg: `Login failure, please try again.` });
            return;
        }
        const validPass = await bcrypt.compare(
            req.body.password,
            userData.password
        );
        if (!validPass) {
            res.status(400).json({ msg: `Login failed, please try again.` });
            return;
        }
        res.status(200).json({ msg: `Successful login!` });
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
    loginUser
};

