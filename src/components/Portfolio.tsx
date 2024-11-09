import React from 'react';
import { Typography, Row, Col, Image } from 'antd';
import './Portfolio.css';

const { Title, Paragraph } = Typography;

const portfolioItems = [
  { 
    title: 'Sistema de Monitoreo', 
    description: 'Solución de visión por computadora para monitoreo en tiempo real.', 
    imgSrc: '/path/to/your/image1.jpg' 
  },
  { 
    title: 'Chatbot Empresarial', 
    description: 'Asistente virtual personalizado para atención al cliente.', 
    imgSrc: '/path/to/your/image2.jpg' 
  },
  { 
    title: 'Aplicación de Nutrición', 
    description: 'App móvil para seguimiento de planes de alimentación y ejercicio.', 
    imgSrc: '/path/to/your/image3.jpg' 
  },
];

const Portfolio: React.FC = () => (
  <div className="portfolio-section">
    <Title level={2} className="portfolio-title">Portafolio de Proyectos</Title>
    <Row gutter={[0, 48]} justify="center">
      {portfolioItems.map((item, index) => (
        <Col xs={24} sm={20} md={16} key={index}>
          <div className="portfolio-item">
            <Image 
              src={item.imgSrc} 
              alt={item.title} 
              className="portfolio-image"
              preview={true} 
            />
            <div className="portfolio-text">
              <Title level={3} className="portfolio-item-title">{item.title}</Title>
              <Paragraph className="portfolio-item-description">{item.description}</Paragraph>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  </div>
);

export default Portfolio;

