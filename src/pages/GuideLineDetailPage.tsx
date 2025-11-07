import ListPageLayout from "@/layouts/ListPageLayout";
import ListPageHeader from "@/components/ListPageHeader";
import {guideMockData} from "@/data/GuideMockData";
import {useParams} from "react-router-dom";
import {IoCalendarOutline} from "react-icons/io5";
import {ContentText, ContentWrapper, DescriptionWrapper} from "../styles/DetailPage.styles";

const GuideLineDetailPage = () => {
    const {id} = useParams<{id: string}>();
    const item = guideMockData.find(g => g.id == Number(id));
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
                title={item.title}
                description={
                    <DescriptionWrapper>
                        <IoCalendarOutline/>
                        <span>{`게시일: ${item.date}`}</span>
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

export default GuideLineDetailPage;
