import PageLayout from "@/layouts/PageLayout";
import {
    ButtonWrapper,
    FormGroup,
    FormLabel,
    StyledButton,
    StyledForm,
    StyledInput, StyledSelect,
    StyledTextArea
} from "@/styles/FormElements.styles";
import {type SubmitHandler, useForm} from "react-hook-form";
import type {GuideLine} from "@/types/GuideLine";
import {registerGuideLine} from "@/api/GuideLineApi";
import {useClassrooms} from "@/hooks/useClassrooms";
import PageHeader from "@/layouts/header/PageHeader";

const GuideLineRegisterPage = () => {
    const {register, handleSubmit, reset} = useForm<GuideLine>();
    const { classrooms, isLoading, fetchError } = useClassrooms();

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
