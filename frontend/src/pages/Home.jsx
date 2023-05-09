import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import TodoCard from "../components/TodoCard";

const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:9922/todos");
      const data = await response.json();
      setTodos(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Todo List</h1>
      <h3>Keep Track of Todos</h3>
      <Link to="/create">Add a todo?</Link>
      <table>
        {todos.length < 1 ? (
          ""
        ) : (
          <tr>
            <th>Number</th>
            <th>Name</th>
          </tr>
        )}
        {todos &&
          todos.map((todo, index) => (
            <TodoCard key={todo._id} todo={todo.name} index={index} />
          ))}
      </table>
    </div>
  );
};

export default Home;
