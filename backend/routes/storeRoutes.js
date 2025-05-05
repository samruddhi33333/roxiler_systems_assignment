const express = require('express');
const router = express.Router();
const {
  getStores,
  getStoreById,
  addStore,
  updateStore,
  deleteStore
} = require('../controllers/storeController');
const auth = require('../middleware/authMiddleware');

router.get('/', getStores);
router.get('/:id', getStoreById);
router.post('/', auth, addStore);
router.put('/:id', auth, updateStore);
router.delete('/:id', auth, deleteStore);

module.exports = router;
