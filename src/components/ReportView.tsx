import type {Report} from "../types/Report";
import React from "react";
import {useNavigate} from "react-router-dom";
import {IoBusinessOutline, IoCalendarOutline} from "react-icons/io5";
import styled from "styled-components"; // (수정) 1. styled-components import

interface ViewProps {
    item: Report;
    onUpdateStatus: (id: number) => void;
}

const ReportView: React.FC<ViewProps> = ({item, onUpdateStatus}) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        // (수정) 2. item.id 사용 (타입에 id가 추가되었다고 가정)
        navigate(`/report/${item.id}`);
    };

    const handleComplete = () => {
        // 'pending' 상태일 때만 함수를 호출
        if (item.status === 'pending') {
            onUpdateStatus(item.id);
        }
    };

    return (
        <ViewWrapper item={item}>
            <InfoSection>
            <Title>{item.item} 고장 신고 ({item.status})</Title>
            <MetaInfo>
                <IoCalendarOutline/>
                <span>{item.date}</span>
                <IoBusinessOutline/>
                <span>{item.roomNumber}</span>
            </MetaInfo>
            </InfoSection>
            <ButtonSection>
                <ActionButton onClick={handleNavigate}>
                    내용 확인하기
                </ActionButton>
                <ActionButton onClick={handleComplete}
                              disabled={item.status === 'completed'}>
                    {item.status === 'completed' ? '처리 완료됨' : '수리 완료 처리'}
                </ActionButton>
            </ButtonSection>
        </ViewWrapper>
    );
};
export default ReportView;

const ViewWrapper = styled.div<{ item: Report }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;
  background-color: white;
  border: 1px solid ${props => (props.item?.status === 'completed' ? '#888' : '#e63737')}; 
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 122, 255, 0.1); 
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    padding: 20px;
  }
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: #333;
`;

const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  color: #555;

  svg {
    font-size: 16px;
    color: #555;
  }
`;

const ButtonSection = styled.div`
    display: flex;
    gap: 12px;
    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        gap: 10px;
    }
`;

const ActionButton = styled.button`
    background-color: #007aff;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s, opacity 0.2s;

    &:disabled {
        background-color: #aaa;
        color: #eee;
        cursor: not-allowed;
        opacity: 0.7;
    }
    &:hover {
        background-color: #0056b3;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;