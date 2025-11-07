import styled from "styled-components";

export const PageWrapper = styled.div`
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

export const Mascot = styled.img`
    transform: translateY(50px);
    width: 40%;
    @media (max-width: 768px) {
        width: 150px; /* 더 작게 만들 수도 있습니다. */
        right: 5%;
        bottom: 5%;
        transform: none;
    }
`;

export const StyledForm = styled.form`
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

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr; 
  align-items: center;
`;

export const Label = styled.label`
  font-size: 20px;
  font-weight: 700;
  color: black;
  text-align: left;
`;

export const Input = styled.input`
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
export const MainFormWrapper = styled.div`
    display: flex;
    flex-direction: row; /* 가로 배치 */
    align-items: flex-start; /* 상단 정렬 */
    gap: 16px; /* 입력 그룹과 로그인 버튼 사이 간격 */
`;

/* [신규] ID, PW, 에러 메시지를 세로로 묶는 Wrapper */
export const InputGroup = styled.div`
    flex: 1; /* 남는 공간을 모두 차지 */
    display: flex;
    flex-direction: column;
    gap: 24px; /* ID, PW, 에러 사이 간격 */
`;
export const LoginButton = styled.button`
    background-color: #007aff;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s;
    
    width: 100px;
    
    min-height: 124px; 
    
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #0056b3;
    }
`;

export const NavigationButtonWrapper = styled.div`
    display: flex;
    gap: 12px;
`;

export const StyledButton = styled.button`
    flex: 1;
    border: none;
    border-radius: 8px;
    padding: 12px 20px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s;

    &.secondary {
        background-color: #DCDDE2E6;
        color: white;

        &:hover {
            background-color: #5a6268;
        }
    }
`;

export const ErrorMessage = styled.p`
  font-size: 14px;
  color: #e63737;
  text-align: center;
  margin: -10px 0 0 0;
`;