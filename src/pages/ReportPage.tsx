import {type SubmitHandler, useForm} from 'react-hook-form';
import PageLayout from "@/layouts/PageLayout";
import PageHeader from "@/components/PageHeader";
import type { Report } from "@/types/Report"
import {
    FormGroup, FormLabel, FormRow, ButtonWrapper,
    StyledInput, StyledSelect, StyledTextArea, StyledButton, StyledForm
} from '@/styles/FormElements.styles';
import {registerReport} from "../api/ReportApi";

const ReportPage = () => {
    const { register, handleSubmit, reset } = useForm<Report>();

    const onSubmit: SubmitHandler<Report> = async (data) => {
        try {
            await registerReport(data);
            alert('고장 신고가 성공적으로 등록되었습니다.')
            reset();
        } catch (error) {
            console.error('고장 신고 등록 실패:', error);
            alert('등록 중 오류가 발생했습니다.');
        }
    };

    return (
        <PageLayout>
            <PageHeader
                title="고장 신고하기"
                description="수업중 있었던 불편 사항을 기재해주세요."
            />
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <h3>신고 내용 입력</h3>

                <FormGroup>
                    <FormLabel htmlFor="item">고장 물품</FormLabel>
                    <StyledSelect id="item" {...register('item', { required: true })}>
                        <option value="">선택하세요</option>
                        <option value="PROJECTOR">빔프로젝터</option>
                        <option value="PC">컴퓨터</option>
                        <option value="SPEAKER">스피커</option>
                        <option value="MICROPHONE">마이크</option>
                    </StyledSelect>
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="roomCode">강의실 호수</FormLabel>
                    <StyledInput id="roomCode" type="text" {...register('roomCode', { required: true })}/>
                </FormGroup>

                <FormRow style={{ gridTemplateColumns: '1fr 2fr 2fr' }}>
                    <FormGroup>
                        <FormLabel htmlFor="userRole">학생/교직원</FormLabel>
                        <StyledSelect id="userRole" {...register('userRole', { required: true })}>
                            <option value="">선택하세요</option>
                            <option value="STUDENT">학생</option>
                            <option value="STAFF">교직원</option>
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

                <FormGroup>
                    <FormLabel htmlFor="content">고장 상세 기재</FormLabel>
                    <StyledTextArea id="content" {...register('content', { required: true })} />
                </FormGroup>

                <FormGroup>
                    <FormLabel htmlFor="file">첨부 파일</FormLabel>
                    <StyledInput id="file" type="file" multiple {...register('files')}/>
                </FormGroup>
                <ButtonWrapper>
                    <StyledButton type="submit">신고하기</StyledButton>
                </ButtonWrapper>
            </StyledForm>
        </PageLayout>
    )
}

export default ReportPage;
