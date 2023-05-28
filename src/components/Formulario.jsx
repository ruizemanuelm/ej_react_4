import { Form, Button } from 'react-bootstrap';
import Lista from './Lista';

const Formulario = () => {
    return (
        <>
        <Form>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control className='mx-2' type="text" placeholder="ingrese una tarea" />
          <Button variant='info'>Enviar</Button>
        </Form.Group>
      </Form>
      <Lista></Lista>
        </>
    );
};

export default Formulario;