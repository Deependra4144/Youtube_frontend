import Input from '../components/common/Input'


function Login() {
    return (
        <div className='w-1/4 mx-auto shadow-md p-5 rounded-lg'>
            <form action="" className='flex flex-col gap-5'>
                <Input label='Email || Username' type='text' placeholder='Enter your email or username' />
                <Input label='password' type='password' placeholder='password' />
                <button type='submit' className='bg-red-600 text-white px-3 rounded-md py-1'>Log in</button>
            </form>
            <div className='text-center my-3'>
                <span className='text-gray-700'>Don't have an account</span>
                <a href='/' className='text-blue-500 underline hover:text-blue-700'> Register</a>
            </div>
        </div>
    )
}

export default Login
