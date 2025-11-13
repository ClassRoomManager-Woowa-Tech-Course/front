import {Link, useNavigate, useParams} from "react-router-dom";
import ListPageLayout from "@/layouts/ListPageLayout";
import ListPageHeader from "@/layouts/header/ListPageHeader";
import {IoBusinessOutline, IoCalendarOutline} from "react-icons/io5";
import {
    ActionButtonsWrapper,
    ContentText,
    ContentWrapper,
    DescriptionWrapper, PasswordInput, PasswordPromptWrapper, ErrorMessage, ActionButton
} from "@/styles/DetailPage.styles";
import {useEffect, useState} from "react";
import type {ReservationResponse} from "@/types/ReservationResponse";
import {cancelReservation, getReservationById} from "@/api/ReservationApi";


const ReservationDetailPage = () => {
    const {id} = useParams<{id: string}>();
    const navigate = useNavigate();
    const [item, setItem] = useState<ReservationResponse | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
    const [password, setPassword] = useState("");
    const [isCanceling, setIsCanceling] = useState(false);
    const [cancelError, setCancelError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;
        const fetchReservation = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const data = await getReservationById(id);
                setItem(data);
            } catch (err) {
                console.error("Failed to fetch reservation detail:", err);
                setError("예약 정보를 불러오는 데 실패했습니다.");
            } finally {
                setIsLoading(false);
            }
        };
        fetchReservation();
    }, [id]);

    const handleDeleteConfirm = async () => {
        if (!id) return;
        if (!password) {
            setCancelError("비밀번호를 입력하세요.");
            return;
        }

        setIsCanceling(true);
        setCancelError(null);

        try {
            await cancelReservation(id, password);
            alert("예약이 성공적으로 취소되었습니다.");
            navigate("/reservations");
        } catch (err: any) {
            console.error("Failed to cancel reservation:", err);
            setCancelError(err.message || "예약 취소에 실패했습니다.");
        } finally {
            setIsCanceling(false);
        }
    };
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
                    description={error || "예약 정보를 찾을 수 없습니다."}
                />
            </ListPageLayout>
        )
    }

    return (
        <ListPageLayout>
            <ListPageHeader
                title={`"${item.title}" 예약`}
                description={
                    <DescriptionWrapper>
                        <IoCalendarOutline/>
                        <span>{`날짜: ${item.date}`}</span>
                        <span>{`시간: ${item.startTime} ~ ${item.endTime}`}</span>
                        <IoBusinessOutline/>
                        <span>{`강의실: ${item.roomCode}`}</span>
                        <span>{`예약자: ${item.memberName}`}</span>
                    </DescriptionWrapper>
                }
            />
            <ContentWrapper>
                <ContentText>
                    {item.title}
                </ContentText>
                <ActionButtonsWrapper>
                    <ActionButton
                        as={Link}
                        to={`/reservations/edit/${item.reservationId}`}
                    >
                        예약 수정
                    </ActionButton>
                    <ActionButton
                        $danger
                        onClick={() => setShowPasswordPrompt(!showPasswordPrompt)}
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
                            onClick={handleDeleteConfirm}
                            disabled={isCanceling}
                        >
                            {isCanceling ? "취소 중..." : "취소 확인"}
                        </ActionButton>
                        {cancelError && <ErrorMessage>{cancelError}</ErrorMessage>}
                    </PasswordPromptWrapper>
                )}
            </ContentWrapper>
        </ListPageLayout>
    )
}
export default ReservationDetailPage;