import { Router } from "express";
import paramsValidation from "../middlewares/params-validation";
import { deleteMeetingValidator, getMeetingByIdValidator, newMeetingValidator } from "../controllers/meetings/validator";
import { deleteMeeting, getMeetingById, getMeetingsByGroup, newMeeting } from "../controllers/meetings/controller";
import { getGroupByIdValidator } from "../controllers/groups/validator";
import bodyValidation from "../middlewares/body-validation";


const meetingsRouter = Router();

meetingsRouter.get("/meeting/:id", paramsValidation(getMeetingByIdValidator), getMeetingById)
meetingsRouter.get("/group/:groupId", paramsValidation(getGroupByIdValidator), getMeetingsByGroup)
meetingsRouter.post("/add", bodyValidation(newMeetingValidator), newMeeting)
meetingsRouter.post("/:id", paramsValidation(getMeetingByIdValidator), bodyValidation(newMeetingValidator), newMeeting)
meetingsRouter.delete("/:id", paramsValidation(deleteMeetingValidator), deleteMeeting)

export default meetingsRouter;