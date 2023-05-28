import { Form, Button } from 'react-bootstrap';
import React from 'react';

const Formulario = () => {
    return (
        <Form>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control type="text" placeholder="ingrese una tarea" />
          <Button variant='danger'>Enviar</Button>
        </Form.Group>
      </Form>
    );
};

export default Formulario;