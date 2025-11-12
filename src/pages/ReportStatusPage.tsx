import ListPageLayout from "@/layouts/ListPageLayout";
import Reports from "@/components/Reports";
import {useEffect, useState} from "react";
import type {ReportResponse} from "@/types/ReportResponse";
import {getReports} from "@/api/ReportApi";
import ListPageHeader from "@/layouts/header/ListPageHeader";

const ReportStatusPage = () => {
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
    if (isLoading) {
        return (
            <ListPageLayout>
                <ListPageHeader
                    title="신고 접수 목록"
                    description="현재 등록된 고장 신고 목록입니다."
                />
                <div>로딩 중...</div>
            </ListPageLayout>
        );
    }
    if (error) {
        return (
            <ListPageLayout>
                <ListPageHeader
                    title="신고 접수 목록"
                    description="현재 등록된 고장 신고 목록입니다."
                />
                <div style={{ color: 'red' }}>{error}</div>
            </ListPageLayout>
        )
    }
    return (
        <ListPageLayout>
            <ListPageHeader
                title="신고 접수 목록"
                description="현재 등록된 고장 신고 목록입니다."
            />
            <Reports items={reports} onUpdateStatus={handleUpdateStatus} />
        </ListPageLayout>
    )
}

export default ReportStatusPage;
