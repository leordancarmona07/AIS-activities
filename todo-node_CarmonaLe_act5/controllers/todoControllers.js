const Task = require("../models/Task");
const parseRequestBody = require("../utils/parseRequestBody");

// let todoList = [];

module.exports = {

    getTasks: async(request, response) => {

        try {
            const tasks = await Task.find();
            if (!tasks) {
                return response.status(400).json({
                    error: "Error in getting tasks!",
                });
            }

            response.render("index", {todoList : tasks});
        } catch (e) {
            return response.status(400).json({
                error: e,
            });
        }

    },

    addTask: async(request, response) => {

        try {

            const newTask = new Task({
                task: request.body.task,
            });

            const result = await newTask.save();

            if (!result) {
                return response.status(400).json({
                    error: "Error in adding new task!",
                });
            }

            response.redirect("/");
            // response.status(200).json({
            //     message: "New task added!",
            // });

        } catch (e) {
            return response.status(400).json({
                error: e,
            });
        }

    },

    updateTaskById: async(request, response) => {


        try {
            const result = await Task.updateOne({ _id: request.body.id }, { $set: {task: request.body.title} });

            if (!result) {
                return response.status(400).json({
                    error: "Error in updating task!",
                });
            }

            response.status(200).json({
                result: result,
            });

        } catch (e) {
            return response.status(400).json({
                error: e,
            });
        }

    },

    deleteTaskById: async(request, response) => {

        try {
            await Task.deleteOne({ _id: request.params.id }, (error, result) => {
                if (error) {
                    return response.status(400).json({
                        error: error,
                    });
                }

               response.redirect("/");
            });
        } catch (e) {
            return response.status(400).json({
                error: e,
            });
        }
    }
};