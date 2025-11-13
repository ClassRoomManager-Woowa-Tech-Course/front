import {api} from "./Client";
import type {GuideLine} from "@/types/GuideLine";
import type {GuideLineResponse} from "@/types/GuideLineResponse";

export const registerGuideLine = async (data: GuideLine) => {
    const formData = new FormData();
    const guideLineData = {
        roomCode: data.roomCode,
        content: data.content,
    };
    formData.append(
        'guideLine',
        new Blob([JSON.stringify(guideLineData)], {
            type: "application/json"
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
    return api.post('/guideLines', formData);
};

export const getGuideLines = async (): Promise<GuideLineResponse[]> => {
    const response = await api.get('/guideLines');
    return response.data;
};

export const getGuideLineById = async (id: string): Promise<GuideLineResponse> => {
    // -> GET http://localhost:8080/api/guideLines/3
    const response = await api.get(`/guideLines/${id}`);
    return response.data;
};