import PageLayout from "@/layouts/PageLayout";
import {
    ButtonWrapper,
    FormGroup,
    FormLabel,
    FormRow, StyledButton,
    StyledForm,
    StyledInput,
    StyledSelect
} from "@/styles/FormElements.styles";
import {type SubmitHandler, useForm} from "react-hook-form";
import type {Admin} from "@/types/Admin";
import PageHeader from "@/layouts/header/PageHeader";
import {useAdminDelete} from "../hooks/useAdminDelete";

const AdminRegisterPage = () => {
    const {register, handleSubmit, reset} = useForm<Admin>();
    const { handleAdminAction, isLoading } = useAdminDelete();
    const onDeleteSubmit: SubmitHandler<Admin> = async (data) => {
        const success = await handleAdminAction(data);
        if (success) {
            reset();
        }
    };

    return (
        <PageLayout>
            <PageHeader
                title="관리자 삭제/휴면"
                description="강의실 시스템 관리자 삭제 및 휴면 계정 관리 페이지입니다."
            />
            <StyledForm onSubmit={handleSubmit(onDeleteSubmit)}>
                <h3>신규 관리자 삭제/휴면 사유 작성</h3>

                <FormGroup>
                    <FormLabel htmlFor="role">학생/교직원</FormLabel>
                    <StyledSelect id="role" {...register('role', { required: true })}>
                        <option value="">선택하세요</option>
                        <option value="STUDENT">학생</option>
                        <option value="STAFF">교직원</option>
                    </StyledSelect>
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="name">성명</FormLabel>
                    <StyledInput id="name" type="text" {...register('name', { required: true })}/>
                </FormGroup>
                <FormRow>
                    <FormGroup>
                        <FormLabel htmlFor="adminId">학번/교직원번호</FormLabel>
                        <StyledInput id="adminId" type="text" {...register('adminId', { required: true })} />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor="contact">연락처</FormLabel>
                        <StyledInput id="contact" type="tel" {...register('contact', { required: true })} />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor="active">삭제/휴면</FormLabel>
                        <StyledSelect id="active" {...register('active', { required: true })}>
                            <option value="">선택하세요</option>
                            <option value="DELETE">삭제</option>
                            <option value="INACTIVE">휴면</option>
                        </StyledSelect>
                    </FormGroup>
                </FormRow>
                <ButtonWrapper>
                    <StyledButton type="submit" disabled={isLoading}>수정하기</StyledButton>
                </ButtonWrapper>
            </StyledForm>
        </PageLayout>
    );
};
export default AdminRegisterPage;