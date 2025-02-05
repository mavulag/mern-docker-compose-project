import { useState } from "react";
import { createTask } from "../api";
import { Form, Button, Container } from "react-bootstrap";

const CreateTask = () => {
  const [task, setTask] = useState({
    name: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault(); // Call preventDefault() correctly
    if (task.name.trim() && task.description.trim()) {
      try {
        await createTask({
          name: task.name,
          description: task.description,
        });
        setTask({ name: "", description: "" }); // Reset the form
        alert("Task created successfully");
      } catch (error) {
        console.error("Error creating task:", error);
        alert("Error creating task");
      }
    }
  };

  return (
    <Container className="mt-4">
      <h2>Create Task</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Task Name</Form.Label>
          <Form.Control
            type="text"
            value={task.name}
            onChange={(e) => setTask({ ...task, name: e.target.value })}
            placeholder="Enter task name"
          />
          <Form.Label>Task Description</Form.Label>
          <Form.Control
            type="text"
            value={task.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
            placeholder="Enter task description"
          />
        </Form.Group>
        <Button className="mt-3" variant="primary" type="submit">
          Create Task
        </Button>
      </Form>
    </Container>
  );
};

export default CreateTask;
