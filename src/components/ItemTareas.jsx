import { ListGroup, Button } from "react-bootstrap";

const ItemTareas = () => {
    return (
        <>
            <ListGroup.Item className="d-flex justify-content-between">Ejemplo
                <Button variant="danger">Borrar</Button>
            </ListGroup.Item>
        </>
    );
};

export default ItemTareas;