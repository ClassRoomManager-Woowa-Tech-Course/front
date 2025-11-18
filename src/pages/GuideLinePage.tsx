import ListPageLayout from "@/layouts/ListPageLayout";
import GuideLines from "@/components/GuideLines";
import ListPageHeader from "@/layouts/header/ListPageHeader";
import {useGuideLine} from "../hooks/useGuideLine";

const GuideLinePage = () => {
    const {guideLines, isLoading, error} = useGuideLine();
    const header = (
        <ListPageHeader
            title="강의실 사용 가이드라인"
            description="강의실 사용 가이드라인 페이지입니다."
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
        );
    }
    return (
        <ListPageLayout>
            {header}
            <GuideLines items={guideLines} />
        </ListPageLayout>
    );
};

export default GuideLinePage;
