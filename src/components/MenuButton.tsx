import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface MenuButtonProps {
    icon: string;
    text: string;
    to: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({icon, text, to}) => {
    return <StyledLink to={to}>
        <img src={icon} alt={text} />
        <span>{text}</span>
    </StyledLink>
}

export default MenuButton;

const StyledLink = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
      
    background-color: white;
    border-radius: 20px;
    padding: 20px;
    text-decoration: none; // 링크 밑줄 제거
    color: black;
    font-weight: bold;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;
    
    border: 3px solid #00A0BA;
    
    &:hover {
        transform: translateY(-5px); // 마우스 올리면 살짝 위로
    }

    & > img {
        width: 53%; // 아이콘 크기
        height: auto;
        object-fit: contain;
    }
`;