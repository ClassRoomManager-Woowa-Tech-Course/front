import type {GuideLine} from "@/types/GuideLine";
import React from "react";
import styled from "styled-components";
import GuideLineView from "@/components/GuideLineView";

interface ListProps {
    items: GuideLine[];
}

const GuideLines: React.FC<ListProps> = ({ items }) => {
    return (
        <ListWrapper>
            {items.map(item => (
                <GuideLineView key={item.id} item={item} />
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