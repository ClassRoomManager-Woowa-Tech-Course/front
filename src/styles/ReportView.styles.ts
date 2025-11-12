import styled from "styled-components";
import type {ReportResponse} from "@/types/ReportResponse";

export const ViewWrapper = styled.div<{ item: ReportResponse }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;
  background-color: white;
  border: 1px solid ${props => (props.item?.status === 'COMPLETED' ? '#888' : '#e63737')}; 
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 122, 255, 0.1); 
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    padding: 20px;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: #333;
`;

export const MetaInfo = styled.div`
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

export const ButtonSection = styled.div`
    display: flex;
    gap: 12px;
    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        gap: 10px;
    }
`;

export const ActionButton = styled.button`
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