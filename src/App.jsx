import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Container className="my-5  main">
        <section className="text-light">
        <h1 className=" text-center display-3">Lista de tareas</h1>
        <hr />
        </section>
      </Container>
      <footer className="bg-dark p-3 text-danger text-center">
        <p>Todos los derechos reservados </p>
      </footer>
    </>
  );
}

export default App;
