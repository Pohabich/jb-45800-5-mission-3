import Joi from "joi";


export const getGroupByIdValidator = Joi.object({
    groupId: Joi.string().required()
})