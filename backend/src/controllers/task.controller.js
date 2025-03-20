import Task from '../models/task.model.js';

export const createTask = async( req, res ) => {
    const { title, description } = req.body;
    try {
        const newTask = new Task({
            title,
            description,
            user: req.user.id
        });
        const saveTask = await newTask.save();
        res.json(saveTask);
    } catch (error) {
        console.error(error);
    }
};

export const getTasks = async( req, res ) => {
    try {
        const task = await Task.find({ 
            user: req.user.id
        }).populate('user');
        res.json(task);
    } catch (error) {  
        console.error(error);
    }
};

export const getTask = async( req, res ) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found'});
        }
        return res.json(task);
    }
    catch (error) {
        console.error(error);
    }
};

export const deleteTask = async( req, res ) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found'});
        }   
        res.json(task);
    } catch (error) {
        console.error(error);
    }
};

export const updateTask = async( req, res ) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { 
            new: true 
        });
        if (!task) {
            return res.status(404).json({ message: 'Task not found'});
        }
        res.json(task);
    } catch (error) {
        console.error(error);
    }
};