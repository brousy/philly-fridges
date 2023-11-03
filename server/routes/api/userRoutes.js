const router = require('express').Router();
const {
  getAllUsers,
  createUser,
  getOneUser,
  updateUser,
  deleteUser,
} = require('../../controllers/userController');

const { oneUserItems } = require('../../controllers/itemController');

// /api/users
router.route('/').post(createUser).get(getAllUsers);

// /api/users/:userId
router.route('/:userId').get(getOneUser).delete(deleteUser).put(updateUser);

router.route('/:username/items').get(oneUserItems);

module.exports = router;