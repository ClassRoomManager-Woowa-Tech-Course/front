export interface Reservation {
    userRole: 'STUDENT' | 'STAFF' | '';
    memberId: string;
    contact: string;
    roomCode: string;
    title: string;
    purpose: string;
    files?: FileList;
    id: number;
    date: string;
    startTime: string;
    endTime: string;
}