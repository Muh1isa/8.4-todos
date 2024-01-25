// components/TodoList.js
import { useState } from 'react';
import trashIcon from '@/public/trash-icon.svg'
import Image from 'next/image';
import { uid } from 'uid';

const List = () => {
    const id = uid()
    const [task, setTask] = useState('');
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        if (task !== '') {
            const newTask = {
                id: id,
                value: task,
            }
            setTodos([...todos, newTask]);
            setTask('');
        }
    };

    const removeTodo = (id) => {
        const removed = todos.filter((item) => item.id !== id)
        setTodos(removed)
    };

    return (
        <div className='container'>
            <div>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder='Enter a new todo'
                />
                <button onClick={addTodo} className='add-btn'>Add</button>
            </div>
            <ul className='list'>
                {todos.map((item) => (
                    <li key={item.id} className='list-item'>
                        <p>
                            {item.value}
                        </p>
                        <button onClick={() => removeTodo(item.id)}>
                            {/* <img src={trashIcon} alt="" /> */}
                            <Image src={trashIcon} width={14} />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;
