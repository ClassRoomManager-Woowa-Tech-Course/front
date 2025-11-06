export interface Reservation {
    userRole: 'student' | 'staff' | '';
    userId: string;
    contact: string;
    roomNumber: string;
    purpose: string;
    file?: FileList;
    id: number;
    date: string;
    startTime: string;
    endTime: string;
}