import React from 'react';
import styled from 'styled-components';

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
                <option value="5627호">5627호</option>
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

const ControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const RoomSelector = styled.select`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  background-color: #f8f8f8;
`;

const MonthNavigator = styled.div`
  display: flex;
  align-items: center;
  background-color: #333;
  border-radius: 8px;
  color: white;
  padding: 4px;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  padding: 4px 16px;
  
  &:hover {
    opacity: 0.8;
  }
`;

const CurrentMonth = styled.span`
  font-size: 18px;
  font-weight: 600;
  min-width: 100px;
  text-align: center;
`;