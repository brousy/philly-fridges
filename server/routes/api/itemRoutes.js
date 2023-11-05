const router = require('express').Router();
const {
  getAllItems,
  getItem,
  createItem,
  deleteItem,
  updateItem,
} = require('../../controllers/itemController');

// /api/items
router.route('/').post(createItem).get(getAllItems);

// /api/item/:itemId
router.route('/:itemId').get(getItem).put(updateItem).delete(deleteItem);

module.exports = router;