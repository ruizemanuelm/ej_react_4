import { Form, Button } from "react-bootstrap";
import Lista from "./Lista";
import { useEffect, useState } from "react";


const Formulario = () => {
  let tareasDeLs = JSON.parse(localStorage.getItem('lista de tareas')) || []
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState(tareasDeLs);
  // ciclo de vida 
  useEffect(()=>{
localStorage.setItem('lista de tareas', JSON.stringify(tareas))
  })
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
