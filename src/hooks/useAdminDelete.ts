import {deleteAdmin, suspendAdmin} from "@/api/AdminApi";
import type {Admin} from "@/types/Admin";
import {useState} from "react";

export const useAdminDelete = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleAdminAction = async (data: Admin) => {
        const confirmMessage = data.active === "DELETE"
            ? `정말로 '${data.adminId}' 관리자를 삭제하시겠습니까?`
            : `정말로 '${data.adminId}' 관리자를 휴면 처리하시겠습니까?`;

        if (!window.confirm(confirmMessage)) {
            return false;
        }

        setIsLoading(true);
        try {
            if (data.active === "DELETE") {
                await deleteAdmin(data);
                alert("관리자 삭제가 완료되었습니다.");
            } else if (data.active === "INACTIVE") {
                await suspendAdmin(data);
                alert("관리자 휴면 처리가 완료되었습니다.");
            }
            return true;
        } catch (error: any) {
            console.error("작업 실패:", error);
            alert(error.message || "작업에 실패했습니다.");
            return false;
        } finally {
            setIsLoading(false);
        }
    }
    return { handleAdminAction, isLoading };
}
