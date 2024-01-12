const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  // title: String (required) - The title of the task.
  // description: String - A brief description of the task.
  // assignedTo: ObjectId (ref: 'User') - The user to whom the task is assigned.
  // status: String (enum: 'To Do', 'In Progress', 'Done') - The current status of the task. Default is set to 'To Do'.
  // category: String (enum: 'Finance', 'Work', 'Office', 'Assignment') - The category of the task. Default is set to 'Uncategorized'.
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
