import { useNavigate } from 'react-router-dom';
import buildingImage from '@/assets/icons/built.png';
import {ContentWrapper, PageContainer} from "@/styles/MainPage.styles";
import type {MenuItem} from "@/types/MenuItem";
import {Header, Subtitle, Title} from "@/styles/MainPage.styles";
import {
    ArrowIcon, BuildingImage,
    BuildingImageContainer,
    CardDescription,
    CardIcon,
    CardTitle, Footer, FooterText,
    MenuCard,
    MenuGrid
} from "../styles/MainPage.styles";

const MainPage = () => {
    const navigate = useNavigate();

    const menuItems: MenuItem[] = [
        {
            id: 1,
            title: '고장 신고',
            description: '기자재 고장 및 문제 신고',
            icon: '🚨',
            path: '/report',
            color: '#FF6B6B'
        },
        {
            id: 2,
            title: '강의실 예약',
            description: '강의실 예약 신청',
            icon: '📅',
            path: '/reservation',
            color: '#4ECDC4'
        },
        {
            id: 3,
            title: '가이드라인',
            description: '강의실 사용 안내',
            icon: '📖',
            path: '/guidelines',
            color: '#96CEB4'
        }
    ];

    const handleCardClick = (path: string): void => {
        navigate(path);
    };

    return (
        <PageContainer>
            <ContentWrapper>
                <Header>
                    <Title>강의실 관리 시스템</Title>
                    <Subtitle>Classroom Management System</Subtitle>
                </Header>

                <MenuGrid>
                    {menuItems.map((item) => (
                        <MenuCard
                            key={item.id}
                            onClick={() => handleCardClick(item.path)}
                            $color={item.color}
                        >
                            <CardIcon>{item.icon}</CardIcon>
                            <CardTitle>{item.title}</CardTitle>
                            <CardDescription>{item.description}</CardDescription>
                            <ArrowIcon $color={item.color}>→</ArrowIcon>
                        </MenuCard>
                    ))}
                </MenuGrid>
                <BuildingImageContainer>
                    <BuildingImage src={buildingImage} alt="Campus Building" />
                </BuildingImageContainer>
            </ContentWrapper>
            <Footer>
                <FooterText>© 2025 Classroom Management System</FooterText>
            </Footer>
        </PageContainer>
    );
};

export default MainPage;
