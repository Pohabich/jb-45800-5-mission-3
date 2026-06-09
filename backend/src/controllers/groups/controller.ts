import { NextFunction, Request, Response } from "express";
import Group from "../../models/Group";


export async function getAll(request: Request, response: Response, next: NextFunction) {
    try {
        const groups = await Group.findAll()

        response.json(groups)
    } catch (error) {
        next(error)
    }
}   