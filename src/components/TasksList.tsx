import {
    useDeleteTaskMutation,
    useGetTasksQuery,
    useUpdateTaskMutation,
} from '../api/apiSliceService';
import { Task } from '../types/Task';

export default function TasksList() {
    const { data: tasksList, isError, isLoading, error } = useGetTasksQuery({});
    const [deleteTask] = useDeleteTaskMutation();
    const [updateTask] = useUpdateTaskMutation();

    const handleTaskDelete = (id = 0) => {
        deleteTask(id);
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p className="bg-red-100 justify-center">{JSON.stringify(error)}</p>;
    }
    if (!tasksList) {
        return <p>No tasks found</p>;
    }

    const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>, task: Task) => {
        updateTask({
            ...task,
            completed: e.target.checked,
        });
    };

    return (
        <>
            <ul className="divide-y divide-gray-200 px-4">
                {tasksList.map((task: Task) => (
                    <li className="py-4 hover:shadow hover:bg-zinc-100" key={task.id}>
                        <div className="flex items-center ">
                            <input
                                id={task.id.toString()}
                                name={task.title}
                                type="checkbox"
                                className="ml-2 w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                onChange={(e) => {
                                    handleOnchange(e, task);
                                }}
                                checked={task.completed ? true : false}
                            />
                            <div className="w-[78%] text-left overflow-hidden">
                                <label
                                    htmlFor={task.id.toString()}
                                    className="ml-3 block text-gray-900">
                                    <span className="text-lg font-medium block">{task.title}</span>
                                    <span className="text-sm font-light text-gray-500">
                                        {task.description}
                                    </span>
                                </label>
                            </div>
                            <div className="block ml-3 w-1/3">
                                <button
                                    className="appearance-none  border-none w-10 text-red-600
                                        mr-1 leading-tight focus:outline-nonelex-shrink-0 
                                           text-sm border-4 hover:text-red-700 py-1 px-2 rounded"
                                    onClick={() => {
                                        handleTaskDelete(task.id);
                                    }}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="w-4 h-4">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}
