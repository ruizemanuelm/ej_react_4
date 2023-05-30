import { ListGroup, Button } from "react-bootstrap";

const ItemTareas = (props) => {
    return (
        <>
            <ListGroup.Item className="d-flex justify-content-between">{props.tareas}
                <Button onClick={()=> props.borrarTarea(props.tareas)} variant="danger">Borrar</Button>
            </ListGroup.Item>
        </>
    );
};

export default ItemTareas;