import {useState} from "react";

export const useCalendarState = (initialRoom: string = "5413") => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedRoom, setSelectedRoom] = useState<string>(initialRoom);

    const handleMonthChange = (direction: 'prev' | 'next') => {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate);
            newDate.setMonth(newDate.getMonth() + (direction === 'prev' ? -1 : 1));
            return newDate;
        });
    };

    return {currentDate, selectedRoom, setSelectedRoom, handleMonthChange}
}