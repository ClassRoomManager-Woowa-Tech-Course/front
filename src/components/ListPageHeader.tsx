import React from 'react';
import styled from 'styled-components';

interface ListPageHeaderProps {
    title: string;
    description: React.ReactNode;
}

const ListPageHeader: React.FC<ListPageHeaderProps> = ({ title, description }) => (
    <HeaderWrapper>
        <h1>{title}</h1>
        <p>{description}</p>
    </HeaderWrapper>
);

export default ListPageHeader;


const HeaderWrapper = styled.div`
    margin-bottom: 32px;
    color: black;
    text-align: left;
    
  h1 {
    margin: 0 0 8px 0;
    font-size: 28px;
    font-weight: 800;
  }
  
  p {
    margin: 0;
    font-size: 16px;
    color: #555;
  }
`;