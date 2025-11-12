import {api} from "./Client";
import type {AdminLoginRequest} from "@/types/AdminLoginRequest";
import type {LoginResponse} from "../types/LoginResponse";
import type {Admin} from "../types/Admin";

export const loginAdmin = async (loginData: AdminLoginRequest): Promise<LoginResponse> => {
    const res = await api.post('/admins/login', loginData);
    return res.data;
};

export const registerAdmin = async (registerRequest: Admin): Promise<void> => {
    try {
        await api.post('/admins', registerRequest);
    } catch (error: any) {
        console.error("관리자 등록 실패:", error.response?.data);
        throw new Error(error.response?.data?.message || "관리자 등록에 실패했습니다.");
    }
};

export const deleteAdmin = async (registerRequest: Admin): Promise<void> => {
    try {
        await api.delete(`/admins`, {
            data: registerRequest,
        });
    } catch (error: any) {
        console.error("관리자 삭제 실패:", error.response?.data);
        throw new Error(error.response?.data?.message || "관리자 삭제에 실패했습니다.");
    }
};

export const suspendAdmin = async (registerRequest: Admin): Promise<void> => {
    try {
        await api.patch(`/admins`, registerRequest);
    } catch (error: any) {
        console.error("관리자 휴면 처리 실패:", error.response?.data);
        throw new Error(error.response?.data?.message || "관리자 휴면 처리에 실패했습니다.");
    }
};
