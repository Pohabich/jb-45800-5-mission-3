import { Router } from "express";
import { getAll } from "../controllers/groups/controller";


const groupsRouter = Router();
groupsRouter.get("/", getAll);

export default groupsRouter;