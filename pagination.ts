import { Request, Response } from "express";
import { Task } from "./models/task.model.js";

const getTasksWithPagination = async (req: Request, res: Response) => {
  try {
    const rawPage = req.query.page;
    const rawLimit = req.query.limit;

    if (
      (rawPage !== undefined &&
        (typeof rawPage !== "string" || rawPage.trim() === "")) ||
      (rawLimit !== undefined &&
        (typeof rawLimit !== "string" || rawLimit.trim() === ""))
    ) {
      return res.status(400).json({
        message: "page and limit must be single, non-empty numeric values",
      });
    }

    const page = rawPage === undefined ? 1 : Number(rawPage);
    const limit = rawLimit === undefined ? 10 : Number(rawLimit);

    if (!(Number.isInteger(page) && Number.isInteger(limit))) {
      return res
        .status(400)
        .json({ message: "page and limit should be an integer" });
    }

    if (page == 0 || limit == 0 || page < 0 || limit < 0) {
      return res
        .status(400)
        .json({ message: "page and limit should be greater than 0" });
    }

    if (limit > 100) {
      return res
        .status(400)
        .json({ message: "limit must be between 1 and 100" });
    }

    const [tasks, total] = await Promise.all([
      Task.find()
        .skip((page - 1) * limit)
        .limit(limit)
        .sort({ createdAt: 1, _id: 1 })
        .exec(),
      Task.countDocuments().exec(),
    ]);

    return res.status(200).json({ tasks, page, limit, total });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export { getTasksWithPagination };
