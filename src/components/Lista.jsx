import { ListGroup } from "react-bootstrap";
import ItemTareas from "./ItemTareas";

const Lista = (props) => {
    return (
        <ListGroup>
        { props.tareas.map((tarea,indice)=><ItemTareas key={indice} tareas={tarea} borrarTarea = {props.borrarTarea} />)}
      </ListGroup>
    );
};

export default Lista;