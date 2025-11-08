import ListPageLayout from "@/layouts/ListPageLayout";
import ListPageHeader from "@/components/ListPageHeader";
import Reports from "@/components/Reports";
import {reportMockData} from "@/data/ReportMockData"
import {useState} from "react";
import type {Report} from "../types/Report";

const ReportStatusPage = () => {
    const [reports, setReports] = useState<Report[]>(reportMockData);
    const handleUpdateStatus = (id: number) => {
        setReports(currentReports =>
            currentReports.map(report =>
                report.id === id
                    ? { ...report, status: 'COMPLETED' } // id가 일치하면 status 변경
                    : report // 나머지는 그대로
            )
        );
    };
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
