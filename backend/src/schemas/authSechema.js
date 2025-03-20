import zod from 'zod';

export const registerSchema = zod.object({
    username: zod.string({
        message: 'El nombre de usuario'
    }).min(3).max(50),
    email: zod.string({
        message: 'El email es requerido'
    }).email({
        message: 'El email no es válido'
    }),
    password: zod.string({
        message: 'La contraseña es requerida'
    })
})

export const loginSchema = zod.object({
    email: zod.string({
        message: 'El email es requerido'
    }).email({
        message: 'El email no es válido'
    }),
    password: zod.string({
        message: 'La contraseña es requerida'
    })
})