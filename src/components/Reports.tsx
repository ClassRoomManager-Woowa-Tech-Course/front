import styled from "styled-components";
import ReportView from "@/components/ReportView";
import type {ReportResponse} from "@/types/ReportResponse";

interface ListProps {
    items: ReportResponse[];
    onUpdateStatus: (id: number) => void;
}

const Reports = ({ items, onUpdateStatus }: ListProps) => {
    return (
        <ListWrapper>
            {items.map(item => (
                <ReportView key={item.id} item={item} onUpdateStatus={onUpdateStatus} />
            ))}
        </ListWrapper>
    )
}

export default Reports;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px; // 카드 사이의 간격
  margin-top: 24px;
`;