import ListPageLayout from "@/layouts/ListPageLayout";
import ListPageHeader from "@/components/ListPageHeader";
import {guideMockData} from "@/data/GuideMockData";
import {useParams} from "react-router-dom";
import styled from "styled-components";

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
                description={`게시일: ${item.date}`}
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

const ContentWrapper = styled.div`
  margin-top: 32px;
  padding: 24px;
  background-color: #f9f9f9;
  border-radius: 8px;
  min-height: 300px;
`;

const ContentText = styled.p`
  font-size: 16px;
  color: #333;
  line-height: 1.8;
  white-space: pre-wrap; // 줄바꿈(\n)을 그대로 표시
`;