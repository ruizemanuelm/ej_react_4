import { ListGroup, Form } from "react-bootstrap";
import ItemTareas from "./ItemTareas";

const Lista = (props) => {
    return (
        <ListGroup>
        <ItemTareas tareas = {props.tareas}></ItemTareas>
      </ListGroup>
    );
};

export default Lista;