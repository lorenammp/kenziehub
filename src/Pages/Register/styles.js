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

export const HeaderAlign = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FormData = styled.div`
  width: 90%;
  height: 95vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 auto;
  animation: ${moveInTop} 0.5s ease-out;

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
`;

export const TitleH2 = styled.h2`
  font-family: "Inter", sans-serif;
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const TitleH4 = styled.h4`
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #868e96;
  margin-bottom: 30px;
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
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background-color: #59323f;
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

export const SmallText = styled.div`
  color: #868e96;
`;
