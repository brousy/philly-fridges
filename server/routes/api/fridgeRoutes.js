const router = require('express').Router();

const {
  addFridge,
  deleteFridge,
  updateFridge,
  getAllFridges
} = require('../../controllers/fridgeController');

// /fridges 
router.route('/').get(getAllFridges);

// /api/users/:userId/fridges
router.route('/:userId/fridges').post(addFridge);

// /api/users/:userId/fridges/:fridgeId
router.route('/:userId/fridges/:fridgeId').delete(deleteFridge).put(updateFridge);

module.exports = router;