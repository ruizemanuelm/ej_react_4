import { Form, Button } from "react-bootstrap";
import Lista from "./Lista";
import { useState } from "react";
import ItemTareas from "./ItemTareas";

const Formulario = () => {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);
  const hundleSubmit = (e) => {
    e.preventDefault();
    setTareas([...tareas, tarea]);
    setTarea("");
  };
  const borrarTarea = (nombreTarea)=> {
    let copiadetareas = tareas.filter((ItemTareas)=> ItemTareas !== nombreTarea);
    setTareas(copiadetareas)
  }
  return (
    <>
      <Form onSubmit={hundleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control
            className="me-2"
            type="text"
            placeholder="ingrese una tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button type="submit" variant="info">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <Lista tareas = {tareas} borrarTarea ={borrarTarea}></Lista>
    </>
  );
};

export default Formulario;
