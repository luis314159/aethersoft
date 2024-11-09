import React from 'react';
import { Typography } from 'antd';
import './AboutUs.css';

const { Title, Paragraph } = Typography;

const AboutUs: React.FC = () => (
  <div className="about-us-section">
    <div className="about-us-content">
      <Title level={2}>Acerca de Aether Soft</Title>
      <Paragraph>
        En Aether Soft, con más de 5 años de experiencia y oficinas en Parral, Delicias y pronto en Chihuahua, nuestro equipo de más de 30 expertos desarrolla soluciones desde páginas web y catálogos hasta avanzadas implementaciones de inteligencia artificial, como chatbots y visión por computadora.
      </Paragraph>
    </div>
  </div>
);

export default AboutUs;
