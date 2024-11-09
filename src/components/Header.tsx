import React from 'react';
import { Layout, Menu, Button } from 'antd';
import './Header.css';

const { Header } = Layout;

const AppHeader: React.FC = () => {
  return (
    <Header className="app-header">
      <div className="logo">Aether Soft</div>
      <Menu mode="horizontal" selectable={false} className="menu">
        <Menu.Item key="about">Acerca de</Menu.Item>
        <Menu.Item key="services">Servicios</Menu.Item>
        <Menu.Item key="portfolio">Portafolio</Menu.Item>
        <Menu.Item key="mission">Misión</Menu.Item>
        <Menu.Item key="vision">Visión</Menu.Item>
        <Menu.Item key="contact">Contacto</Menu.Item>
      </Menu>
      <Button className="header-button">Trabaja con nosotros</Button>
    </Header>
  );
};

export default AppHeader;
