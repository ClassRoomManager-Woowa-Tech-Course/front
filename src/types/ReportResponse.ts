export interface ReportResponse {
    id: number;
    roomCode: string;
    date: string;
    status: string;
    item: string;
    memberId: string;
    fileUrls: string[];
}