import axios from "axios";
import type Meeting from "../models/Meeting";


export async function getMeetingById(id: string): Promise<Meeting> {
    const { data } = await axios.get<Meeting>(`${import.meta.env.VITE_REST_SERVER_URL}/meetings/meeting/${id}`);

    return data;
}