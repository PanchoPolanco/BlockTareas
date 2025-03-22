import { useForm } from 'react-hook-form';
export const Login = () => {
    const { register, handleSubmit, formState: {
        errors
    } } = useForm();

    const onSubmit = handleSubmit(async() => {
        console.log('Submit');
    })

    return(
    <div>
        <div>
            <form onSubmit={ onSubmit }>
                <input 
                    type="email" 
                    id="email" 
                    {...register('email', { required: true })} 
                />
                {errors.email && <span>El usuario es obligatorio</span>}
                <input 
                    type="password" 
                    id="password" 
                    {...register('password', { required: true })} 
                />
                {errors.password && <span>La contraseña es obligatorio</span>}
                <button 
                    type="submit"
                >
                    Login
                </button>
            </form>
        </div>
    </div>
  )
};