import { NextFunction, Response, Request } from "express"
import Group from "../../models/Group"
import Meeting from "../../models/Meeting"


export async function getMeetingsByGroup(request: Request<{ groupId: string }>, response: Response, next: NextFunction) {
    try {
        const groupId = request.params.groupId
        const groupMeetings = await Group.findByPk(groupId, {
            include: Meeting
        })

        response.json(groupMeetings.meetings || [])
        // in case we need the group too to return do:
        // response.json(groupMeetings)
    }
    catch (error) {
        next(error)
    }
}

export async function getMeetingById(request: Request<{ id: string }>, response: Response, next: NextFunction) {
    try {
        const meetingId = request.params.id
        const meeting = await Meeting.findByPk(meetingId, {
            include: Group
        })

        response.json(meeting)
    } catch (error) {
        next(error)
    }
}

export async function newMeeting(request: Request<{}, {}, { groupId: string; openDate: Date; closedDate: Date; description: string; room: string }>, response: Response, next: NextFunction) {
    try {
        const meeting = await Meeting.create({ ...request.body })
        response.json(meeting)
    }
    catch (error) {
        next(error)
    }
}

export async function updateMeeting(request: Request<{ id: string }, {}, { groupId: string; openDate: Date; closedDate: Date; description: string; room: string }>, response: Response, next: NextFunction) {
    try {
        const meetingId = request.params.id
        await Meeting.update({ ...request.body }, { where: { id: meetingId } })
        const updatedMeeting = await Meeting.findByPk(meetingId)
        response.json(updatedMeeting)
    }
    catch (error) {
        next(error)
    }
}

export async function deleteMeeting(request: Request<{ id: string }>, response: Response, next: NextFunction) {
    try {
        const meetingId = request.params.id
        await Meeting.destroy({ where: { id: meetingId } })
        response.json({ success: true })
    }
    catch (error) {
        next(error)
    }
}