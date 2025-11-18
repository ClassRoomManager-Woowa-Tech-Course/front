import styled from "styled-components";

export const PageWrapper = styled.div`
    width: 70%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 10px;          
    box-sizing: border-box;

    @media (max-width: 768px) {
        padding: 20px;
    }
`;

export const ContentContainer = styled.div`
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 1000px;
  z-index: 10;
  color: black;
  padding: 32px 40px; 

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

export const Mascot = styled.img`
  position: fixed;
  left: 65%;
  bottom: 5%;
  width: clamp(300px, 40vw, 550px);
  height: auto;
  z-index: 5;

  @media (max-width: 768px) {
    display: none;
  }
`;