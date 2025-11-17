import ListPageLayout from "@/layouts/ListPageLayout";
import GuideLines from "@/components/GuideLines";
import ListPageHeader from "@/layouts/header/ListPageHeader";
import {useGuideLine} from "../hooks/useGuideLine";

const GuideLinePage = () => {
    const {guideLines, isLoading, error} = useGuideLine();
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
