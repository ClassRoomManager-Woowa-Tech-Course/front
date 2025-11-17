import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cancelReservation } from '@/api/ReservationApi';

export const useReservationCancel = () => {
    const navigate = useNavigate();
    const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
    const [password, setPassword] = useState("");
    const [isCancel, setIsCancel] = useState(false);
    const [cancelError, setCancelError] = useState<string | null>(null);

    const handleCancel = async (id: string) => {
        if (!password) {
            setCancelError("비밀번호를 입력하세요.");
            return;
        }

        setIsCancel(true);
        setCancelError(null);

        try {
            await cancelReservation(id, password);
            alert("예약이 성공적으로 취소되었습니다.");
            navigate("/reservations");
        } catch (err: any) {
            console.error("Failed to cancel reservation:", err);
            setCancelError(err.message || "예약 취소에 실패했습니다.");
        } finally {
            setIsCancel(false);
        }
    };

    const togglePasswordPrompt = () => {
        setShowPasswordPrompt(!showPasswordPrompt);
        setCancelError(null);
        setPassword("");
    };

    return {
        showPasswordPrompt,
        password,
        setPassword,
        isCancel,
        cancelError,
        handleCancel,
        togglePasswordPrompt,
    };
};