import { z } from 'zod';

export const registerSchema = z.object({
    username: z.string({
        message: 'El nombre de usuario'
    }).min(3).max(50),
    email: z.string({
        message: 'El email es requerido'
    }).email({
        message: 'El email no es válido'
    }),
    password: z.string({
        message: 'La contraseña es requerida'
    })
})

export const loginSchema = z.object({
    email: z.string({
        message: 'El email es requerido'
    }).email({
        message: 'El email no es válido'
    }),
    password: z.string({
        message: 'La contraseña es requerida'
    })
})