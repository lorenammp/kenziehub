import styled, { keyframes } from "styled-components";

const appear = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }

  20% {
    opacity: 0;
    transform: scale(0);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const ImgContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  animation: ${appear} 2s ease-out;

  @media (min-width: 1280px) {
    margin-top: 30px;
    width: 60%;
  }
`;

export const MainImg = styled.img`
  margin: 0 auto;
  width: 60%;
  opacity: 0.8;
`;

export const TitleH2 = styled.h2`
  width: 100%;
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  color: #f8f9fa;
`;

export const TitleH4 = styled.h4`
  font-family: "Inter", sans-serif;
  font-size: 13px;
  font-weight: 600;
  text-align: center;
  color: #868e96;
  margin-top: 12px;
`;
