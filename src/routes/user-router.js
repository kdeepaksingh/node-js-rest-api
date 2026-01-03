import exporess from "express";
import { userController } from "../controllers/userController.js";

const router = exporess.Router();

router.get("/all", userController.getAllUsers);

export default router;
