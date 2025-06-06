import { useState } from 'react'
import Input from '../components/common/Input'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../features/auth/authSlice'

function Register() {
    const [avatarView, setAvatarView] = useState('https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png')
    const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm()

    const { loading, error, user } = useSelector(state => state.auth);
    const dispatch = useDispatch()

    const hadelAvatar = (e) => {
        let file = e.target.files[0]
        if (file) {
            setValue('avatar', file);
            let url = URL.createObjectURL(file)
            setAvatarView(url)
        }
    }

    const handleFormSubmit = (data) => {
        // console.log(data)
        let formData = new FormData()
        formData.append('avatar', data.avatar);  // Real File object
        formData.append('username', data.username);
        formData.append('fullname', data.fullname);
        formData.append('email', data.email);
        formData.append('password', data.password);

        dispatch(registerUser(formData));
        setAvatarView('https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png');
        // reset();
    }

    return (
        <div className='w-96 md:w-1/3 mx-auto shadow-md px-8 py-5 rounded-xl'>
            <div className="">
                <img style={{ width: '100px', height: '100px' }} className='shadow-md mx-auto rounded-full' src={avatarView} alt="" />
                {errors.avatar?.message && <p className='text-red-500 text-sm text-center'>{errors.avatar?.message}</p>}
            </div>
            <form onSubmit={handleSubmit(data => handleFormSubmit(data))} className='flex flex-col gap-5'>
                <div className="w-full text-center mt-5">
                    <label htmlFor="avatar-upload" className=' text-center cursor-pointer text-blue-500 mt-4 hover:text-blue-800 hover:scale-105 transition-all duration-300'>
                        Upload Avatar
                    </label>
                    <Input
                        id={'avatar-upload'}
                        onChange={hadelAvatar}
                        type='file'
                        className='hidden'
                        accept='image/*'
                    />
                    <Input className='' type='hidden'{...register('avatar', { required: { value: true, message: 'Avatar is required' } })} />
                </div>

                <Input
                    {
                    ...register(
                        'username',
                        { required: { value: true, message: 'username is required' } },
                    )}
                    error={errors.username?.message}
                    label='Username'
                    type='text'
                    placeholder='Enter your username'
                />
                <Input
                    {
                    ...register(
                        'fullname',
                        { required: { value: true, message: 'fullname is required' } },
                    )}
                    error={errors.fullname?.message}
                    label='Full Name'
                    type='text'
                    placeholder='Enter your fullname'
                />

                <Input
                    {...register(
                        'email',
                        { required: { value: true, message: 'email is required' }, pattern: { value: /^\S+@\S+\.\S+$/, message: 'enter a valid email address' } }
                    )}
                    error={errors.email?.message}
                    label='Email'
                    type='email'
                    placeholder='Enter your username'
                />
                <Input
                    {...register(
                        'password',
                        {
                            required: { value: true, message: 'password is required' },
                            minLength: { value: 4, message: 'password must have 4 charactor' }
                        })
                    }
                    error={errors.password?.message}
                    label='password'
                    type='password'
                    placeholder='password'
                />
                <button
                    type='submit'
                    className='bg-red-600 text-white px-3 rounded-md py-1'
                >Log in</button>
            </form>
            <div className='text-center my-3'>
                <span className='text-gray-700'>All ready have a account</span>
                <a href='/' className='text-blue-500 underline hover:text-blue-700'> Login</a>
            </div>
        </div>
    )
}

export default Register
