// Import model here..
import mongoose from "mongoose";
import Task from "../models/task-model.js";

// Import required packages

// Create routes here..
// Create task route
const createTask = async (req, res) => {
  //
  const body = req.body;

  //
  if (!body) {
    return res.status(400).json({
      //   success: false,
      status: "Failed",
      error: "You must provide a task",
    });
  }

  //
  const task = new Task({
    name: body.name,
    description: body.description,
  });

  //
  try {
    await task.save();
    res.status(201).json({
      header: {
        // success: true,
        status: "Success",
        message: "Task created!",
      },
      body: {
        id: task._id,
      },
    });
  } catch (error) {
    //
    console.log(error);
    res.status(500).json({
      header: {
        // success: false,
        status: "Failed",
        message: "Internal Server Error",
      },
      body: {},
    });
  }
};

// Update task route
const updateTask = async (req, res) => {
  //
  const taskID = req.params.id;

  // Find task by Id
  const existingTask = await Task.findById(taskID);

  //
  if (!existingTask) {
    return res.status(404).json({
      header: {
        // success: false,
        status: "Failed",
        message: "Task not found",
      },
      body: {
        //   id: taskID,
      },
    });
  }

  try {
    // Build the updated data
    const updateData = {
      ...(req.body.name && { name: req.body.name }),
      ...(req.body.description && { description: req.body.description }),
    };

    // Update the task in the database
    if (!req.body.name && !req.body.description) {
      //
      return res.status(400).json({
        //   success: false,
        status: "Failed",
        error: "You must provide a task body",
      });
    } else {
      const updateTask = await Task.findByIdAndUpdate(
        taskID,
        updateData,
        { new: true } // Return the updated data
      );

      //
      if (updateTask) {
        res.status(200).json({
          header: {
            // success: true,
            status: "Success",
            message: "Task updated successfully",
          },
          body: updateTask,
        });
      }
    }
  } catch (error) {
    //
    console.log(error);
    res.status(500).json({
      header: {
        // success: false,
        status: "Failed",
        message: "Internal Server Error",
      },
      body: {},
    });
  }
};

const deleteTask = async (req, res) => {
  const taskID = req.params.id;

  // Check if taskID is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(taskID)) {
    return res.status(400).json({
      header: {
        status: "Failed",
        message: "Invalid Task ID",
      },
      body: {},
    });
  }

  // Find task by Id
  const existingTask = await Task.findById(taskID);

  if (!existingTask) {
    return res.status(404).json({
      header: {
        status: "Failed",
        message: "Task not found",
      },
      body: {},
    });
  }

  try {
    // Delete task by Id
    const task = await Task.findByIdAndDelete(taskID);

    res.status(200).json({
      header: {
        status: "Success",
        message: "Task deleted successfully",
      },
      body: {
        id: task._id,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      header: {
        status: "Failed",
        message: "Internal Server Error",
      },
      body: {},
    });
  }
};

// Get all tasks
const getTask = async (req, res) => {
  //
  const tasks = await Task.find({});

  //
  try {
    if (!tasks) {
      //
      return res.status(400).json({
        header: {
          status: "Failed",
          message: "Tasks not found",
        },
        body: [],
      });
    } else {
      //
      return res.status(200).json({
        header: {
          status: "Success",
        },
        body: tasks,
      });
    }
  } catch (error) {
    //
    console.log(error);
    return res.status(500).json({
      header: {
        // success: false,
        status: "Failed",
        message: "Internal Server Error",
      },
      body: {},
    });
  }
};

// Get task by Id
const getTaskById = async (req, res) => {
  //
  const taskID = req.params.id;

  // Find task by Id
  const existingTask = await Task.findById(taskID);

  //
  try {
    //
    if (!existingTask) {
      //
      return res.status(400).json({
        header: {
          status: "Failed",
          message: "Task not found",
        },
        body: {},
      });
    } else {
      //
      return res.status(200).json({
        header: {
          status: "Success",
        },
        body: existingTask,
      });
    }
  } catch (error) {
    //
    console.log(error);
    return res.status(500).json({
      header: {
        // success: false,
        status: "Failed",
        message: "Internal Server Error",
      },
      body: {},
    });
  }
};

// export here..
export default {
  createTask,
  updateTask,
  deleteTask,
  getTask,
  getTaskById,
};
