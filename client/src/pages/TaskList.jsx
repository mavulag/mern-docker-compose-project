import { useEffect, useState } from "react";
import { getAllTasks, deleteTaskById } from "../api";
import { Table, Button } from "react-bootstrap";

const TaskList = () => {
  const [tasks, setTasks] = useState([]); // Initialize with an empty array

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const { data } = await getAllTasks();

      // Ensure that data.body is an array before setting it
      if (Array.isArray(data.body)) {
        setTasks(data.body);
      } else {
        console.error(
          "Expected an array in the body, but received:",
          data.body
        );
        setTasks([]); // Fallback to an empty array
      }
    } catch (error) {
      console.error("Error fetching tasks:", error);
      setTasks([]); // Fallback to empty array in case of error
    }
  };

  const handleDelete = async (id) => {
    await deleteTaskById(id);
    fetchTasks(); // Refresh task list after deletion
  };

  return (
    <div className="container mt-4">
      <h2>Task List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task._id}>
              {" "}
              {/* Use _id as key if it's available */}
              <td>{task._id}</td> {/* Assuming _id is the unique identifier */}
              <td>{task.name}</td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(task._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TaskList;
