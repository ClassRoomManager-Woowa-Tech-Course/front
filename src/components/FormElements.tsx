import styled from 'styled-components';

export const FormLabel = styled.label`
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 8px;
    display: block;
    color: black;
    text-align: left;
`;

export const StyledInput = styled.input`
    background-color: #f0f2f5;
    border: none;
    border-radius: 8px;
    padding: 12px 16px;
    font-size: 16px;
    width: 100%;
    box-sizing: border-box;
    color: black;
`;

export const StyledSelect = styled.select`
    background-color: #f0f2f5;
    border: none;
    border-radius: 8px;
    padding: 12px 16px;
    font-size: 16px;
    width: 100%;
    box-sizing: border-box;
    appearance: none;
    color: black;

    background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="%23888"><path fill-rule="evenodd" d="M10 13.293l-4.293-4.293a1 1 0 0 1 1.414-1.414L10 10.466l2.879-2.879a1 1 0 1 1 1.414 1.414L10 13.293z" clip-rule="evenodd"/></svg>');
    background-repeat: no-repeat;
    background-position: right 16px center;
    background-size: 40px 40px;
`;

export const StyledTextArea = styled.textarea`
    background-color: #f0f2f5;
    border: none;
    border-radius: 8px;
    padding: 12px 16px;
    font-size: 16px;
    width: 100%;
    min-height: 150px;
    box-sizing: border-box;
    resize: vertical;
    color: black;
`;

export const StyledButton = styled.button`
    background-color: #3B42F0;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 14px 24px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s;
    float: right; // 오른쪽 정렬
    &:hover {
        background-color: #2a2fbd;
    }
    
    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;

export const StyledForm = styled.form`
    background-color: #FFFFFF;
    padding: 24px;
    border-radius: 20px;
    border: 4px solid #4DA3FF;
    h3 {
        margin-bottom: 24px;
    }
`

export const FormGroup = styled.div`
    margin-bottom: 20px;
`;

export const FormRow = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 16px;
    
    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 24px;
`