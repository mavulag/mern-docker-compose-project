import { Routes, Route, Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import TaskList from "./pages/TaskList";
import CreateTask from "./pages/CreateTask";

const App = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>Task Manager</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Tasks
            </Nav.Link>
            <Nav.Link as={Link} to="/create">
              Create Task
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/create" element={<CreateTask />} />
      </Routes>
    </>
  );
};

export default App;
