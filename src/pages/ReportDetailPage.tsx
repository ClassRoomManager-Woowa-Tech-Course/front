import {useParams} from "react-router-dom";
import ListPageLayout from "@/layouts/ListPageLayout";
import ListPageHeader from "@/layouts/header/ListPageHeader";
import {IoBusinessOutline, IoCalendarOutline} from "react-icons/io5";

import {
    ContentText,
    ContentWrapper,
    DescriptionWrapper
} from "@/styles/DetailPage.styles";
import {
    FileSectionWrapper,
    FileSectionTitle,
    FilesContainer,
    FileItem,
    AttachedImage,
    AttachedFileLink,
    FileNameText
} from "@/styles/FileSection.styles";
import {extractFileName, isImageUrl} from "../utils/fileUtils";
import {useReportDetail} from "../hooks/useReportDetail";

const ReportDetailPage = () => {
    const {id} = useParams<{id: string}>();
    const {item, isLoading, error} = useReportDetail(id);

    if (isLoading) {
        return (
            <ListPageLayout>
                <ListPageHeader
                    title="로딩 중..."
                    description="데이터를 불러오고 있습니다."
                />
            </ListPageLayout>
        )
    }
    if (error || !item) {
        return (
            <ListPageLayout>
                <ListPageHeader
                    title="오류"
                    description={error || "게시글을 찾을 수 없습니다."}
                />
            </ListPageLayout>
        )
    }
    return (
        <ListPageLayout>
            <ListPageHeader
                title={`${item.item} 고장 신고 (${item.status})`}
                description={
                    <DescriptionWrapper>
                        <IoCalendarOutline/>
                        <span>{`게시일: ${item.date}`}</span>
                        <IoBusinessOutline/>
                        <span>{item.roomCode}</span>
                        <span>{`학번/교직원번호: ${item.memberId}`}</span>
                        <span>{`연락처: ${item.contact}`}</span>
                    </DescriptionWrapper>
                }
            />
            <ContentWrapper>
                <ContentText>
                    {item.content}
                </ContentText>
                {item.fileUrls && item.fileUrls.length > 0 && (
                    <FileSectionWrapper>
                        <FileSectionTitle>첨부 파일</FileSectionTitle>
                        <FilesContainer>
                            {item.fileUrls.map((url, index) => {
                                const isImage = isImageUrl(url);
                                const fileName = extractFileName(url, index);

                                return (
                                    <FileItem key={index}>
                                        {isImage ? (
                                            <>
                                                <AttachedImage
                                                    src={url}
                                                    alt={`첨부파일 ${fileName}`}
                                                />
                                                <FileNameText>{fileName}</FileNameText>
                                            </>
                                        ) : (
                                            <AttachedFileLink
                                                href={url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {fileName}
                                            </AttachedFileLink>
                                        )}
                                    </FileItem>
                                );
                            })}
                        </FilesContainer>
                    </FileSectionWrapper>
                )}
            </ContentWrapper>
        </ListPageLayout>
    )
}
export default ReportDetailPage;