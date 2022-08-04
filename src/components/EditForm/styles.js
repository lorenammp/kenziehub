import styled from "styled-components";

export const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

export const ButtonMain = styled.button`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: #ffffff;

  background-color: #59323f;
  transition: 0.5s;

  border: none;
  border-radius: 4px;
  line-height: 38px;

  width: 60%;
  cursor: pointer;

  &:hover {
    background-color: #ff577f;
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

  width: 36%;
  cursor: pointer;

  &:hover {
    background-color: #343b41;
  }
`;
