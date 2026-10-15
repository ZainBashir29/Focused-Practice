import { Request, Response } from "express";
import mongoose from "mongoose";
import Task from "./models/task.model.ts";

const updateTask = async (req: Request, res: Response) => {
  if (
    req.body === null ||
    typeof req.body !== "object" ||
    Array.isArray(req.body)
  ) {
    return res
      .status(400)
      .json({ message: "Request body must be a valid JSON object" });
  }

  const { id } = req.params;
  const { completed } = req.body;

  const allowedFields = ["completed"];

  if (Object.keys(req.body).some((field) => !allowedFields.includes(field))) {
    return res.status(400).json({
      message: "Only the completed field is allowed in the request body",
    });
  }

  if (!id || completed === undefined) {
    return res
      .status(400)
      .json({ message: "Missing task id or completed field" });
  }

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: "Invalid task id" });
  }

  if (typeof completed !== "boolean") {
    return res
      .status(400)
      .json({ message: "Completed field can only contain a boolean value" });
  }

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      {
        $set: {
          completed,
        },
      },
      {
        returnDocument: "after",
        runValidators: true,
      },
    );

    if (!updatedTask) {
      return res
        .status(404)
        .json({ message: "Task with the given id does not exist" });
    }

    return res.status(200).json({
      updatedTask,
      message: "Task completed status updated successfully",
    });
  } catch (error) {
    console.error("Failed task completed status updation: ", error);

    return res.status(500).json({ message: "Internal server error" });
  }
};

export { updateTask };
