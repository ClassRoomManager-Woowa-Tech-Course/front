import styled from "styled-components";
import {Link} from "react-router-dom";

export const ContentWrapper = styled.div`
  margin-top: 32px;
  padding: 24px;
  background-color: #f9f9f9;
  border-radius: 8px;
  min-height: 300px;
`;

export const ContentText = styled.p`
    font-size: 16px;
    color: #333;
    line-height: 1.8;
    white-space: pre-wrap;
    text-align: justify;
`;

export const DescriptionWrapper = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 6px;
`;

export const ActionButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid #eee;
`;

// 기본 버튼 스타일
export const ActionButton = styled.button<{ $danger?: boolean; as?: typeof Link }>`
  padding: 10px 18px;
  font-size: 0.95rem;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none; // Link 태그일 경우를 대비
  display: inline-block;
  text-align: center;
  transition: all 0.2s ease;

  // $danger prop에 따른 조건부 스타일
  background-color: ${props => (props.$danger ? '#e53e3e' : '#3182ce')};
  color: white;

  &:hover {
    background-color: ${props => (props.$danger ? '#c53030' : '#2b6cb0')};
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const PasswordPromptWrapper = styled.div`
  margin-top: 20px;
  padding: 16px;
  background-color: #fefcbf; // 경고성 노란색 배경
  border: 1px solid #f6e05e;
  border-radius: 8px;

  p {
    margin: 0 0 10px 0;
    font-size: 0.9rem;
    font-weight: 600;
    color: #975a16;
  }
`;

export const PasswordInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #cbd5e0;
  border-radius: 6px;
  font-size: 1rem;
  margin-bottom: 10px;
  box-sizing: border-box; // 패딩이 너비에 포함되도록
`;

export const ErrorMessage = styled.p`
  color: #e53e3e; // 빨간색
  font-size: 0.9rem;
  margin-top: 10px;
`;