const router = require('express').Router();
const userRoutes = require('./userRoutes');
const itemRoutes = require('./itemRoutes');
const fridgeRoutes = require('./fridgeRoutes');

router.use('/users', userRoutes);
router.use('/items', itemRoutes);
router.use('/fridges', fridgeRoutes);

module.exports = router;