export interface Report {
    item: string;
    roomNumber: string;
    userRole: 'student' | 'staff' | '';
    userId: string;
    contact: string;
    description: string;
    files?: FileList;
    status: 'pending' | 'completed'
}