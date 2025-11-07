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

const ReservationPage = () => {
    const { register, handleSubmit } = useForm<Reservation>();

    const onSubmit: SubmitHandler<Reservation> = (data) => {
        console.log(data);
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
                        <FormLabel htmlFor="userRole">학생/교직원</FormLabel>
                        <StyledSelect id="userRole" {...register('userRole', { required: true })}>
                            <option value="">선택하세요</option>
                            <option value="student">학생</option>
                            <option value="staff">교직원</option>
                        </StyledSelect>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor="userId">학번/교직원번호</FormLabel>
                        <StyledInput id="userId" type="text" {...register('userId', { required: true })} />
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
                    <FormLabel htmlFor="roomNumber">강의실 호수</FormLabel>
                    <StyledInput id="roomNumber" type="text" {...register('roomNumber', { required: true })}/>
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="purpose">고장 상세 기재</FormLabel>
                    <StyledTextArea id="purpose" {...register('purpose', { required: true })} />
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="file">첨부 파일</FormLabel>
                    <StyledInput id="file" type="file" multiple {...register('files')} />
                </FormGroup>
                <ButtonWrapper>
                    <StyledButton type="submit">예약하기</StyledButton>
                </ButtonWrapper>
            </StyledForm>
        </PageLayout>
    )
}
export default ReservationPage;