import {useEffect, useState} from "react";
import type {ReservationResponse} from "../types/ReservationResponse";
import {getReservationById} from "../api/ReservationApi";

export const useReservationDetail = (id: string | undefined) => {
    const [item, setItem] = useState<ReservationResponse | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;
        const fetchReservation = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const data = await getReservationById(id);
                setItem(data);
            } catch (err) {
                console.error("Failed to fetch reservation detail:", err);
                setError("예약 정보를 불러오는 데 실패했습니다.");
            } finally {
                setIsLoading(false);
            }
        };
        fetchReservation();
    }, [id]);

    return {item, isLoading, error};
}