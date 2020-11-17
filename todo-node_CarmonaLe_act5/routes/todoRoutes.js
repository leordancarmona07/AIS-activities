const express = require("express");
const router = express.Router();

const todoList = require("../controllers/todoControllers");

router.get("/", todoList.getTasks);
router.post("/", todoList.addTask);
router.post("/update/", todoList.updateTaskById);
router.get("/delete/:id", todoList.deleteTaskById);

module.exports = router;