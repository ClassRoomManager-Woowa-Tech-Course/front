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
import {SubmitHandler, useForm} from "react-hook-form";
import type {Admin} from "@/types/Admin";
import {AdminManageData, deleteAdmin, suspendAdmin} from "@/api/AdminApi";

const AdminRegisterPage = () => {
    const {register, handleSubmit, reset} = useForm<AdminManageData>();

    const onDeleteSubmit: SubmitHandler<Admin> = async (data) => {
        const confirmMessage = data.active === "DELETE"
            ? `정말로 '${data.adminId}' 관리자를 삭제하시겠습니까?`
            : `정말로 '${data.adminId}' 관리자를 휴면 처리하시겠습니까?`;
        if (!window.confirm(confirmMessage)) {
            return;
        }
        try {
            if (data.active === "DELETE") {
                await deleteAdmin({
                    adminId: data.adminId,
                    name: data.name,
                    role: data.role,
                    contact: data.contact,
                });
                alert("관리자 삭제가 완료되었습니다.");
            } else if (data.active === "INACTIVE") {
                await suspendAdmin({
                    adminId: data.adminId,
                    name: data.name,
                    role: data.role,
                    contact: data.contact,
                });
                alert("관리자 휴면 처리가 완료되었습니다.");
            }
            reset();
        } catch (error: any) {
            console.error("작업 실패:", error);
            alert(error.message || "작업에 실패했습니다.");
        }
    }
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
                    <StyledButton type="submit">수정하기</StyledButton>
                </ButtonWrapper>
            </StyledForm>
        </PageLayout>
    )
}
export default AdminRegisterPage;