import type {Report} from '../types/Report';
import {api} from "./Client";
import type {ReportResponse} from "../types/ReportResponse";

export const registerReport = async (data: Report) => {
    const formData = new FormData();
    const reportData = {
        item: data.item,
        role: data.userRole,
        roomCode: data.roomCode,
        memberId: data.userId,
        contact: data.contact,
        content: data.content,
        status: 'PENDING'
    };
    formData.append(
        'report',
        new Blob([JSON.stringify(reportData)], {
            type:"application/json"
        })
    );
    if (data.files && data.files.length > 0) {
        for (let i = 0; i < data.files.length; i++) {
            formData.append(
                'file',
                data.files[i]
            );
        }
    }
    return api.post('/reports', formData);
}

export const getReports = async (): Promise<ReportResponse[]> => {
    const response = await api.get('/reports');
    return response.data;
}

export const getReportById = async (id: string): Promise<ReportResponse> => {
    const response = await api.get(`/reports/${id}`);
    return response.data;
}