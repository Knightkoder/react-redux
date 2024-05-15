import './App.css';
import TaskForm from './components/TasksForm';
import TasksList from './components/TasksList';
import Header from './components/Header';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { apiSlice } from './api/apiSliceService';

function App() {
    return (
        <>
            <ApiProvider api={apiSlice}>
                <Header />
                <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
                    <TaskForm />
                </div>
            </ApiProvider>
        </>
    );
}

export default App;
