import ListPageLayout from "@/layouts/ListPageLayout";
import ListPageHeader from "@/components/ListPageHeader";
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import {IoCalendarOutline} from "react-icons/io5";
import {ContentText, ContentWrapper, DescriptionWrapper} from "../styles/DetailPage.styles";
import {getGuideLineById} from "../api/GuideLineApi";
import {
    FileSectionWrapper,
    FileSectionTitle,
    FilesContainer,
    FileItem,
    AttachedFileLink,
    AttachedImage
} from "../styles/FileSection.styles";
const isImageUrl = (url: string): boolean => {
    if (!url) return false;
    return /\.(jpg|jpeg|png|gif|bmp|webp|svg)(\?.*)?$/i.test(url);
};

const GuideLineDetailPage = () => {
    const {id} = useParams<{id: string}>();
    const [item, setItem] = useState<GuideLineResponse | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        if (!id) return;
        const fetchGuideLine = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const data = await getGuideLineById(id);
                const formattedData = {
                    ...data,
                    date: data.date ? data.date.replace('T', ' ').substring(0, 16) : '날짜 없음'
                };
                setItem(formattedData);
            } catch (err) {
                console.error("Failed to fetch guideline detail:", err);
                setError("게시글을 불러오는 데 실패했습니다.");
            } finally {
                setIsLoading(false);
            }
        };
        fetchGuideLine();
    }, [id]);
    if (isLoading) {
        return (
            <ListPageLayout>
                <ListPageHeader
                    title="로딩 중..."
                    description="데이터를 불러오고 있습니다."
                />
            </ListPageLayout>
        );
    }
    if (error || !item) {
        return (
            <ListPageLayout>
                <ListPageHeader
                    title="오류"
                    description={error || "게시글을 찾을 수 없습니다."}
                />
            </ListPageLayout>
        );
    }
    return (
        <ListPageLayout>
            <ListPageHeader
                title={`${item.roomCode}호 기자재 사용 가이드라인`}
                description={
                    <DescriptionWrapper>
                        <IoCalendarOutline />
                        <span>{`게시일: ${item.date}`}</span>
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
                                // 파일명 추출 시 쿼리 파라미터 제거
                                const fileName = url.split('/').pop()?.split('?')[0] || `파일 ${index + 1}`;

                                return (
                                    <FileItem key={index}>
                                        {isImage ? (
                                            <>
                                                <AttachedImage
                                                    src={url}
                                                    alt={`첨부파일 ${fileName}`}
                                                />
                                            </>
                                        ) : (
                                            <>
                                                <AttachedFileLink
                                                    href={url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {fileName}
                                                </AttachedFileLink>
                                            </>
                                        )}
                                    </FileItem>
                                );
                            })}
                        </FilesContainer>
                    </FileSectionWrapper>
                )}
            </ContentWrapper>
        </ListPageLayout>
    );
};

export default GuideLineDetailPage;