import React from "react";
import styled from "styled-components";
import GuideLineView from "@/components/GuideLineView";
import type {GuideLineResponse} from "@/types/GuideLineResponse";

interface ListProps {
    items: GuideLineResponse[];
}

const GuideLines: React.FC<ListProps> = ({ items }) => {
    return (
        <ListWrapper>
            {items.map(item => (
                <GuideLineView key={item.guideLineId} item={item} />
            ))}
        </ListWrapper>
    )
}

export default GuideLines;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px; // 카드 사이의 간격
  margin-top: 24px;
`;