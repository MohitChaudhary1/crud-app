import { useEffect, useState } from 'react';
import { getTodos, deleteTodo } from '../services/api';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const response = await getTodos();
        setTodos(response.data);
    };

    const handleDelete = async (id) => {
        await deleteTodo(id);
        fetchTodos();
    };

    return (
        <div className="container">
            <h1>Todos</h1>
            <Link href="/create">Create Todo</Link>
            <ul className={styles.todoList}>
                {todos.map(todo => (
                    <li key={todo.id} className={styles.todoItem}>
                        {todo.title}
                        <div className={styles.todoActions}>
                            <Link href={`/update/${todo.id}`}>Edit</Link>
                            <button onClick={() => handleDelete(todo.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
