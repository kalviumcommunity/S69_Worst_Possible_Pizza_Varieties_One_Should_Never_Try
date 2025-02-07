const express = require("express");
const router = express.Router();
const { createItem, getItems, updateItem, deleteItem } = require("./controllers/itemController");

// Create (POST) - Add a new item
router.post("/items", createItem);

// Read (GET) - Get all items
router.get("/items", getItems);

// Update (PUT) - Update an item by ID
router.put("/items/:id", updateItem);

// Delete (DELETE) - Delete an item by ID
router.delete("/items/:id", deleteItem);

module.exports = router;