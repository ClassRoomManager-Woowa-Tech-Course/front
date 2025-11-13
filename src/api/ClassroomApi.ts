import {api} from "./Client";
import type {ClassroomResponse} from "@/types/ClassroomResponse";

export const getClassroom = async (): Promise<ClassroomResponse[]> => {
    const response = await api.get("/classrooms");
    return response.data;
}