import React from 'react';
import {
    ControlsWrapper,
    CurrentMonth,
    MonthNavigator,
    NavButton,
    RoomSelector
} from "@/styles/CalendarControls.styles";
import {useClassrooms} from "../hooks/useClassrooms";

interface CalendarControlsProps {
    currentDate: Date;
    selectedRoom: string;
    onMonthChange: (direction: 'prev' | 'next') => void;
    onRoomChange: (room: string) => void;
}

const CalendarControls: React.FC<CalendarControlsProps> = ({
                                                               currentDate,
                                                               selectedRoom,
                                                               onMonthChange,
                                                               onRoomChange
                                                           }) => {
    const formattedDate = `${currentDate.getFullYear()}. ${String(currentDate.getMonth() + 1).padStart(2, '0')}`;
    const { classrooms, isLoading, fetchError } = useClassrooms();
    return (
        <ControlsWrapper>
            <RoomSelector
                value={selectedRoom}
                onChange={(e) => onRoomChange(e.target.value)}
            >
                <option value="">
                    {isLoading ? '강의실 불러오는 중...' : (fetchError ? '오류 발생' : '강의실을 선택하세요')}
                </option>
                {!isLoading && !fetchError && classrooms.map((room) => (
                    <option key={room.roomCode} value={room.roomCode}>
                        {room.roomCode}
                    </option>
                ))}
            </RoomSelector>

            <MonthNavigator>
                <NavButton onClick={() => onMonthChange('prev')}>&lt;</NavButton>
                <CurrentMonth>{formattedDate}</CurrentMonth>
                <NavButton onClick={() => onMonthChange('next')}>&gt;</NavButton>
            </MonthNavigator>
        </ControlsWrapper>
    );
};

export default CalendarControls;

