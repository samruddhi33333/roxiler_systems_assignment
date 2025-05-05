const Store = require('../models/Store');

exports.getStores = async (req, res) => {
  try {
    const stores = await Store.find();
    res.json(stores);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getStoreById = async (req, res) => {
  try {
    const store = await Store.findById(req.params.id);
    if (!store) return res.status(404).json({ message: 'Store not found' });
    res.json(store);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addStore = async (req, res) => {
  const { name, location, rating } = req.body;
  try {
    const newStore = await Store.create({ name, location, rating });
    res.status(201).json(newStore);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateStore = async (req, res) => {
  try {
    const updatedStore = await Store.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedStore) return res.status(404).json({ message: 'Store not found' });
    res.json(updatedStore);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteStore = async (req, res) => {
  try {
    const deletedStore = await Store.findByIdAndDelete(req.params.id);
    if (!deletedStore) return res.status(404).json({ message: 'Store not found' });
    res.json({ message: 'Store deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
