export interface Report {
    id: number;
    date: string;
    item: string;
    roomNumber: string;
    userRole: 'student' | 'staff' | '';
    userId: string;
    contact: string;
    description: string;
    files?: FileList;
    status: 'pending' | 'completed'
}