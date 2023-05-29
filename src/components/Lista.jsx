import { ListGroup, Form } from "react-bootstrap";
import ItemTareas from "./ItemTareas";

const Lista = (props) => {
    return (
        <ListGroup>
        { props.tareas.map((tareas,indice)=><ItemTareas key={indice} tareas={tareas} />)}
      </ListGroup>
    );
};

export default Lista;