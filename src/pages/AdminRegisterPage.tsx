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
import {useAdminRegister} from "../hooks/useAdminRegister";

const AdminRegisterPage = () => {
    const {register: formRegister, handleSubmit, reset} = useForm<Admin>();
    const {register: registerAdmin, isLoading } = useAdminRegister();

    const onRegisterSubmit: SubmitHandler<Admin> = async (data) => {
        const success = await registerAdmin(data);
        if (success) {
            reset();
        }
    }

    return (
        <PageLayout>
            <PageHeader
                title="관리자 등록"
                description="강의실 시스템 관리자 등록 페이지입니다."
            />
            <StyledForm onSubmit = {handleSubmit(onRegisterSubmit)}>
                <h3>신규 관리자 정보 등록 및 권한 설정</h3>

                <FormGroup>
                    <FormLabel htmlFor="role">학생/교직원</FormLabel>
                    <StyledSelect
                        id="role"
                        {...formRegister('role', { required: true })}
                        disabled={isLoading}
                    >
                        <option value="">선택하세요</option>
                        <option value="STUDENT">학생</option>
                        <option value="STAFF">교직원</option>
                    </StyledSelect>
                </FormGroup>
                <FormRow>
                    <FormGroup>
                        <FormLabel htmlFor="name">성명</FormLabel>
                        <StyledInput
                            id="name"
                            type="text"
                            {...formRegister('name', { required: true })}
                            disabled={isLoading}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor="password">비밀번호</FormLabel>
                        <StyledInput
                            id="password"
                            type="text"
                            {...formRegister('password', { required: true })}
                            disabled={isLoading}
                        />
                    </FormGroup>
                </FormRow>
                <FormRow>
                    <FormGroup>
                        <FormLabel htmlFor="adminId">학번/교직원번호</FormLabel>
                        <StyledInput
                            id="adminId"
                            type="text"
                            {...formRegister('adminId', { required: true })}
                            disabled={isLoading}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor="contact">연락처</FormLabel>
                        <StyledInput
                            id="contact"
                            type="tel"
                            {...formRegister('contact', { required: true })}
                            disabled={isLoading}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor="authorization">접근 권한 설정</FormLabel>
                        <StyledSelect
                            id="authorization"
                            {...formRegister('authorization', { required: true })}
                            disabled={isLoading}
                        >
                            <option value="">선택하세요</option>
                            <option value="SUPER_ADMIN">전체 관리자</option>
                            <option value="ADMIN">관리자</option>
                            <option value="EDITOR">고장 처리 관리</option>
                            <option value="VIEWER">조회 가능</option>
                        </StyledSelect>
                    </FormGroup>
                </FormRow>
                <ButtonWrapper>
                    <StyledButton type="submit" disabled={isLoading}>등록하기</StyledButton>
                </ButtonWrapper>
            </StyledForm>
        </PageLayout>
    )
}
export default AdminRegisterPage;