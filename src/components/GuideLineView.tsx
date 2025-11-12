import React from "react";
import { useNavigate } from 'react-router-dom';
import { IoCalendarOutline, IoBusinessOutline } from 'react-icons/io5';
import {ActionButton, ButtonSection, InfoSection, MetaInfo, Title, ViewWrapper} from "../styles/GuideLineView.styles";
import type {GuideLineResponse} from "@/types/GuideLineResponse";
interface ViewProps {
    item: GuideLineResponse;
}

const GuideLineView: React.FC<ViewProps> = ({item}) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/guidelines/${item.guideLineId}`);
    };

    return (
        <ViewWrapper>
            <InfoSection>
                <Title>{item.roomCode}호 기자재 사용 가이드라인</Title>
                <MetaInfo>
                    <IoCalendarOutline/>
                    <span>{item.date}</span>
                    <IoBusinessOutline/>
                    <span>{item.roomCode}호</span>
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

