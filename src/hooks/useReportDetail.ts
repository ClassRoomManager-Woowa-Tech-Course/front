import {useEffect, useState} from "react";
import {getReportById} from "../api/ReportApi";
import type {ReportResponse} from "../types/ReportResponse";

export const useReportDetail = (id: string | undefined) => {
    const [item, setItem] = useState<ReportResponse | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;
        const fetchReport = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const data = await getReportById(id);
                const formattedData = {
                    ...data,
                    date: data.date ? data.date.replace('T', ' ').substring(0, 16) : '날짜 없음'
                };
                setItem(formattedData);
            } catch (err) {
                console.error("Failed to fetch report detail:", err);
                setError("게시글을 불러오는 데 실패했습니다.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchReport();
    }, [id]);

    return {item, isLoading, error};
}