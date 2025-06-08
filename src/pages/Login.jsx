import Input from '../components/common/Input'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/auth/authSlice';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';


function Login({ setIsLogin, setModalIsOpen }) {
    const { register, formState: { errors }, setValue, handleSubmit, watch } = useForm()
    const [feildType, setFeildType] = useState('username')
    const { loading, error } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const inputValue = watch('auth')


    useEffect(() => {
        if (inputValue?.includes('@gmail.com')) {
            setFeildType('email')
            setValue('email', inputValue)
            setValue('username', '')
        } else {
            setFeildType('username')
            setValue('username', inputValue)
            setValue('email', '')

        }
    }, [inputValue, setValue])

    const handleLogin = (data) => {
        let payload = {
            password: data.password,
            [feildType]: data[feildType]
        };
        // console.log(payload)
        dispatch(loginUser(payload))
        // console.log(error)
        if (error) {
            Swal.fire({
                title: error,
                icon: 'error',
                draggable: true
            })
        }
    }

    return (
        <div className='w-96 md:w-1/4 bg-white mx-auto shadow-md p-5 rounded-lg'>
            <form onSubmit={handleSubmit(data => handleLogin(data))} className='flex flex-col gap-5'>
                <Input
                    {...register('auth', { required: { value: true, message: 'enter your email or username' } })}
                    label='Email || Username'
                    type='text'
                    placeholder='Enter your email or username'
                    error={errors?.auth?.message}
                />
                <Input
                    {...register('password', { required: { value: true, message: 'enter your password' } })}
                    label='password'
                    type='password'
                    placeholder='password'
                    error={errors?.password?.message}
                />
                <button type='submit' className='bg-red-600 text-white px-3 rounded-md py-1'>{!loading ? 'Log in' : 'Loging...'}</button>
            </form>
            <div className='text-center my-3'>
                <span className='text-gray-700'>Don't have an account</span>
                <p onClick={() => { setIsLogin(prev => !prev); setModalIsOpen(true) }} className='cursor-pointer text-blue-500 underline hover:text-blue-700'> Register</p>
            </div>
        </div>

    )
}

export default Login
