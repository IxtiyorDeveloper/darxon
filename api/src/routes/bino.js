import Router from "express";
const router = Router();
import {
  getAllBino,
  getOneBino,
  addNewBino,
  updateBino,
  deleteBino,
  getBinoFilter
} from "../controller/bino.js";

router.post("/", addNewBino);
router.put("/update/:id", updateBino);
router.get("/", getBinoFilter)
router.get("/", getAllBino);
router.get("/:id", getOneBino);
router.delete("/delete/:id", deleteBino);

export default router;
