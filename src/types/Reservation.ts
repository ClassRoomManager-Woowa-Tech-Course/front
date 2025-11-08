export interface Reservation {
    userRole: 'STUDENT' | 'STAFF' | '';
    userId: string;
    contact: string;
    roomCode: string;
    purpose: string;
    files?: FileList;
    id: number;
    date: string;
    startTime: string;
    endTime: string;
}