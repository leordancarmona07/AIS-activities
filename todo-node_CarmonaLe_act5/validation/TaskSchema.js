const Joi = require("joi");

const TaskSchema = Joi.object({
    task : Joi.required().string().min(4).max(50)
});

module.exports = TaskSchema;