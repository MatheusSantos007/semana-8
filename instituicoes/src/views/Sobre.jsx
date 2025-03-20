import { Container } from "react-bootstrap";

const Sobre = () => {
  return (
    <Container className="mt-5 text-center">
      <h1>Sobre o Projeto</h1>
      <p className="mt-3">
        Este projeto tem como objetivo listar e gerenciar instituições de ensino da Paraíba, 
        utilizando React.js para o frontend e JSON Server como backend temporário.
      </p>
      <p>
        A aplicação permite adicionar, editar e remover instituições, além de exibir informações 
        relevantes sobre cada entidade de ensino.
      </p>
    </Container>
  );
};

export default Sobre;
