const router = require('express').Router();

const {
  addFridge,
  deleteFridge,
  updateFridge,
  getAllFridges
} = require('../../controllers/fridgeController');

// /fridges 
router.route('/').get(getAllFridges);

// /api/fridges/:username/fridges
router.route('/:username').post(addFridge);

// /api/fridges/:username/fridges/:fridgeId
router.route('/:fridgeId').delete(deleteFridge).put(updateFridge);

module.exports = router;