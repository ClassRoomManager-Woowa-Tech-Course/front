export interface Report {
    item: string;
    roomNumber: string;
    userRole: 'student' | 'staff' | '';
    userId: string;
    contact: string;
    description: string;
    file?: FileList;
    status: 'pending' | 'completed'
}