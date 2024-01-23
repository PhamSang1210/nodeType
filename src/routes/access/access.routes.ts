import express from "express";
import AccessController from "../../controllers/AccessController";
const router = express.Router();

router.get("/", AccessController.register);

export default router;
