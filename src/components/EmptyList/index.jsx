import TechsImg from "../../img/website-development.svg";

import { ImgContainer, MainImg, TitleH2, TitleH4 } from "./styles";

function EmptyList() {
  return (
    <ImgContainer>
      <MainImg src={TechsImg} alt="Add more techs" />
      <TitleH2>Adicione novas techs</TitleH2>
      <TitleH4>
        Acesse o formulário para adicionar novas tecnologias à sua stack
      </TitleH4>
    </ImgContainer>
  );
}

export default EmptyList;
