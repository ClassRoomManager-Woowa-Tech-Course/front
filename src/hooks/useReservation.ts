import {useEffect} from "react";
import {getReservationById} from "../api/ReservationApi";
import {useForm} from "react-hook-form";
import type {Reservation} from "../types/Reservation";

export const useReservation = (id: string | undefined) => {
    const { register, handleSubmit, reset } = useForm<Reservation>();
    const isEditMode = Boolean(id);
    useEffect(() => {
        if (isEditMode && id) {
            const fetchAndPopulateData = async () => {
                try {
                    const data = await getReservationById(id);
                    reset(data);
                } catch (error) {
                    console.error("Failed to fetch reservation data:", error);
                    alert("예약 정보를 불러오는 데 실패했습니다.");
                }
            };
            fetchAndPopulateData();
        }
    }, [id, isEditMode, reset]);

    return {register, isEditMode, handleSubmit};
}