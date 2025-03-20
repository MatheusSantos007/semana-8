import { Carousel } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Bem-vindo ao Sistema de Instituições de Ensino</h1>
      <Carousel>
        <Carousel.Item>
          <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1422&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Imagem 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://images.unsplash.com/photo-1501349800519-48093d60bde0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Imagem 2" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
