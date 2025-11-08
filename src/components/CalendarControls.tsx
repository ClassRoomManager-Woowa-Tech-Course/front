import React from 'react';
import {
    ControlsWrapper,
    CurrentMonth,
    MonthNavigator,
    NavButton,
    RoomSelector
} from "@/styles/CalendarControls.styles";

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
    return (
        <ControlsWrapper>
            <RoomSelector
                value={selectedRoom}
                onChange={(e) => onRoomChange(e.target.value)}
            >
                <option value="5413호">5413호</option>
                <option value="5414호">5414호</option>
                <option value="5527호">5527호</option>
                <option value="5507호">5507호</option>
                <option value="5508호">5508호</option>
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

