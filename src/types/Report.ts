export interface Report {
    id: number;
    date: string;
    item: string;
    roomCode: string;
    role: 'STUDENT' | 'STAFF' | '';
    userId: string;
    contact: string;
    content: string;
    files?: FileList;
    status: 'PENDING' | 'COMPLETED'
}