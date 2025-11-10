import PageLayout from "@/layouts/PageLayout";
import PageHeader from "@/components/PageHeader";
import {
    ButtonWrapper,
    FormGroup,
    FormLabel,
    StyledButton,
    StyledForm,
    StyledInput,
    StyledTextArea
} from "@/styles/FormElements.styles";
import {useForm} from "react-hook-form";
import type {GuideLine} from "@/types/GuideLine";
import {registerGuideLine} from "../api/GuideLineApi";

const GuideLineRegisterPage = () => {
    const {register, handleSubmit, reset} = useForm<GuideLine>();
    const onSubmit: SubmitHandler<GuideLine> = async (data) => {
        try {
            await registerGuideLine(data);
            alert('가이드라인이 성공적으로 등록되었습니다.');
            reset();
        } catch (error) {
            console.error('가이드라인 등록 실패:', error);
            alert('등록 중 오류가 발생했습니다.');
        }
    };
    return (
        <PageLayout>
            <PageHeader
                title="강의실 사용 가이드라인 등록/수정"
                description="강의실 기자재 사용 가이드라인 등록 페이지입니다."
            />
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <h3>가이드 라인 작성</h3>
                <FormGroup>
                    <FormLabel htmlFor="roomCode">강의실 호수</FormLabel>
                    <StyledInput id="roomCode" type="text" {...register('roomCode', { required: true })}/>
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="content">가이드라인</FormLabel>
                    <StyledTextArea id="content" {...register('content', { required: true })}/>
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="file">첨부 파일</FormLabel>
                    <StyledInput id="file" type="file" multiple {...register('files')} />
                </FormGroup>
                <ButtonWrapper>
                    <StyledButton>등록하기</StyledButton>
                </ButtonWrapper>
            </StyledForm>
        </PageLayout>
    )
}

export default GuideLineRegisterPage;
