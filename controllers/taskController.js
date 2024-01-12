const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  try {
    // TODO: Extract necessary details from the request body (title, description, assignedTo, category)
    // TODO: Create a new Task instance with the provided details
    // TODO: Save the new Task instance to the database
    // TODO: Respond with a success message and the created task

    res.status(201).json({
      message: 'Task created successfully',
      task,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.updateTaskStatus = async (req, res) => {
  try {
    // TODO: Extract necessary details from the request body (taskId, status, category)
    // TODO: Update the status and category of the task with the given taskId
    // TODO: Check if the task was found and updated successfully
    // TODO: Respond with a success message and the updated task

    res.status(200).json({
      message: 'Task status updated successfully',
      task: updatedTask,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.searchTasks = async (req, res) => {
  try {
    // TODO: Extract necessary details from the request query (keyword, category)
    // TODO: Create a query object based on the extracted details
    // TODO: Use the query object to find tasks in the database
    // TODO: Respond with the found tasks

    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
