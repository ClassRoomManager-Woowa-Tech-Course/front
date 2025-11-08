import type {GuideLine} from "../types/GuideLine";
import React from "react";
import { useNavigate } from 'react-router-dom';
import { IoCalendarOutline, IoBusinessOutline } from 'react-icons/io5';
import {ActionButton, ButtonSection, InfoSection, MetaInfo, Title, ViewWrapper} from "../styles/GuideLineView.styles";
interface ViewProps {
    item: GuideLine;
}

const GuideLineView: React.FC<ViewProps> = ({item}) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/guideline/${item.id}`);
    };

    return (
        <ViewWrapper>
            <InfoSection>
                <Title>{item.title}</Title>
                <MetaInfo>
                    <IoCalendarOutline/>
                    <span>{item.date}</span>
                    <IoBusinessOutline/>
                    <span>{item.roomCode}</span>
                </MetaInfo>
            </InfoSection>
            <ButtonSection>
                <ActionButton onClick={handleNavigate}>
                    내용 확인하기
                </ActionButton>
            </ButtonSection>
        </ViewWrapper>
    );
};

export default GuideLineView;

