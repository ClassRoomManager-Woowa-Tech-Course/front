import PageLayout from "@/layouts/PageLayout";
import PageHeader from "@/components/PageHeader";
import {
    ButtonWrapper,
    FormGroup,
    FormLabel,
    FormRow, StyledButton,
    StyledForm,
    StyledInput,
    StyledSelect
} from "@/styles/FormElements.styles";
import {useForm} from "react-hook-form";
import type {Admin} from "@/types/Admin";

const AdminRegisterPage = () => {
    const {register} = useForm<Admin>();
    return (
        <PageLayout>
            <PageHeader
                title="관리자 등록"
                description="강의실 시스템 관리자 등록 페이지입니다."
            />
            <StyledForm>
                <h3>신규 관리자 정보 등록 및 권한 설정</h3>

                <FormGroup>
                    <FormLabel htmlFor="userRole">학생/교직원</FormLabel>
                    <StyledSelect id="userRole" {...register('userRole', { required: true })}>
                        <option value="">선택하세요</option>
                        <option value="student">학생</option>
                        <option value="staff">교직원</option>
                    </StyledSelect>
                </FormGroup>
                <FormRow>
                    <FormGroup>
                        <FormLabel htmlFor="name">성명</FormLabel>
                        <StyledInput id="name" type="text" {...register('name', { required: true })}/>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor="password">비밀번호</FormLabel>
                        <StyledInput id="password" type="text" {...register('password', { required: true })}/>
                    </FormGroup>
                </FormRow>
                <FormRow>
                    <FormGroup>
                        <FormLabel htmlFor="userId">학번/교직원번호</FormLabel>
                        <StyledInput id="userId" type="text" {...register('userId', { required: true })} />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor="contact">연락처</FormLabel>
                        <StyledInput id="contact" type="tel" {...register('contact', { required: true })} />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor="Authorization">접근 권한 설정</FormLabel>
                        <StyledSelect id="Authorization" {...register('authorization', { required: true })}>
                            <option value="">선택하세요</option>
                            <option value="SUPER_ADMIN">전체 관리자</option>
                            <option value="ADMIN">관리자</option>
                            <option value="EDITOR">고장 처리 관리</option>
                            <option value="VIEWER">조회 가능</option>
                        </StyledSelect>
                    </FormGroup>
                </FormRow>
                <ButtonWrapper>
                    <StyledButton type="submit">등록하기</StyledButton>
                </ButtonWrapper>
            </StyledForm>
        </PageLayout>
    )
}
export default AdminRegisterPage;