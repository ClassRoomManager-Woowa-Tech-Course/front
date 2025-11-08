export interface Report {
    id: number;
    date: string;
    item: string;
    roomCode: string;
    userRole: 'STUDENT' | 'STAFF' | '';
    userId: string;
    contact: string;
    content: string;
    files?: FileList;
    status: 'PENDING' | 'COMPLETED'
}