import {useParams} from "react-router-dom";
import {reportMockData} from "../data/ReportMockData";
import ListPageLayout from "../layouts/ListPageLayout";
import ListPageHeader from "../components/ListPageHeader";
import {IoBusinessOutline, IoCalendarOutline} from "react-icons/io5";
import {ContentText, ContentWrapper, DescriptionWrapper} from "../styles/DetailPage.styles";

const ReportDetailPage = () => {
    const {id} = useParams<{id: string}>();
    const item = reportMockData.find(r => r.id == Number(id));
    if (!item) {
        return (
            <ListPageLayout>
                <ListPageHeader
                    title="오류"
                    description="게시글을 찾을 수 없습니다."
                />
            </ListPageLayout>
        )
    }
    return (
        <ListPageLayout>
            <ListPageHeader
                title={`${item.item}"고장 신고"${item.status}`}
                description={
                    <DescriptionWrapper>
                        <IoCalendarOutline/>
                        <span>{`게시일: ${item.date}`}</span>
                        <IoBusinessOutline/>
                        <span>{item.roomCode}</span>
                        <span>{`학번/교직원번호: ${item.userId}`}</span>
                        <span>{`연락처: ${item.contact}`}</span>
                    </DescriptionWrapper>
                }
            />
            <ContentWrapper>
                <ContentText>
                    {item.content}
                </ContentText>
            </ContentWrapper>
        </ListPageLayout>
    )
}
export default ReportDetailPage;
