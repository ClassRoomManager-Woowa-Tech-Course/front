import {api} from "./Client";
import type {Reservation} from "@/types/Reservation";
import type {ReservationResponse} from "../types/ReservationResponse";

const combineDateTime = (date: string, time: string): string => {
    return `${date}T${time}`;
}
export const registerReservation = async (data: Reservation) => {
    try {
        const startDate = combineDateTime(data.date, data.startTime);
        const endDate = combineDateTime(data.date, data.endTime);
        const reservationData = {
            memberId: data.memberId,
            contact: data.contact,
            role: data.role,
            roomCode: data.roomCode,
            title: data.title,
            purpose: data.purpose,
            password: data.password,
            startDate: startDate,
            endDate: endDate
        };
        const response = await api.post('/reservations', reservationData);
        return response.data
    } catch (error: any) {
        console.error("예약 등록 실패:", error.response?.data);
        throw new Error(error.response?.data?.message || "예약 등록에 실패했습니다.")
    }
};

export const getReservations = async (roomCode: string, yearMonth: string): Promise<ReservationResponse[]> => {
    try {
        const response = await api.get(`/reservations/${roomCode}`, {
            params: {
                yearMonth: yearMonth
            }
        });
        return response.data;
    } catch (error: any) {
        console.error("예약 조회 실패 (API):", error.response?.data);
        throw new Error(error.response?.data?.message || "예약 조회에 실패했습니다.");
    }
}

export const getReservationById = async (id: string): Promise<ReservationResponse> => {
    const response = await api.get(`/reservations/detail/${id}`)
    return response.data
}

export const cancelReservation = async (reservationId: string, password: string): Promise<void> => {
    try {
        await api.delete(`/reservations/${reservationId}`, {
            data: { password: password }
        });
    } catch (error: any) {
        console.error("예약 취소 실패 (API):", error.response?.data);
        throw new Error(error.response?.data?.message || "예약 취소에 실패했습니다. 비밀번호를 확인하세요.");
    }
};

export const updateReservation = async (id: string, data: Reservation):Promise<void> => {
    const reservationData = {
        memberId: data.memberId,
        contact: data.contact,
        role: data.role,
        roomCode: data.roomCode,
        title: data.title,
        purpose: data.purpose,
        startDate: combineDateTime(data.date, data.startTime),
        endDate: combineDateTime(data.date, data.endTime),
        password: data.password // 비밀번호는 검증을 위해 전송
    };
    try {
        await api.put(`/reservations/edit/${id}`, reservationData);
    } catch (error: any) {
        console.error("예약 수정 실패 (API):", error.response?.data);
        throw new Error(error.response?.data?.message || "예약 수정에 실패했습니다.");
    }
}