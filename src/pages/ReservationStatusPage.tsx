import ListPageLayout from "@/layouts/ListPageLayout";
import ListPageHeader from "@/components/ListPageHeader";
import {useMemo, useState, useEffect} from "react";
import CalendarControls from "@/components/CalendarControls";
import CalendarView from "@/components/CalendarView";
import ReservationListModal from "../components/ReservationListModal";
import {ReservationResponse} from "../types/ReservationResponse";
import {getReservations} from "../api/ReservationApi";

const ReservationStatusPage = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedRoom, setSelectedRoom] = useState<string>("5413");
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const [monthlyReservations, setMonthlyReservations] = useState<ReservationResponse[]>([]);
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

        return monthlyReservations
            .filter(reservation =>
                reservation.date === dateString
            )
            .sort((reservationA, reservationB) =>
                reservationA.startTime.localeCompare(reservationB.startTime)
            );
    }, [selectedDate, monthlyReservations]);

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
            {isLoading && <div>로딩 중...</div>}
            {error && <div style={{ color: 'red' }}>{error}</div>}
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
