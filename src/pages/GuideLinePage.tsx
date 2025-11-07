import ListPageLayout from "@/layouts/ListPageLayout";
import ListPageHeader from "@/components/ListPageHeader";
import GuideLines from "../components/GuideLines";
import {guideMockData} from "../data/GuideMockData";

const GuideLinePage = () => {
    return (
        <ListPageLayout>
            <ListPageHeader
                title="강의실 사용 가이드라인"
                description="강의실 사용 가이드라인 페이지입니다."
            />
            <GuideLines items={guideMockData} />
        </ListPageLayout>
    )
}

export default GuideLinePage;