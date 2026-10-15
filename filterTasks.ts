import { Request, Response } from "express";
import { Task } from "./models/task.model.ts";

const filterTasks = async (req: Request, res: Response) => {
  //   if (
  //     req.query === null ||
  //     typeof req.query !== "object" ||
  //     Array.isArray(req.query)
  //   ) {
  //     return res
  //       .status(400)
  //       .json({ message: "The request must be a valid JSON object only" });
  //   }

  const allowedFilters = ["completed"];

  try {
    if (
      req.query.completed !== undefined &&
      typeof req.query.completed === "string"
    ) {
      if (
        Object.keys(req.query).some(
          (filter) => !allowedFilters.includes(filter),
        )
      ) {
        return res.status(400).json({
          message: "Only the 'completed' filter is allowed",
        });
      }

      if (!(req.query.completed == "true" || req.query.completed == "false")) {
        return res.status(400).json({
          message: "Only boolean values are allowed in the completed field",
        });
      }

      let { completed } = req.query;

      completed = completed === "true";

      const tasks = await Task.find({ completed: completed });

      //   if (tasks.length === 0) {
      //     return res.status(200).json({ tasks });
      //   }

      return res.status(200).json({ tasks });
    } else {
      const tasks = await Task.find();

      if (Array.isArray(tasks) && tasks.length === 0) {
        return res.status(200).json({ tasks });
      }

      return res
        .status(200)
        .json({ tasks, message: "Tasks fetched successfully" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export { filterTasks };
