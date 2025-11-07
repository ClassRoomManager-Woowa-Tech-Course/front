import type {Report} from "../types/Report";
import React from "react";
import {useNavigate} from "react-router-dom";
import {IoBusinessOutline, IoCalendarOutline} from "react-icons/io5";
import {ActionButton, ButtonSection, InfoSection, MetaInfo, Title, ViewWrapper} from "../styles/ReportView.styles";

interface ViewProps {
    item: Report;
    onUpdateStatus: (id: number) => void;
}

const ReportView: React.FC<ViewProps> = ({item, onUpdateStatus}) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        // (수정) 2. item.id 사용 (타입에 id가 추가되었다고 가정)
        navigate(`/report/${item.id}`);
    };

    const handleComplete = () => {
        // 'pending' 상태일 때만 함수를 호출
        if (item.status === 'pending') {
            onUpdateStatus(item.id);
        }
    };

    return (
        <ViewWrapper item={item}>
            <InfoSection>
            <Title>{item.item} 고장 신고 ({item.status})</Title>
            <MetaInfo>
                <IoCalendarOutline/>
                <span>{item.date}</span>
                <IoBusinessOutline/>
                <span>{item.roomNumber}</span>
            </MetaInfo>
            </InfoSection>
            <ButtonSection>
                <ActionButton onClick={handleNavigate}>
                    내용 확인하기
                </ActionButton>
                <ActionButton onClick={handleComplete}
                              disabled={item.status === 'completed'}>
                    {item.status === 'completed' ? '처리 완료됨' : '수리 완료 처리'}
                </ActionButton>
            </ButtonSection>
        </ViewWrapper>
    );
};

export default ReportView;
