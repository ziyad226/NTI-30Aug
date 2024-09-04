/* import { NextFunction, Request, Response } from "express";
import asyncHandler from "express-async-handler";
import mongoose, { modelNames } from "mongoose";
export const getAll = <modelType>(model: Model<any>, modelNames: string) =>
    asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const categories: Document[] = await Document.find();
    res.status(200).json({ data: categories });
  });
*/
