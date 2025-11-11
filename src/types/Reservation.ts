export interface Reservation {
    role: 'STUDENT' | 'STAFF' | '';
    memberId: string;
    contact: string;
    roomCode: string;
    title: string;
    purpose: string;
    reservationId: number;
    date: string;
    startTime: string;
    endTime: string;
    password: string;
}