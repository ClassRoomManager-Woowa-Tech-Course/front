import type {Admin} from "@/types/Admin";
import {registerAdmin} from "@/api/AdminApi";
import {useState} from "react";

export const useAdminRegister = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const register = async (data: Admin) => {
        setIsLoading(true);
        setError(null);

        try {
            await registerAdmin(data);
            alert("관리자 등록에 성공했습니다.");
            return true;
        } catch (error: any) {
            console.error("관리자 등록 실패: ", error);
            alert(error.message || "관리자 등록에 실패했습니다.")
            return false;
        } finally {
            setIsLoading(false);
        }
    }
    return { register, isLoading, error };
}