import type {GuideLine} from "../types/GuideLine";
import React from "react";
import { useNavigate } from 'react-router-dom';
import { IoCalendarOutline, IoBusinessOutline } from 'react-icons/io5';
import styled from "styled-components";
interface ViewProps {
    item: GuideLine;
}

const GuideLineView: React.FC<ViewProps> = ({item}) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/guideline/${item.id}`);
    };

    return (
        <ViewWrapper>
            <InfoSection>
                <Title>{item.title}</Title>
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
            </ButtonSection>
        </ViewWrapper>
    );
};

export default GuideLineView;

const ViewWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;
  background-color: white;
  
  border: 1px solid #007aff; 
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
    color: #007aff;
  }
`;

const ButtonSection = styled.div`
  @media (max-width: 768px) {
    width: 100%;
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
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;