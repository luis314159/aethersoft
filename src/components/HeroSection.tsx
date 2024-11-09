import React from 'react';
import { Typography } from 'antd';
import './HeroSection.css';

const { Title, Text } = Typography;

interface HeroSectionProps {
  logoSrc: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ logoSrc }) => (
  <div className="hero-section">
    <img src={logoSrc} alt="Aether Soft Logo" className="hero-logo" />
    <Title className="main-title">SOLUCIONES TECNOLÓGICAS INNOVADORAS</Title>
    <Text className="description">Transformando ideas en proyectos que generan impacto.</Text>
  </div>
);

export default HeroSection;
