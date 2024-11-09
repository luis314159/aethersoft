import React from 'react';
import { Typography } from 'antd';
import './MissionVision.css';

const { Title, Paragraph } = Typography;

const Vision: React.FC = () => (
  <div className="mission-vision-section">
    <Title level={2}>Nuestra Visión</Title>
    <Paragraph>Convertirnos en líderes en el desarrollo de soluciones de inteligencia artificial y software personalizado.</Paragraph>
  </div>
);

export default Vision;
