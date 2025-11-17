import {useEffect, useState} from "react";
import {getReports} from "../api/ReportApi";
import type {ReportResponse} from "../types/ReportResponse";

export const useReportStatus = () => {
    const [reports, setReports] = useState<ReportResponse[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const handleUpdateStatus = (id: number) => {
        setReports(currentReports =>
            currentReports.map(report =>
                report.id === id
                    ? { ...report, status: 'COMPLETED' }
                    : report
            )
        );
    };

    useEffect(() => {
        const fetchReports = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const data = await getReports();
                const formattedData = data.map(item => ({
                    ...item,
                    date: item.date ? item.date.replace('T', ' ').substring(0, 16) : '날짜 없음'
                }))
                setReports(formattedData);
            } catch (err) {
                console.error("Failed to fetch guidelines:", err);
                setError("가이드라인을 불러오는 데 실패했습니다.");
            } finally {
                setIsLoading(false);
            }
        };
        fetchReports();
    }, []);
    
    return {reports, isLoading, error, handleUpdateStatus};
}