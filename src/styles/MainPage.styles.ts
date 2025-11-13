import styled from "styled-components";
import type {StyledProps} from "@/types/StyledProps";

export const PageContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    position: relative;
`;

export const ContentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
    flex: 1;
    z-index: 10;
`;

export const Header = styled.header`
    text-align: center;
    margin-bottom: 60px;
    animation: fadeInDown 0.8s ease-out;

    @keyframes fadeInDown {
        from {
            opacity: 0;
            transform: translateY(-30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

export const Title = styled.h1`
    font-size: 3rem;
    font-weight: 800;
    color: white;
    margin: 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

    @media (max-width: 768px) {
        font-size: 2rem;
    }

    @media (max-width: 480px) {
        font-size: 1.5rem;
    }
`;

export const Subtitle = styled.p`
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.9);
    margin-top: 10px;
    font-weight: 300;
    letter-spacing: 2px;

    @media (max-width: 768px) {
        font-size: 1rem;
    }

    @media (max-width: 480px) {
        font-size: 0.9rem;
    }
`;

export const MenuGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 24px;
    max-width: 1000px;
    width: 100%;
    margin-bottom: 40px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 16px;
    }
`;

export const MenuCard = styled.div<StyledProps>`
    background: white;
    border-radius: 16px;
    padding: 30px 24px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    animation: fadeInUp 0.8s ease-out;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: ${props => props.$color};
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s ease;
    }

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 16px 32px rgba(0, 0, 0, 0.15);

        &::before {
            transform: scaleX(1);
        }
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media (max-width: 768px) {
        padding: 24px 20px;
    }
`;

export const CardIcon = styled.div`
    font-size: 3rem;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;

    @media (max-width: 768px) {
        font-size: 2.5rem;
        height: 60px;
    }

    @media (max-width: 480px) {
        font-size: 2rem;
        height: 50px;
    }
`;

export const CardTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
    color: #2c3e50;
    margin: 0 0 8px 0;

    @media (max-width: 768px) {
        font-size: 1.3rem;
    }
`;

export const CardDescription = styled.p`
    font-size: 0.9rem;
    color: #7f8c8d;
    margin: 0 0 16px 0;
    line-height: 1.5;
`;

export const ArrowIcon = styled.div<StyledProps>`
    position: absolute;
    bottom: 20px;
    right: 30px;
    font-size: 1.5rem;
    color: ${props => props.$color};
    opacity: 0;
    transform: translateX(-10px);
    transition: all 0.3s ease;

    ${MenuCard}:hover & {
        opacity: 1;
        transform: translateX(0);
    }
`;

export const BuildingImageContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-top: auto;
    padding: 0 20px;
    box-sizing: border-box;
`;

export const BuildingImage = styled.img`
    width: 100%;
    max-width: 1400px;
    height: auto;
    object-fit: contain;
    //opacity: 0.8;
    filter: brightness(1.2);

    @media (max-width: 768px) {
        max-width: 100%;
    }
`;

export const Footer = styled.footer`
    text-align: center;
    padding: 20px;
    width: 100%;
    z-index: 10;
`;

export const FooterText = styled.p`
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
    margin: 0;
`;