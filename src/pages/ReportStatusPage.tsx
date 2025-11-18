import ListPageLayout from "@/layouts/ListPageLayout";
import Reports from "@/components/Reports";
import ListPageHeader from "@/layouts/header/ListPageHeader";
import {useReportStatus} from "../hooks/useReportStatus";

const ReportStatusPage = () => {
    const {reports, isLoading, error, handleUpdateStatus} = useReportStatus()
    const header = (
        <ListPageHeader
            title="신고 접수 목록"
            description="현재 등록된 고장 신고 목록입니다."
        />
    );

    if (isLoading) {
        return (
            <ListPageLayout>
                {header}
                <div>로딩 중...</div>
            </ListPageLayout>
        );
    }
    if (error) {
        return (
            <ListPageLayout>
                {header}
                <div style={{ color: 'red' }}>{error}</div>
            </ListPageLayout>
        )
    }
    return (
        <ListPageLayout>
            {header}
            <Reports items={reports} onUpdateStatus={handleUpdateStatus} />
        </ListPageLayout>
    )
}

export default ReportStatusPage;
