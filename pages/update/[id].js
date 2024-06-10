import { useState, useEffect } from 'react';
import { getTodo, updateTodo } from '../../services/api';
import { useRouter } from 'next/router';

const UpdateTodo = () => {
    const [title, setTitle] = useState('');
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (id) {
            fetchTodo();
        }
    }, [id]);

    const fetchTodo = async () => {
        const response = await getTodo(id);
        setTitle(response.data.title);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateTodo(id, { title });
        router.push('/');
    };

    return (
        <div>
            <h1>Update Todo</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                />
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default UpdateTodo;
