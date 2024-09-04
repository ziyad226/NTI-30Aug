import { Router } from "express";
import {
  createSubCategory,
  deleteSubCategory,
  filterSubcategories,
  getAllSubCategories,
  getSubCategory,
  updateSubCategory,
} from "../controllers/subcategories";
import {
  createSubcategoryValidator,
  deleteSubcategoryValidator,
  getSubcategoryValidator,
} from "../utils/validators/subcategoriesValidator";
import { updateCategoryValidator } from "../utils/validators/categoriesValidator";

const subcategoriesRoute: Router = Router({ mergeParams: true });

subcategoriesRoute
  .route("/")
  .get(filterSubcategories, getAllSubCategories)
  .post(createSubcategoryValidator, createSubCategory);

subcategoriesRoute
  .route("/:id")
  .get(getSubcategoryValidator, getSubCategory)
  .put(updateCategoryValidator, updateSubCategory)
  .delete(deleteSubcategoryValidator, deleteSubCategory);

export default subcategoriesRoute;
