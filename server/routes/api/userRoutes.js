const router = require('express').Router();
const {
  getAllUsers,
  createUser,
  getOneUser,
  updateUser,
  deleteUser,
} = require('../../controllers/userController');

// /api/users
router.route('/').post(createUser).get(getAllUsers);

// /api/users/:userId
router.route('/:userId').get(getOneUser).delete(deleteUser).put(updateUser);

module.exports = router;