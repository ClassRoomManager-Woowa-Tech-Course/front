import ListPageLayout from "@/layouts/ListPageLayout";
import ListPageHeader from "@/components/ListPageHeader";
import {useMemo, useState} from "react";
import CalendarControls from "@/components/CalendarControls";
import CalendarView from "@/components/CalendarView";
import type {Reservation} from "@/types/Reservation";
import ReservationListModal from "../components/ReservationListModal";

const mockData: Reservation[] = [
    { id: 1, date: '2025-11-04', startTime: '09:00', endTime: '10:00', roomNumber: '5413호', userRole: 'student', userId: 'user1', contact: '010-1234-5678', purpose: '팀 프로젝트' },
    { id: 2, date: '2025-11-04', startTime: '10:00', endTime: '11:00', roomNumber: '5413호', userRole: 'student', userId: 'user2', contact: '010-1234-5678', purpose: '팀 프로젝트' },
    { id: 3, date: '2025-11-04', startTime: '11:00', endTime: '12:00', roomNumber: '5413호', userRole: 'student', userId: 'user3', contact: '010-1234-5678', purpose: '스터디' },
    { id: 11, date: '2025-11-10', startTime: '09:00', endTime: '11:00', roomNumber: '5413호', userRole: 'student', userId: 'user11', contact: '010-1234-5678', purpose: '스터디' },
    { id: 12, date: '2025-11-11', startTime: '13:00', endTime: '15:00', roomNumber: '5413호', userRole: 'staff', userId: 'staff1', contact: '010-1234-5678', purpose: '회의' },
];

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

    const selectedDayReservations = useMemo(() => {
        if (!selectedDate) return [];

        const year = selectedDate.getFullYear();
        const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
        const day = String(selectedDate.getDate()).padStart(2, '0');
        const dateString = `${year}-${month}-${day}`;

        return mockData
            .filter(reservation => reservation.date == dateString)
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
                reservations={mockData}
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
