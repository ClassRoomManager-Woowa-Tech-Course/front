import React, {useMemo} from 'react';
import styled, { css } from 'styled-components';
import type {Reservation} from "@/types/Reservation";

interface CalendarViewProps {
    currentDate: Date;
    reservations: Reservation[];
    onDateSelect: (date : Date) => void;
}

interface DayInfo {
    date: Date;
    isCurrentMonth: boolean;
}

const buildCalendarDays = (date: Date): DayInfo[][] => {
    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const days: DayInfo[] = [];
    const weeks: DayInfo[][] = [];

    // 1. 이전 달 날짜 채우기
    const startDayOfWeek = firstDay.getDay(); // 0 (Sun) - 6 (Sat)
    for (let i = startDayOfWeek; i > 0; i--) {
        const prevDate = new Date(year, month, 0); // 지난 달의 마지막 날
        prevDate.setDate(prevDate.getDate() - i + 1);
        days.push({ date: prevDate, isCurrentMonth: false });
    }

    // 2. 현재 달 날짜 채우기
    for (let i = 1; i <= lastDay.getDate(); i++) {
        days.push({
            date: new Date(year, month, i),
            isCurrentMonth: true,
        });
    }

    // 3. 다음 달 날짜 채우기 (그리드를 6주로 고정)
    const remaining = 42 - days.length; // 6주 * 7일 = 42
    for (let i = 1; i <= remaining; i++) {
        days.push({
            date: new Date(year, month + 1, i),
            isCurrentMonth: false,
        });
    }

    // 4. 주(week) 단위로 나누기
    for (let i = 0; i < 6; i++) {
        weeks.push(days.slice(i * 7, (i + 1) * 7));
    }

    return weeks;
};


const CalendarView: React.FC<CalendarViewProps> = ({ currentDate, reservations, onDateSelect }) => {
    const weeks = buildCalendarDays(currentDate);
    const dayHeaders = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    const reservationCounts = useMemo(() => {
        const counts: { [key: number]: number } = {};
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        for (const res of reservations) {
            const [resYear, resMonth, resDay] = res.date.split('-').map(Number);
            if (resYear == year && (resMonth - 1) == month) {
                counts[resDay] = (counts[resDay] || 0) + 1;
            }
        }
        return counts;
    }, [currentDate, reservations]);

    return (
        <CalendarGrid>
            {dayHeaders.map(day => (
                <DayHeaderCell key={day} isSunday={day === 'SUN'}>
                    {day}
                </DayHeaderCell>
            ))}
            {weeks.flat().map(({ date, isCurrentMonth }) => {
                const day = date.getDate();
                const reservationCount = isCurrentMonth ? reservationCounts[day || 0] : 0;
                const isSunday = date.getDay() === 0;
                return (
                    <DayCell
                        key={date.toISOString()}
                        isOutsideMonth={!isCurrentMonth}
                        isSunday={isSunday}
                    >
                        <DayHeader>
                            <DayNumber>{day}</DayNumber>
                        </DayHeader>
                        {isCurrentMonth && reservationCount > 0 && (
                            <ReservationCount onClick={() => onDateSelect(date)}>
                                {reservationCount}건
                            </ReservationCount>
                        )}
                        <Spacer/>
                    </DayCell>
                );
            })}
        </CalendarGrid>
    );
};

export default CalendarView;

const CalendarGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
`;

const BaseCell = styled.div`
    min-height: 100px;
    padding: 8px;
    box-sizing: border-box;
    border-right: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;

    &:nth-child(7n) { border-right: none; }
    &:nth-last-child(-n + 7) { border-bottom: none; }
`;

const DayHeaderCell = styled(BaseCell)<{ isSunday?: boolean }>`
    background-color: #f9f9f9;
    font-weight: 600;
    font-size: 14px;
    min-height: auto;
    padding: 12px 8px;
    text-align: center;
    color: ${props => props.isSunday ? '#e63737' : '#555'};
`;

const DayCell = styled(BaseCell)<{ isOutsideMonth?: boolean; isSunday?: boolean; }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${props => props.isSunday ? '#e63737' : 'black'};
    position: relative;
    
    ${props => props.isOutsideMonth && css`
        color: #ccc;
        background-color: #fdfdfd;
        > * { opacity: 0.5; }
        
        > ${ReservationCount} {
            display: none;
        }
    `}
`;

const DayHeader = styled.div`
    width: 100%;
    margin-bottom: 8px;
`;

const DayNumber = styled.span`
    font-size: 16px;
    font-weight: 600;
`;

const ReservationCount = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    font-size: 14px;
    font-weight: 600;
    color: #007aff;
    cursor: pointer;
    padding: 4px 10px;
    border-radius: 16px;
    transition: background-color 0.2s;

    &:hover {
        background-color: #f0f8ff; // 밝은 파란색 배경
        text-decoration: underline;
    }
`;

const Spacer = styled.div`
    flex-grow: 1;
`;
