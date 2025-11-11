import MenuButton from '@/components/MenuButton';

import sirenIcon from '@/assets/icons/siren.png';
import compassIcon from '@/assets/icons/compass.png';
import calendarIcon from '@/assets/icons/calendar.png';
import searchIcon from '@/assets/icons/search.png';
import mascotImage from '@/assets/icons/mascot_welcome.png'
import { MenuGrid, PageContainer } from "@/styles/MainPage.styles";
import {Mascot} from "../styles/MainPage.styles";

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
                    to="/reservations"
                />
            </MenuGrid>
            <Mascot src={mascotImage} alt="Mascot" />
        </PageContainer>

    );

};

export default MainPage;
