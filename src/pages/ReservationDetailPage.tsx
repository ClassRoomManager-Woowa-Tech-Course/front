import {Link, useParams} from "react-router-dom";
import ListPageLayout from "@/layouts/ListPageLayout";
import ListPageHeader from "@/layouts/header/ListPageHeader";
import {IoBusinessOutline, IoCalendarOutline} from "react-icons/io5";
import {
    ActionButtonsWrapper,
    ContentText,
    ContentWrapper,
    DescriptionWrapper, PasswordInput, PasswordPromptWrapper, ErrorMessage, ActionButton
} from "@/styles/DetailPage.styles";
import {useReservationDetail} from "../hooks/useReservationDetail";
import {useReservationCancel} from "../hooks/useReservationCancel";


const ReservationDetailPage = () => {
    const {id} = useParams<{id: string}>();
    const {item, isLoading, error} = useReservationDetail(id);
    const {
        showPasswordPrompt,
        password,
        setPassword,
        isCancel,
        cancelError,
        handleCancel,
        togglePasswordPrompt,
    } = useReservationCancel();

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
                    description={error || "예약 정보를 찾을 수 없습니다."}
                />
            </ListPageLayout>
        );
    }

    return (
        <ListPageLayout>
            <ListPageHeader
                title={`${item.title} 예약`}
                description={
                    <DescriptionWrapper>
                        <IoCalendarOutline />
                        <span>{`날짜: ${item.date}`}</span>
                        <span>{`시간: ${item.startTime} ~ ${item.endTime}`}</span>
                        <IoBusinessOutline />
                        <span>{`강의실: ${item.roomCode}`}</span>
                        <span>{`예약자: ${item.memberName}`}</span>
                    </DescriptionWrapper>
                }
            />
            <ContentWrapper>
                <ContentText>{item.title}</ContentText>

                <ActionButtonsWrapper>
                    <ActionButton
                        as={Link}
                        to={`/reservations/edit/${item.reservationId}`}
                    >
                        예약 수정
                    </ActionButton>
                    <ActionButton
                        $danger
                        onClick={togglePasswordPrompt}
                    >
                        예약 취소
                    </ActionButton>
                </ActionButtonsWrapper>

                {showPasswordPrompt && (
                    <PasswordPromptWrapper>
                        <p>예약을 취소하려면 비밀번호를 입력하세요.</p>
                        <PasswordInput
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="예약 시 설정한 비밀번호"
                        />
                        <ActionButton
                            $danger
                            onClick={() => id && handleCancel(id)}
                            disabled={isCancel}
                        >
                            {isCancel ? "취소 중..." : "취소 확인"}
                        </ActionButton>
                        {cancelError && <ErrorMessage>{cancelError}</ErrorMessage>}
                    </PasswordPromptWrapper>
                )}
            </ContentWrapper>
        </ListPageLayout>
    );
};

export default ReservationDetailPage;