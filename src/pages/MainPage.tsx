import styled from 'styled-components';
import MenuButton from '@/components/MenuButton';

import sirenIcon from '@/assets/icons/siren.png';
import compassIcon from '@/assets/icons/compass.png';
import calendarIcon from '@/assets/icons/calendar.png';
import searchIcon from '@/assets/icons/search.png';
import mascotImage from '@/assets/icons/mascot_welcome.png'

const MainPage = () => {
    return (
        <PageContainer>
            <MenuGrid>
                <MenuButton
                    icon={sirenIcon}
                    text="고장 신고하기"
                    to="/report"
                />
                <MenuButton
                    icon={compassIcon}
                    text="강의실 가이드라인 조회"
                    to="/guidelines"
                />
                <MenuButton
                    icon={calendarIcon}
                    text="강의실 예약하기"
                    to="/reservation"
                />
                <MenuButton
                    icon={searchIcon}
                    text="강의실 예약 현황 조회"
                    to="/status"
                />
            </MenuGrid>
            <Mascot src={mascotImage} alt="Mascot" />
        </PageContainer>

    );

};

export default MainPage;

const PageContainer = styled.div`
    width: 80vw;
    height: 40vw;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative; // 마스코트 배치를 위해
`;

const MenuGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr; // 2열
    grid-template-rows: 1fr 1fr;    // 2행
    gap: 24px; // 버튼 사이 간격
    width: 70%; // 그리드 전체 너비 (조절 필요)
    height: 90%;
    @media (max-width: 768px) { // 모바일 대응 (선택 사항)
        width: 90%;
        max-width: 400px;
        gap: 16px;
    }
`;

const Mascot = styled.img`
    position: relative;
    left: 5%; // 위치 조절
    top: 30%;
    width: 30%;
  @media (max-width: 768px) {
        width: 150px; /* 더 작게 만들 수도 있습니다. */
        right: 5%;
        bottom: 5%;  
  }
`;