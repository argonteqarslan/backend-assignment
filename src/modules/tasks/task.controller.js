const { crudService, authService } = require("../../services/index.service");
const Task = require("../tasks/task.schema");
const messages = require("../../config/messages")

const taskCrudService = new crudService.CrudService(Task);

exports.task = {
    create: async (req, res, next) => {
        const { body: payload } = req;
        try {

            const task = await taskCrudService.add(payload);

            return res.json({
                status: 200,
                message: messages.created("Task"),
                data: task,
            });
        } catch (err) {
            next(err);
        }
    },
    fetchAll: async (req, res, next) => {
        try {

            const tasks = await taskCrudService.getList()

            return res.json({
                status: 200,
                message: "",
                data: tasks,
            });
        } catch (err) {
            next(err);
        }
    },
    deleteById: async (req, res, next) => {
        try {
            const { id } = req.params
            const tasks = await taskCrudService.deleteById(id)

            return res.json({
                status: 200,
                message: "",
                data: tasks,
            });
        } catch (err) {
            next(err);
        }
    }
};