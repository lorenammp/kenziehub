import styled, { keyframes } from "styled-components";

const moveInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100px);
  }

  80% {
    transform: translateX(10px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Card = styled.div`
  color: #f8f9fa;

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 50px;
  margin: 10px auto;
  padding: 0 10px;
  box-sizing: border-box;

  border-radius: 4px;

  background-color: #121214;
  transition: 0.4s;
  animation: ${moveInRight} 0.5s ease-out;

  &:hover {
    background-color: #343b41;
  }
`;

export const CardTitle = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;

  width: 50%;
`;

export const CardStatus = styled.div`
  width: 30%;
  font-family: "Inter", sans-serif;
  font-size: 13px;
  font-weight: 400;
  color: #868e96;
  text-align: left;
`;

export const EditBtn = styled.button`
  color: #ffffff;
  font-size: 17px;
  background-color: transparent;
  border: none;
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    color: #ff427f;
  }
`;
