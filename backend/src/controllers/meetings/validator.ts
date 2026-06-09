import Joi from "joi"


export const newMeetingValidator = Joi.object({
    groupId: Joi.string().required(),
    openDate: Joi.date().required(),
    closeDate: Joi.date().required(),
    description: Joi.string().required(),
    room: Joi.string().required()
})

export const updateMeetingValidator = Joi.object({
    groupId: Joi.string().required(),
    openDate: Joi.date().required(),
    closedDate: Joi.date().required(),
    description: Joi.string().required(),
    room: Joi.string().required()
})

export const getMeetingByIdValidator = Joi.object({
    id: Joi.string().required()
})

export const deleteMeetingValidator = getMeetingByIdValidator