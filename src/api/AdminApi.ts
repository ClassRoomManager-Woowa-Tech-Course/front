import {api} from "./Client";

interface AdminLoginRequest {
    adminId: string;
    password: string;
}

interface LoginResponse {
    token: string;
}

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
    const token = localStorage.getItem('token');
    if (!token) {
        throw new Error("인증 토큰이 없습니다. 먼저 로그인하세요.");
    }

    try {
        await api.post('/admins', registerData, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    } catch (error: any) {
        console.error("관리자 등록 실패:", error.response?.data);
        throw new Error(error.response?.data?.message || "관리자 등록에 실패했습니다.");
    }
};

const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    if (!token) {
        throw new Error("인증 토큰이 없습니다. 먼저 로그인하세요.");
    }
    return { 'Authorization': `Bearer ${token}` };
};

export const deleteAdmin = async (registerData: AdminRegisterData): Promise<void> => {
    try {
        await api.delete(`/admins`, {
            data: registerData,
            headers: getAuthHeaders()
        });
    } catch (error: any) {
        console.error("관리자 삭제 실패:", error.response?.data);
        throw new Error(error.response?.data?.message || "관리자 삭제에 실패했습니다.");
    }
};

export const suspendAdmin = async (registerData: AdminRegisterData): Promise<void> => {
    try {
        await api.patch(`/admins`, registerData, { headers: getAuthHeaders() });
    } catch (error: any) {
        console.error("관리자 휴면 처리 실패:", error.response?.data);
        throw new Error(error.response?.data?.message || "관리자 휴면 처리에 실패했습니다.");
    }
};