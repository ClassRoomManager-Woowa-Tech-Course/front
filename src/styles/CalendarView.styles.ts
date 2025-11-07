import styled, {css} from "styled-components";

export const CalendarGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
`;

export const BaseCell = styled.div`
    min-height: 100px;
    padding: 8px;
    box-sizing: border-box;
    border-right: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;

    &:nth-child(7n) { border-right: none; }
    &:nth-last-child(-n + 7) { border-bottom: none; }
`;

export const DayHeaderCell = styled(BaseCell)<{ isSunday?: boolean }>`
    background-color: #f9f9f9;
    font-weight: 600;
    font-size: 14px;
    min-height: auto;
    padding: 12px 8px;
    text-align: center;
    color: ${props => props.isSunday ? '#e63737' : '#555'};
`;

export const DayCell = styled(BaseCell)<{ isOutsideMonth?: boolean; isSunday?: boolean; }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${props => props.isSunday ? '#e63737' : 'black'};
    position: relative;
    
    ${props => props.isOutsideMonth && css`
        color: #ccc;
        background-color: #fdfdfd;
        > * { opacity: 0.5; }
        
        > ${ReservationCount} {
            display: none;
        }
    `}
`;

export const DayHeader = styled.div`
    width: 100%;
    margin-bottom: 8px;
`;

export const DayNumber = styled.span`
    font-size: 16px;
    font-weight: 600;
`;

export const ReservationCount = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    font-size: 14px;
    font-weight: 600;
    color: #007aff;
    cursor: pointer;
    padding: 4px 10px;
    border-radius: 16px;
    transition: background-color 0.2s;

    &:hover {
        background-color: #f0f8ff; // 밝은 파란색 배경
        text-decoration: underline;
    }
`;

export const Spacer = styled.div`
    flex-grow: 1;
`;