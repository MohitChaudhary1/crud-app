import { useState } from 'react';
import { createTodo } from '../services/api';
import { useRouter } from 'next/router';

const CreateTodo = () => {
    const [title, setTitle] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createTodo({
            title,
            completed: false
        });
        router.push('/');
    };

    return (
        <div>
            <h1>Create Todo</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                />
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreateTodo;
