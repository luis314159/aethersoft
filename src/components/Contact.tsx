import React from 'react';
import { Form, Input, Button } from 'antd';
import './Contact.css';

const Contact: React.FC = () => (
  <div className="contact-section">
    <h2>Contacto</h2>
    <Form layout="vertical" className="contact-form">
      <Form.Item label="Nombre" name="name" rules={[{ required: true, message: 'Por favor ingresa tu nombre' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Correo Electrónico" name="email" rules={[{ required: true, message: 'Por favor ingresa tu correo electrónico' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Mensaje" name="message" rules={[{ required: true, message: 'Por favor ingresa un mensaje' }]}>
        <Input.TextArea rows={4} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="submit-button">
          Enviar
        </Button>
      </Form.Item>
    </Form>
  </div>
);

export default Contact;
