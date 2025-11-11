import { type SubmitHandler, useForm} from "react-hook-form";
import type {Reservation} from "@/types/Reservation";
import PageLayout from "@/layouts/PageLayout";
import PageHeader from "@/components/PageHeader";
import {
    ButtonWrapper,
    FormGroup,
    FormLabel,
    FormRow, StyledButton,
    StyledForm,
    StyledInput,
    StyledSelect,
    StyledTextArea
} from "@/styles/FormElements.styles";
import {registerReservation} from "../api/ReservationApi";
import {useClassrooms} from "../hooks/useClassrooms";

const ReservationPage = () => {
    const { register, handleSubmit, reset } = useForm<Reservation>();
    const { classrooms, isLoading, fetchError } = useClassrooms();
    const onSubmit: SubmitHandler<Reservation> = async (data) => {
        try {
            await registerReservation(data);

            alert("예약 등록에 성공했습니다.")

            reset();
        } catch (error: any) {
            console.error("예약 등록 실패: ", error);
            alert(error.message || "예약 등록에 실패했습니다.")
        }
    }

    return (
        <PageLayout>
            <PageHeader
                title="강의실 예약하기"
                description="강의실 사용 신청 페이지입니다."
            />
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <h3>신청서 작성</h3>
                <FormRow>
                    <FormGroup>
                        <FormLabel htmlFor="role">학생/교직원</FormLabel>
                        <StyledSelect id="role" {...register('role', { required: true })}>
                            <option value="">선택하세요</option>
                            <option value="STUDENT">학생</option>
                            <option value="STAFF">교직원</option>
                        </StyledSelect>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor="memberId">학번/교직원번호</FormLabel>
                        <StyledInput id="memberId" type="text" {...register('memberId', { required: true })} />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor="contact">연락처</FormLabel>
                        <StyledInput id="contact" type="tel" {...register('contact', { required: true })} />
                    </FormGroup>
                </FormRow>
                <FormRow>
                    <FormGroup>
                        <FormLabel htmlFor="date">예약 날짜</FormLabel>
                        <StyledInput
                            id="date"
                            type="date"
                            {...register('date', { required: true })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor="startTime">시작 시간</FormLabel>
                        <StyledInput
                            id="startTime"
                            type="time"
                            {...register('startTime', { required: true })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor="endTime">종료 시간</FormLabel>
                        <StyledInput
                            id="endTime"
                            type="time"
                            {...register('endTime', { required: true })}
                        />
                    </FormGroup>
                </FormRow>
                <FormGroup>
                    <FormLabel htmlFor="roomCode">강의실 호수</FormLabel>
                    <StyledSelect id="roomCode" {...register('roomCode', { required: true })} disabled={isLoading || !!fetchError}>
                        <option value="">
                            {isLoading ? '강의실 불러오는 중...' : (fetchError ? '오류 발생' : '강의실을 선택하세요')}
                        </option>
                        {!isLoading && !fetchError && classrooms.map((room) => (
                            <option key={room.roomCode} value={room.roomCode}>
                                {room.roomCode}
                            </option>
                        ))}
                    </StyledSelect>
                    {fetchError && <div className="text-red-600 text-xs mt-1.5">{fetchError}</div>}
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="title">제목</FormLabel>
                    <StyledInput id="title" type="text" {...register('title', { required: true })}/>
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="purpose">사용 목적</FormLabel>
                    <StyledTextArea id="purpose" {...register('purpose', { required: true })} />
                </FormGroup>
                <ButtonWrapper>
                    <StyledButton type="submit">예약하기</StyledButton>
                </ButtonWrapper>
            </StyledForm>
        </PageLayout>
    )
}
export default ReservationPage;
