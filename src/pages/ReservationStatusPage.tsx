import ListPageLayout from "@/layouts/ListPageLayout";
import ListPageHeader from "@/components/ListPageHeader";
import {useMemo, useState} from "react";
import CalendarControls from "@/components/CalendarControls";
import CalendarView from "@/components/CalendarView";
import ReservationListModal from "../components/ReservationListModal";
import {mockData} from "../data/ReservationMockData";

const ReservationStatusPage = () => {
    const [currentDate, setCurrentDate] = useState(new Date('2025-11-01'));
    const [selectedRoom, setSelectedRoom] = useState("5413호");
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const handleMonthChange = (direction: 'prev' | 'next') => {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate);
            newDate.setMonth(newDate.getMonth() + (direction === 'prev' ? -1 : 1));
            return newDate;
        });
    };

    const handleDateSelect = (date: Date) => {
        setSelectedDate(date);
    };

    const handleCloseModal = () => {
        setSelectedDate(null);
    }

    const monthlyReservations = useMemo(() => {
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const dateString = `${year}-${month}`;

        return mockData.filter(reservation =>
            reservation.roomCode === selectedRoom &&
            reservation.date.startsWith(dateString)
        )
    }, [mockData, selectedRoom, currentDate]);

    const selectedDayReservations = useMemo(() => {
        if (!selectedDate) return [];

        const year = selectedDate.getFullYear();
        const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
        const day = String(selectedDate.getDate()).padStart(2, '0');
        const dateString = `${year}-${month}-${day}`;

        return mockData
            .filter(reservation => reservation.roomCode === selectedRoom &&
                reservation.date == dateString)
            .sort((reservationA, reservationB) =>
                reservationA.startTime.localeCompare(reservationB.startTime));
    }, [selectedDate, mockData, selectedRoom]);

    return (
        <ListPageLayout>
            <ListPageHeader
                title="강의실 예약 현황"
                description="강의실 예약 현황 페이지입니다. 예약 후 학과 사무실에 연락주세요."
            />
            <CalendarControls
                currentDate={currentDate}
                selectedRoom={selectedRoom}
                onMonthChange={handleMonthChange}
                onRoomChange={setSelectedRoom}
            />
            <CalendarView
                currentDate={currentDate}
                reservations={monthlyReservations}
                onDateSelect={handleDateSelect}
            />
            {selectedDate && (
                <ReservationListModal
                    selectedDate={selectedDate}
                    reservations={selectedDayReservations}
                    onClose={handleCloseModal}
                />
            )}
        </ListPageLayout>
    )
}

export default ReservationStatusPage;
