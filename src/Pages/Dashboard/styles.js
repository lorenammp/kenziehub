import styled, { keyframes } from "styled-components";

const appear = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const HeaderDashboard = styled.div`
  margin: 0 auto;
  padding: 30px 0;
  display: flex;
  justify-content: space-between;

  @media (min-width: 1280px) {
    align-items: center;
    width: 67%;
  }
`;

export const ButtonSmall = styled.button`
  font-family: "Inter", sans-serif;
  font-size: 12px;
  color: #f8f9fa;

  background-color: #212529;
  transition: 0.5s;

  border: none;
  border-radius: 4px;
  line-height: 38px;

  box-sizing: border-box;
  padding: 0 20px;
  cursor: pointer;

  &:hover {
    background-color: #ff577f;
  }
`;

export const GreetingText = styled.div`
  color: #f8f9fa;
  width: 90%;
  margin: 30px auto;

  @media (min-width: 1280px) {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
  }
`;

export const TitleH1 = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #ff577f;
  margin-bottom: 20px;
`;

export const TitleH2 = styled.h2`
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #f8f9fa;
  margin-bottom: 20px;
`;

export const TitleH3 = styled.h3`
  font-family: "Inter", sans-serif;
  font-size: 17px;
  font-weight: 600;
  color: #f8f9fa;
`;

export const TitleH4 = styled.h4`
  font-family: "Inter", sans-serif;
  font-size: 13px;
  font-weight: 400;
  color: #868e96;
  margin-bottom: 20px;
`;

export const AddMore = styled.div`
  width: 90%;
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1280px) {
    width: 60%;
  }
`;

export const AddBtn = styled.button`
  width: 32px;
  border: none;
  border-radius: 4px;
  background-color: #212529;
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background-color: #59323f;
  }
`;

export const CardList = styled.div`
  width: 90%;
  margin: 20px auto;
  padding: 10px 15px;
  border-radius: 4px;
  background-color: #212529;
  transition: 0.5s;
  animation: ${appear} 0.5s ease-out;

  @media (min-width: 1280px) {
    width: 60%;
  }
`;
