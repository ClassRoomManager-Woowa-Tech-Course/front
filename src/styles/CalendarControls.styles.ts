import styled from "styled-components";

export const ControlsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
`;

export const RoomSelector = styled.select`
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    background-color: #f8f8f8;
    color: black;
`;

export const MonthNavigator = styled.div`
    display: flex;
    align-items: center;
    background-color: #333;
    border-radius: 8px;
    color: white;
    padding: 4px;
`;

export const NavButton = styled.button`
    background: none;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
    padding: 4px 16px;
    &:hover {
        opacity: 0.8;
    }
`;

export const CurrentMonth = styled.span`
    font-size: 18px;
    font-weight: 600;
    min-width: 100px;
    text-align: center;
`;