import { Schema, model } from "mongoose";
import { subcategories } from "../interfaces/subcategories";

const subcategoriesShema: Schema = new Schema<subcategories>(
  {
    name: { type: String, required: true, trim: true },
    image: String,
    category: { type: Schema.Types.ObjectId, ref: "categories" },
  },
  { timestamps: true }
);
