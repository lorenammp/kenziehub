import styled, { keyframes } from "styled-components";

const moveInTop = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }

  80% {
    transform: translateY(10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const MainContent = styled.div`
  height: 95vh;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  animation: ${moveInTop} 0.5s ease-out;
`;

export const FormData = styled.div`
  width: 90%;
  margin: 0 auto;

  @media (min-width: 1280px) {
    width: 350px;
  }
`;

export const RegisterForm = styled.form`
  text-align: center;
  color: #f8f9fa;
  width: 100%;
  background-color: #212529;
  box-sizing: border-box;
  padding: 20px;
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
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 20px;
`;

export const ButtonMain = styled.button`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: #ffffff;

  background-color: #ff577f;
  transition: 0.5s;

  border: none;
  border-radius: 4px;
  line-height: 38px;

  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: #59323f;
  }
`;

export const ButtonSecondary = styled.button`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: #f8f9fa;

  background-color: #868e96;
  transition: 0.5s;

  border: none;
  border-radius: 4px;
  line-height: 38px;

  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: #59323f;
  }
`;

export const SmallText = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 12px;
  margin-top: 40px;
  margin-bottom: 10px;
  color: #868e96;
`;
