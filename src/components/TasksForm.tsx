import React from 'react';
import { useAddTaskMutation } from '../api/apiSliceService';
import InputTask from './InputTask';
import uuid from 'react-uuid';

export default function TaskForm() {
    const [addTask] = useAddTaskMutation();

    const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        //TODO: Mejorar el tipado!!
        const target = e.target as HTMLInputElement;
        const title = target.title.value.trim();
        const description = target.elements.description.value.trim();
        //const completed = target.elements.completed.checked;

        const newTask = {
            title,
            description,
            completed: false,
            userid: uuid(),
        };
        addTask(newTask);
        e.target.reset();
    };
    return (
        <>
            <div className="px-4 py-2">
                <h1 className="text-gray-800 font-bold text-2xl uppercase">To-Do List</h1>
            </div>
            <form className="w-full max-w-sm mx-auto px-4 py-2" onSubmit={(e) => handleSubmit(e)}>
                <div className="flex items-center border-b-2 border-teal-500 py-2">
                    <InputTask
                        name="title"
                        className="appearance-none bg-transparent border w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Nombre Tarea"
                        required
                        title="title"
                    />
                    <InputTask
                        name="description"
                        className="appearance-none bg-transparent border w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Descripción"
                        required
                        tle="description"
                    />
                    <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded">
                        +
                    </button>
                </div>
            </form>
        </>
    );
}
