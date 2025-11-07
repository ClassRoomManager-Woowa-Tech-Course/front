import {type SubmitHandler, useForm} from 'react-hook-form';
import mascotImage from '@/assets/icons/mascot_admin.png';
import {useNavigate} from "react-router-dom";
import {
    ErrorMessage,
    FormRow,
    Input,
    InputGroup,
    Label, LoginButton,
    MainFormWrapper, Mascot, NavigationButtonWrapper,
    PageWrapper, StyledButton,
    StyledForm
} from "../styles/AdminLoginPage.styles";

interface AdminLoginInput {
    id: string;
    pw: string;
}

const AdminLoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<AdminLoginInput>();
    const navigate = useNavigate();
    const onLoginSubmit: SubmitHandler<AdminLoginInput> = (data) => {
        console.log("로그인 시도:", data);
        alert(`로그인 ID: ${data.id}`);
    };
    return (
        <PageWrapper>
            <StyledForm onSubmit={handleSubmit(onLoginSubmit)}>
                <MainFormWrapper>
                    <InputGroup>
                        <FormRow>
                            <Label htmlFor="id">ID</Label>
                            <Input
                                id="id"
                                {...register('id', { required: true })}
                                placeholder="ID를 입력하세요"
                            />
                        </FormRow>

                        <FormRow>
                            <Label htmlFor="pw">PW</Label>
                            <Input
                                id="pw"
                                type="password"
                                {...register('pw', { required: true })}
                                placeholder="비밀번호를 입력하세요"
                            />
                        </FormRow>

                        {(errors.id || errors.pw) && (
                            <ErrorMessage>ID와 PW를 모두 입력해야 합니다.</ErrorMessage>
                        )}
                    </InputGroup>
                    <LoginButton type="submit">
                        로그인
                    </LoginButton>
                </MainFormWrapper>
                <NavigationButtonWrapper>
                    <StyledButton className="secondary" type="button" onClick={() => navigate('/admin/register')}>
                        관리자 등록
                    </StyledButton>
                    <StyledButton
                        type="button"
                        onClick={() => navigate('/admin/delete')}
                        className="secondary"
                    >
                        관리자 휴면/삭제
                    </StyledButton>
                </NavigationButtonWrapper>
            </StyledForm>
            <Mascot src={mascotImage} alt="Mascot" />
        </PageWrapper>
    );
};

export default AdminLoginPage;