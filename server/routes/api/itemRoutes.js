const router = require('express').Router();
const {
  getAllItems,
  getItem,
  createItem,
  deleteItem,
  updateItem,
  oneUserItems,
  takeOne, 
} = require('../../controllers/itemController');

// /api/items
router.route('/').post(createItem).get(getAllItems);

// /api/item/:itemId
router.route('/:itemId').get(getItem).put(updateItem).delete(deleteItem);

// New route for taking one item
router.route('/takeOne/:itemId').post(takeOne);

module.exports = router;
