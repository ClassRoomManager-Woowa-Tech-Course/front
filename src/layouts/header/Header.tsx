import { NavContainer, LogoText, NavLinks, StyledLink } from '@/styles/Header.styles';
import {
    AdminButtonTrigger,
    DropdownButton,
    DropdownContainer,
    DropdownLink,
    DropdownMenu
} from "@/styles/Header.styles";
import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const [isAdmin, setIsAdmin] = useState(() => {
        return !!localStorage.getItem('token');
    });
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAdmin(false);
        setIsOpen(false);
        navigate('/');
    };
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [dropdownRef]);
    return (
        <NavContainer>
            <LogoText to="/">강의실 관리 시스템</LogoText>
            <NavLinks>
                <StyledLink to="/report">고장 신고</StyledLink>
                <StyledLink to="/guidelines">가이드라인</StyledLink>
                <StyledLink to="/reservation">예약하기</StyledLink>
                <StyledLink to="/reservations">예약 현황</StyledLink>
                <DropdownContainer ref={dropdownRef}>
                    <AdminButtonTrigger
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        관리자
                    </AdminButtonTrigger>
                    <DropdownMenu isOpen={isOpen}>
                        {isAdmin ? (
                            <>
                                <DropdownLink to="/admin/register" onClick={() => setIsOpen(false)}>
                                    관리자 등록
                                </DropdownLink>
                                <DropdownLink to="/admin/delete" onClick={() => setIsOpen(false)}>
                                    관리자 삭제
                                </DropdownLink>
                                <DropdownLink to="/reports" onClick={() => setIsOpen(false)}>
                                    고장 신고 목록
                                </DropdownLink>
                                <DropdownLink to="/guidelines/register" onClick={() => setIsOpen(false)}>
                                    가이드라인 등록
                                </DropdownLink>
                                <DropdownButton onClick={handleLogout}>
                                    로그아웃
                                </DropdownButton>
                            </>
                        ) : (
                            <DropdownLink to="/admin">
                                관리자 로그인
                            </DropdownLink>
                        )}
                    </DropdownMenu>
                </DropdownContainer>
            </NavLinks>
        </NavContainer>
    );
};

export default Header;