import React from 'react';
import type { Reservation } from '@/types/Reservation';
import {
    CloseButton, List,
    ListContent, ListItem,
    ModalContainer,
    ModalHeader,
    ModalTitle, NoReservation,
    Overlay, Purpose, Time, User
} from "../styles/ReservationListModal.styles";

interface ModalProps {
    reservations: Reservation[];
    selectedDate: Date;
    onClose: () => void;
}

const ReservationListModal: React.FC<ModalProps> = ({ reservations, selectedDate, onClose }) => {
    // 날짜 포맷 (예: "11월 4일 (화)")
    const formattedDate = selectedDate.toLocaleDateString('ko-KR', {
        month: 'long',
        day: 'numeric',
        weekday: 'short',
    });

    return (
        <Overlay onClick={onClose}>
            <ModalContainer onClick={(e) => e.stopPropagation()}>
                <ModalHeader>
                    <ModalTitle>{formattedDate} 예약 명단</ModalTitle>
                    <CloseButton onClick={onClose}>&times;</CloseButton>
                </ModalHeader>
                <ListContent>
                    {reservations.length > 0 ? (
                        <List>
                            {reservations.map(res => (
                                <ListItem key={res.id}>
                                    <Time>{res.startTime} ~ {res.endTime}</Time>
                                    <Purpose>{res.purpose}</Purpose>
                                    <User>(예약자: {res.userId})</User>
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                        <NoReservation>예약 내역이 없습니다.</NoReservation>
                    )}
                </ListContent>
            </ModalContainer>
        </Overlay>
    );
};

export default ReservationListModal;
