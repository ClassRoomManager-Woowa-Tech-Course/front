import ListPageLayout from "@/layouts/ListPageLayout";
import CalendarControls from "@/components/CalendarControls";
import CalendarView from "@/components/CalendarView";
import ReservationListModal from "@/components/ReservationListModal";
import ListPageHeader from "@/layouts/header/ListPageHeader";
import {useMonthlyReservations} from "@/hooks/useMonthlyReservations";
import {useCalendarState} from "../hooks/useCalendarState";
import {useReservationModal} from "../hooks/useReservationModal";

const ReservationStatusPage = () => {
    const {
        currentDate,
        selectedRoom,
        setSelectedRoom,
        handleMonthChange
    } = useCalendarState("5413");

    const {
        reservations: monthlyReservations,
        isLoading,
        error
    } = useMonthlyReservations(currentDate, selectedRoom);

    const {
        selectedDate,
        selectedDayReservations,
        handleDateSelect,
        handleCloseModal,
    } = useReservationModal(monthlyReservations);

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
