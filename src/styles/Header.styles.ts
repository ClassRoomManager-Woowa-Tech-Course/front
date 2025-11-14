import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const NavContainer = styled.header`
    display: flex;
    align-items: center;
    height: 60px;
    background-color: #ffffff;
    border-bottom: 1px solid #e2e8f0;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    position: sticky;
    top: 0;
    z-index: 50;
    width: 100%;
    box-sizing: border-box;
    padding: 0 0.5rem;
`;

export const HeaderInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 2.5rem;
    box-sizing: border-box;
`;

export const LogoText = styled(Link)`
    font-size: 1.25rem;
    font-weight: 800;
    color: black;
    text-decoration: none;
    flex-shrink: 0;
    padding: 0 2rem;
`;

export const NavLinks = styled.nav`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const StyledLink = styled(NavLink)<{ $admin?: boolean }>`
    font-size: 0.95rem;
    font-weight: 600;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: all 0.2s ease-in-out;
    
    ${props =>
            props.$admin
                    ? `
                    background-color: #E53E3E; // 빨간색 배경
                    color: white;
                    &:hover {
                        background-color: #C53030; // 더 진한 빨간색
                    }
                    `
                    : `
                    color: #4A5568; // 기본 텍스트 색상
                    &:hover {
                      background-color: #EDF2F7; // [수정] 더 잘보이는 연한 회색
                      color: #2D3748;
                    }
        
                    &.active {
                      background-color: #3182ce; // 파란색 배경
                      color: white;
                      font-weight: 700;
                    }
      `}
`;

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const AdminButtonTrigger = styled.button`
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  border: none;
  
  background-color: #E53E3E;
  color: white;
  &:hover {
    background-color: #C53030;
  }
`;

export const DropdownMenu = styled.div<{ isOpen: boolean }>`
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  opacity: ${props => props.isOpen ? 1 : 0};
  
  position: absolute;
  top: 110%;
  right: 0;
  min-width: 160px;
  background-color: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08);
  z-index: 60;
  padding: 0.5rem 0;
  transition: opacity 0.1s ease-in-out, visibility 0.1s ease-in-out;
`;

export const DropdownLink = styled(Link)`
  display: block;
  width: 100%;
  padding: 0.6rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: #4A5568;
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    background-color: #F7FAFC;
    color: #2D3748;
  }
`;

export const DropdownButton = styled.button`
    display: block;
    width: 100%;
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
    font-weight: 500;
    color: #4A5568;
    text-decoration: none;
    box-sizing: border-box;
    background: none;
    border: none;
    
    &:focus {
        outline: none;
    }
    
    &:hover {
        background-color: #F7FAFC;
        color: #2D3748;
    }
`;