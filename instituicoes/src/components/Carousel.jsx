import { Carousel } from 'react-bootstrap';

const ImageCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="https://images.unsplash.com/photo-1510531704581-5b2870972060?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Primeiro slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://images.unsplash.com/photo-1501349800519-48093d60bde0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Segundo slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageCarousel;
