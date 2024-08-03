const mongoose = require('mongoose');

const StudySchema = new mongoose.Schema({
    subject: String,
    notes: String,
    date: { type: Date, default: Date.now }
});

const TaskSchema = new mongoose.Schema({
    title: String,
    description: String,
    dueDate: Date,
    completed: { type: Boolean, default: false }
});

const InfoSchema = new mongoose.Schema({
    title: String,
    content: String,
    date: { type: Date, default: Date.now }
});

const Study = mongoose.model('Study', StudySchema);
const Task = mongoose.model('Task', TaskSchema);
const Info = mongoose.model('Info', InfoSchema);

module.exports = { Study, Task, Info };
