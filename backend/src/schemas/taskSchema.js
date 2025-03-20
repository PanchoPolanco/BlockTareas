import { z } from 'zod';

export const createTaskSchema = z.object({
    title: z.string({
        message: 'Title is required',
    }),
    description: z.string({
        message: 'Description is required',
    }),
    data: z.string({
        message: 'Data is required',
    }).datetime().optional(),
})