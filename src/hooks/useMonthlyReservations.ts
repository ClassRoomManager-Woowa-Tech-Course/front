import {useEffect, useState} from "react";
import type {ReservationResponse} from "../types/ReservationResponse";
import {getReservations} from "../api/ReservationApi";

export const useMonthlyReservations = (currentDate: Date, selectedRoom: string) => {
    const [reservations, setMonthlyReservations] = useState<ReservationResponse[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchReservations = async () => {
            const year = currentDate.getFullYear();
            const month = String(currentDate.getMonth() + 1).padStart(2, '0');
            const yearMonth = `${year}-${month}`;

            try {
                setIsLoading(true);
                setError(null);
                const data = await getReservations(selectedRoom, yearMonth);
                setMonthlyReservations(data);
            } catch (err: any) {
                console.error("Failed to fetch reservations:", err);
                setError(err.message || "데이터를 불러오는 데 실패했습니다.");
            } finally {
                setIsLoading(false);
            }
        };
        fetchReservations();
    }, [currentDate, selectedRoom]);

    return { reservations, isLoading, error };
}