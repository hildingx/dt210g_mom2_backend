const express = require("express");
const Todo = require("../models/Todo");

const router = express.Router();

// Skapa en ny todo
router.post("/", async (req, res) => {
    try {
        const todo = new Todo(req.body);
        await todo.save();
        res.status(201).json(todo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Hämta alla todos
router.get("/", async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Uppdatera en todo
router.put("/:id", async (req, res) => {
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(todo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Ta bort en todo
router.delete("/:id", async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.json({ message: "Todo borttagen" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;