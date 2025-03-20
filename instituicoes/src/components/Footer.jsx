import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 mt-5">
      <Container className="text-center">
        <p>&copy; {new Date().getFullYear()} Instituições de Ensino - Todos os direitos reservados.</p>
      </Container>
    </footer>
  );
};

export default Footer;
