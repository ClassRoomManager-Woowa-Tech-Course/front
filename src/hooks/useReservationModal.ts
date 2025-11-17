import {useMemo, useState} from "react";
import type {ReservationResponse} from "../types/ReservationResponse";

export const useReservationModal = (allReservations: ReservationResponse[]) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const handleDateSelect = (date: Date) => {
        setSelectedDate(date);
    };

    const handleCloseModal = () => {
        setSelectedDate(null);
    }

    const selectedDayReservations = useMemo(() => {
        if (!selectedDate) return [];

        const year = selectedDate.getFullYear();
        const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
        const day = String(selectedDate.getDate()).padStart(2, '0');
        const dateString = `${year}-${month}-${day}`;

        return allReservations
            .filter(reservation =>
                reservation.date === dateString
            )
            .sort((reservationA, reservationB) =>
                reservationA.startTime.localeCompare(reservationB.startTime)
            );
    }, [selectedDate, allReservations]);

    return {selectedDate, selectedDayReservations, handleDateSelect, handleCloseModal}
}