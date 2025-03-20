import { Card, Container, Row, Col } from 'react-bootstrap';

const CardList = () => {
  const cards = [
    { title: "Cadastro de Instituições", text: "Gerencie suas Instituições de Ensino." },
    { title: "Listagem de Dados", text: "Visualize todas as instituições em um só lugar." }
  ];

  return (
    <Container className="mt-4">
      <Row>
        {cards.map((card, index) => (
          <Col key={index} md={6}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardList;
