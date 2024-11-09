import React from 'react';
import { Typography } from 'antd';
import './MissionVision.css';

const { Title, Paragraph } = Typography;

const Mission: React.FC = () => (
  <div className="mission-vision-section">
    <Title level={2}>Nuestra Misión</Title>
    <Paragraph>Proveer soluciones tecnológicas innovadoras que impulsen el crecimiento y la eficiencia de nuestros clientes.</Paragraph>
  </div>
);

export default Mission;
