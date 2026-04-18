import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:3000/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({ title: "", description: "" });
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  // GET
  async function fetchTasks() {
    try {
      const res = await axios.get(API);
      setTasks(res.data.data);
    } catch (err) {
      setError("Failed to fetch tasks");
    }
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  // HANDLE INPUT
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  // ADD or UPDATE
  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.title || !form.description) {
      alert("Fill all fields");
      return;
    }

    try {
      if (editId) {
        // UPDATE (PUT)
        await axios.put(`${API}/${editId}`, {
          data: form
        });
        setEditId(null);
      } else {
        // ADD (POST)
        await axios.post(API, form);
      }

      setForm({ title: "", description: "" });
      fetchTasks();
    } catch (err) {
      setError("Something went wrong");
    }
  }

  // DELETE
  async function deleteTask(id) {
    try {
      await axios.delete(`${API}/${id}`);
      fetchTasks();
    } catch {
      setError("Delete failed");
    }
  }

  // TOGGLE
  async function toggleTask(id) {
    try {
      await axios.patch(`${API}/${id}`);
      fetchTasks();
    } catch {
      setError("Toggle failed");
    }
  }

  // EDIT BUTTON CLICK
  function editTask(task) {
    setForm({
      title: task.title,
      description: task.description
    });
    setEditId(task._id);
  }

  // SEARCH FILTER
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>To-Do App</h1>

      {/* ERROR MESSAGE */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br /><br />

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          value={form.title}
          onChange={handleChange}
        />

        <input
          type="text"
          name="description"
          placeholder="Enter description"
          value={form.description}
          onChange={handleChange}
        />

        <button type="submit">
          {editId ? "Update Task" : "Add Task"}
        </button>
      </form>

      {/* TASK LIST */}
      {filteredTasks.map((task) => (
        <div
          key={task._id}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px"
          }}
        >
          <h3
            style={{
              textDecoration: task.completed ? "line-through" : "none"
            }}
          >
            {task.title}
          </h3>

          <p>{task.description}</p>

          <button onClick={() => deleteTask(task._id)}>Delete</button>
          <button onClick={() => toggleTask(task._id)}>Toggle</button>
          <button onClick={() => editTask(task)}>Edit</button>
        </div>
      ))}
    </div>
  );
}

export default App;