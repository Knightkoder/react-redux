import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Task } from '../types/Task';
//TODO: Agregar tipos de ENV
const serviceIP = import.meta.env.VITE_APP_SERVICE_IP;

export const apiSlice = createApi({
    reducerPath: 'apiTask',
    baseQuery: fetchBaseQuery({ baseUrl: serviceIP }),
    tagTypes: ['Tasks'],
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => '/tasks',
            providesTags: ['Tasks'],
            transformResponse: (res: Task[]) => res.sort((a, b) => b.id - a.id),
        }),
        getTaskById: builder.query({
            query: (id) => `/tasks/${id}`,
        }),
        getTasksByStatus: builder.query({
            query: (status) => `/tasks?status=${status}`,
        }),
        getTasksByPriority: builder.query({
            query: (priority) => `/tasks?priority=${priority}`,
        }),
        addTask: builder.mutation({
            query: (task: Task) => ({
                url: '/tasks',
                method: 'POST',
                body: task,
            }),
            invalidatesTags: ['Tasks'],
        }),
        deleteTask: builder.mutation({
            query: (id) => ({
                url: `/tasks/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Tasks'],
        }),
        updateTask: builder.mutation({
            query: (task) => ({
                url: `/tasks/${task.id}`,
                method: 'PATCH',
                body: task,
            }),
            invalidatesTags: ['Tasks'],
        }),
    }),
});

export const {
    useGetTasksQuery,
    useAddTaskMutation,
    useDeleteTaskMutation,
    useUpdateTaskMutation,
    useGetTaskByIdQuery,
    useGetTasksByStatusQuery,
    useGetTasksByPriorityQuery,
} = apiSlice;
