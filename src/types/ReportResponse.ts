export interface ReportResponse {
    id: number;
    memberId: string;
    contact: string;
    roomCode: string;
    date: string;
    status: string;
    content: string;
    item: string;
    fileUrls: string[];
}