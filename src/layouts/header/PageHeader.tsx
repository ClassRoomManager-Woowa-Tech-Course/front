import React from 'react';
import styled from 'styled-components';

interface PageHeaderProps {
    title: string;
    description: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => (
    <HeaderWrapper>
        <h2>{title}</h2>
        <p>{description}</p>
    </HeaderWrapper>
);

export default PageHeader;

const HeaderWrapper = styled.div`
    background-color: white;
    border-radius: 20px;
    padding: 24px;
    margin-bottom: 24px; // 폼 컨테이너와의 간격
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    color: black;
    text-align: left;
    border: 4px solid #4DA3FF;
    
  h2 {
    margin: 0 0 8px 0;
    font-size: 24px;
  }
  p {
    margin: 0;
    font-size: 16px;
    color: #555;
  }
`;