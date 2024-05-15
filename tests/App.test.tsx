import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../src/App';
import TaskForm from '../src/components/TasksForm';
import TasksList from '../src/components/TasksList';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import Header from '../src/components/Header';
import { apiSlice } from '../src/api/apiSliceService';

describe('App', () => {
    it('renders the App component', () => {
        render(<App />);

        screen.debug();
    });
    it('should render taskList component', () => {
        render(<TasksList />);
    });
});

const renderAppAndForm = () => {
    render(
        <>
            <ApiProvider api={apiSlice}>
                <Header />
                <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
                    <TaskForm />
                    <TasksList />
                </div>
            </ApiProvider>
        </>
    );
};

describe('Form ', () => {
    it('The input field and its props', () => {
        renderAppAndForm();
        const input = document.querySelector('input') as HTMLInputElement | null;

        // input exists in the form component
        expect(input).toBeTruthy();

        // is empty
        expect(input?.textContent).toBe('');

        if (input) {
            // test the input text
            input.textContent = 'Tarea test!';
            expect(input.textContent).toBe('Tarea test!');

            // test the type prop
            expect(input.type).toBe('text');

            // test the name prop
            expect(input.name).toBe('title');

            // test the value prop
            fireEvent.change(input, {
                target: {
                    value: 'Tarea test!',
                },
            });
            expect(input.value).toBe('Tarea test!');

            // test the required prop with the jest-dom
            expect(input).toBeRequired();
        }
    });
});
