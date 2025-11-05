export interface Report {
    id: number;
    title: string;
    item: string;
    room: string;
    createdAt: string;
    status: 'pending' | 'completed'
}