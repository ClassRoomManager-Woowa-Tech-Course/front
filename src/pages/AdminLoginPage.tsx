import styled from 'styled-components';
import {type SubmitHandler, useForm} from 'react-hook-form';
import mascotImage from '@/assets/icons/mascot_admin.png';
import {useNavigate} from "react-router-dom";

interface AdminLoginInput {
    id: string;
    pw: string;
}

const AdminLoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<AdminLoginInput>();
    const navigate = useNavigate();
    const onLoginSubmit: SubmitHandler<AdminLoginInput> = (data) => {
        console.log("로그인 시도:", data);
        // TODO: 로그인 API 호출
        alert(`로그인 ID: ${data.id}`);
    };
    return (
        <PageWrapper>
            <StyledForm onSubmit={handleSubmit(onLoginSubmit)}>
                <MainFormWrapper>

                    {/* [신규] 2. ID/PW/에러를 세로로 묶는 그룹 */}
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

                    {/* [수정] 3. 로그인 버튼을 InputGroup 옆으로 이동 */}
                    <LoginButton type="submit">
                        로그인
                    </LoginButton>
                </MainFormWrapper>
                <NavigationButtonWrapper>
                    <StyledButton type="button" onClick={() => navigate('/admin/register')}>
                        관리자 등록
                    </StyledButton>
                    <StyledButton
                        type="button"
                        onClick={() => navigate('/admin/delete')}
                        className="delete"
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

const PageWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 40px;
    box-sizing: border-box;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 40px;
    }
`;

const Mascot = styled.img`
    transform: translateY(50px);
    width: 40%;
    @media (max-width: 768px) {
        width: 150px; /* 더 작게 만들 수도 있습니다. */
        right: 5%;
        bottom: 5%;
        transform: none;
    }
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    /* (수정) 폼 상단과 하단 버튼 그룹 사이의 간격 */
    gap: 24px;
    background-color: white;
    border-radius: 20px;
    padding: 48px 40px;
    width: 100%;
    max-width: 500px;
    z-index: 10;
    border: 4px solid #4DA3FF;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr; 
  align-items: center;
`;

const Label = styled.label`
  font-size: 20px;
  font-weight: 700;
  color: black;
  text-align: left;
`;

const Input = styled.input`
  background-color: #e9ecef;
  border: none;
  border-radius: 8px;
  padding: 14px 18px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  color: black;

  &::placeholder {
    color: #888;
  }
`;
const MainFormWrapper = styled.div`
    display: flex;
    flex-direction: row; /* 가로 배치 */
    align-items: flex-start; /* 상단 정렬 */
    gap: 16px; /* 입력 그룹과 로그인 버튼 사이 간격 */
`;

/* [신규] ID, PW, 에러 메시지를 세로로 묶는 Wrapper */
const InputGroup = styled.div`
    flex: 1; /* 남는 공간을 모두 차지 */
    display: flex;
    flex-direction: column;
    gap: 24px; /* ID, PW, 에러 사이 간격 */
`;
const LoginButton = styled.button`
    background-color: #007aff;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s;
    
    width: 100px; /* 로그인 버튼 너비 고정 */
    
    /* [핵심]
       Input 2개 + Gap 높이와 비슷하게 맞춤 
       (Input 2개 높이 약 100px + InputGroup gap 24px = 124px)
       ErrorMessage가 보일 때를 대비해 min-height 사용
    */
    min-height: 124px; 
    
    /* 세로 중앙 정렬 */
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #0056b3;
    }
`;

const NavigationButtonWrapper = styled.div`
    display: flex;
    gap: 12px;
    /* margin-top은 StyledForm의 gap이 처리하므로 삭제 */
`;

/* [수정] 기본 버튼 -> 하단 등록/삭제 버튼 전용 스타일 */
const StyledButton = styled.button`
    flex: 1;
    border: none;
    border-radius: 8px;
    padding: 12px 20px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s;

    /* (수정) 기본 스타일을 .secondary로 이동 */
    &.secondary {
        background-color: #6c757d;
        color: white;
        &:hover {
            background-color: #5a6268;
        }
    }

    &.delete.secondary {
        background-color: #dc3545;
        &:hover {
            background-color: #c82333;
        }
    }
`;

const ErrorMessage = styled.p`
  font-size: 14px;
  color: #e63737;
  text-align: center;
  margin: -10px 0 0 0;
`;