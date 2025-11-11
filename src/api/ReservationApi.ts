import {api} from "./Client";
import {Reservation} from "@/types/Reservation";
import {ReservationResponse} from "../types/ReservationResponse";

const combineDateTime = (date: string, time: string): string => {
    return `${date}T${time}:00`;
}
export const registerReservation = async (data: Reservation) => {
    try {
        const startDate = combineDateTime(data.date, data.startTime);
        const endDate = combineDateTime(data.date, data.endTime);
        const reservationData = {
            memberId: data.memberId,
            contact: data.contact,
            userRole: data.userRole,
            roomCode: data.roomCode,
            role: data.role,
            title: data.title,
            purpose: data.purpose,
            startDate: startDate,
            endDate: endDate
        };
        await api.post('/reservations', reservationData);
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