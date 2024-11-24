import express from "express";
import { createCategoryCtrl, getAllCategoriesCtrl, getSingleCategoriesCtrl, updateCategoryCtrl, deleteCategoryCtrl } from "../controllers/categoriesCtrl.js";
import { isLoggedIn } from "../middlewares/isLoggedIn.js";
import upload from "../config/fileUpload.js";

const categoriesRouter = express.Router();
categoriesRouter.post("/", isLoggedIn, upload.array("files"), createCategoryCtrl);
categoriesRouter.get("/", isLoggedIn, getAllCategoriesCtrl);
categoriesRouter.get("/:id", getSingleCategoriesCtrl);
categoriesRouter.put("/:id", isLoggedIn, updateCategoryCtrl);
categoriesRouter.delete("/:id", isLoggedIn, deleteCategoryCtrl)
export default categoriesRouter;