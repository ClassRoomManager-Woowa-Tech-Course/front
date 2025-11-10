import ListPageLayout from "@/layouts/ListPageLayout";
import ListPageHeader from "@/components/ListPageHeader";
import GuideLines from "../components/GuideLines";
import {getGuideLines} from "../api/GuideLineApi";
import { useState, useEffect } from "react";
import type { GuideLineResponse } from "@/types/GuideLine";

const GuideLinePage = () => {
    const [guideLines, setGuideLines] = useState<GuideLineResponse[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchGuideLines = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const data = await getGuideLines();
                const formattedData = data.map(item => ({
                    ...item,
                    date: item.date.replace('T', ' ').substring(0, 16)
                }));
                setGuideLines(formattedData);
            } catch (err) {
                console.error("Failed to fetch guidelines:", err);
                setError("가이드라인을 불러오는 데 실패했습니다.");
            } finally {
                setIsLoading(false);
            }
        };
        fetchGuideLines();
    }, []);
    if (isLoading) {
        return (
            <ListPageLayout>
                <ListPageHeader
                    title="강의실 사용 가이드라인"
                    description="강의실 사용 가이드라인 페이지입니다."
                />
                <div>로딩 중...</div>
            </ListPageLayout>
        );
    }
    if (error) {
        return (
            <ListPageLayout>
                <ListPageHeader
                    title="강의실 사용 가이드라인"
                    description="강의실 사용 가이드라인 페이지입니다."
                />
                <div style={{ color: 'red' }}>{error}</div>
            </ListPageLayout>
        );
    }
    return (
        <ListPageLayout>
            <ListPageHeader
                title="강의실 사용 가이드라인"
                description="강의실 사용 가이드라인 페이지입니다."
            />
            <GuideLines items={guideLines} />
        </ListPageLayout>
    );
};

export default GuideLinePage;
