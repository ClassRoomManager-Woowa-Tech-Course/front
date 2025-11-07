import React from 'react';
import styled from 'styled-components';
import type { Reservation } from '@/types/Reservation';

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

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 500px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid #eee;
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: #333;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 28px;
  color: #888;
  cursor: pointer;
  padding: 0;
  line-height: 1;

  &:hover {
    color: #000;
  }
`;

const ListContent = styled.div`
  padding: 24px;
  overflow-y: auto;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ListItem = styled.li`
  display: grid;
  grid-template-columns: 120px 1fr;
  align-items: center;
  gap: 8px 16px;
  padding: 12px;
  background-color: #f9f9f9;
  border-radius: 8px;
  border: 1px solid #eee;
`;

const Time = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #007aff;
  grid-row: 1 / 3; // 2줄 차지
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Purpose = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #333;
`;

const User = styled.span`
  font-size: 14px;
  color: #777;
`;

const NoReservation = styled.p`
  text-align: center;
  color: #888;
  padding: 20px 0;
`;