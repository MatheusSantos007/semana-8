import { Container } from "react-bootstrap";

const MainLayout = ({ children }) => {
  return <Container className="mt-4">{children}</Container>;
};

export default MainLayout;
