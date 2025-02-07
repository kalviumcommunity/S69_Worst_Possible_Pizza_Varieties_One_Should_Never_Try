const items = []; // Temporary array to store items

// Create Item
const createItem = (req, res) => {
    const { name, price } = req.body;
    const newItem = { id: items.length + 1, name, price };
    items.push(newItem);
    res.status(201).json(newItem);
};

// Read Items
const getItems = (req, res) => {
    res.json(items);
};

// Update Item
const updateItem = (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    const item = items.find(i => i.id == id);
    if (item) {
        item.name = name || item.name;
        item.price = price || item.price;
        res.json(item);
    } else {
        res.status(404).json({ message: "Item not found" });
    }
};

// Delete Item
const deleteItem = (req, res) => {
    const { id } = req.params;
    const index = items.findIndex(i => i.id == id);
    if (index !== -1) {
        items.splice(index, 1);
        res.json({ message: "Item deleted" });
    } else {
        res.status(404).json({ message: "Item not found" });
    }
};

module.exports = { createItem, getItems, updateItem, deleteItem };