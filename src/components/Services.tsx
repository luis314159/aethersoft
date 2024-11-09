import React from 'react';
import { Typography, Row, Col, Image } from 'antd';
import './Services.css';

const { Title, Paragraph } = Typography;

const services = [
  { 
    title: 'Desarrollo Web', 
    description: 'Creación de sitios web modernos y escalables.', 
    imgSrc: '/path/to/your/image1.jpg' 
  },
  { 
    title: 'Inteligencia Artificial', 
    description: 'Implementación de IA para chatbots y visión por computadora.', 
    imgSrc: '/path/to/your/image2.jpg' 
  },
  { 
    title: 'Aplicaciones Móviles', 
    description: 'Desarrollo de apps para iOS y Android.', 
    imgSrc: '/path/to/your/image3.jpg' 
  },
  { 
    title: 'Sistema de Monitoreo', 
    description: 'Solución de visión por computadora para monitoreo en tiempo real.', 
    imgSrc: '/path/to/your/image4.jpg' 
  },
  { 
    title: 'Chatbot Empresarial', 
    description: 'Asistente virtual personalizado para atención al cliente.', 
    imgSrc: '/path/to/your/image5.jpg' 
  },
  { 
    title: 'Aplicación de Nutrición', 
    description: 'App móvil para seguimiento de planes de alimentación y ejercicio.', 
    imgSrc: '/path/to/your/image6.jpg' 
  },
];

const Services: React.FC = () => (
  <div className="services-section">
    <Title level={2} className="services-title">Nuestros Servicios</Title>
    <Row gutter={[0, 48]} justify="center">
      {services.map((service, index) => (
        <Col xs={24} sm={20} md={16} key={index}>
          <div className="service-item">
            <Image 
              src={service.imgSrc} 
              alt={service.title} 
              className="service-image"
              preview={true} 
            />
            <div className="service-text">
              <Title level={3} className="service-item-title">{service.title}</Title>
              <Paragraph className="service-item-description">{service.description}</Paragraph>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  </div>
);

export default Services;
