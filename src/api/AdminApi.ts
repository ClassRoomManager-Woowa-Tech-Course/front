import {api} from "./Client";
import type {AdminLoginRequest} from "@/types/AdminLoginRequest";

export const loginAdmin = async (loginData: AdminLoginRequest): Promise<LoginResponse> => {
    const res = await api.post('/admins/login', loginData);
    return res.data;
};

export interface AdminRegisterData {
    adminId: string;
    name: string;
    password: string;
    contact: string;
    role: string;
    authorization: string;
}

export const registerAdmin = async (registerData: AdminRegisterData): Promise<void> => {
    try {
        await api.post('/admins', registerData, {
            headers: getAuthHeaders()
        });
    } catch (error: any) {
        console.error("관리자 등록 실패:", error.response?.data);
        throw new Error(error.response?.data?.message || "관리자 등록에 실패했습니다.");
    }
};



export const deleteAdmin = async (registerData: AdminRegisterData): Promise<void> => {
    try {
        await api.delete(`/admins`, {
            data: registerData,
        });
    } catch (error: any) {
        console.error("관리자 삭제 실패:", error.response?.data);
        throw new Error(error.response?.data?.message || "관리자 삭제에 실패했습니다.");
    }
};

export const suspendAdmin = async (registerData: AdminRegisterData): Promise<void> => {
    try {
        await api.patch(`/admins`, registerData);
    } catch (error: any) {
        console.error("관리자 휴면 처리 실패:", error.response?.data);
        throw new Error(error.response?.data?.message || "관리자 휴면 처리에 실패했습니다.");
    }
};