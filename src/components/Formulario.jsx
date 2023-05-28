import { Form, Button } from "react-bootstrap";
import Lista from "./Lista";
import { useState } from "react";

const Formulario = () => {
  const [Tarea, setTarea] = useState("");
  const [Tareas, setTareas] = useState([]);
  const hundleSubmit = (e) => {
    e.preventDefault();
    setTareas([...Tareas, Tarea]);
    setTarea("");
  };
  return (
    <>
      <Form onSubmit={hundleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control
            className="me-2"
            type="text"
            placeholder="ingrese una tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={Tarea}
          />
          <Button type="submit" variant="info">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <Lista></Lista>
    </>
  );
};

export default Formulario;
