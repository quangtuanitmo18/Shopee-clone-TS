import { useForm } from 'react-hook-form'

interface FormData {
  email: string
  password: string
}

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<FormData>()

  return (
    <div className='h-full bg-primary'>
      <div className='mx-auto max-w-7xl px-4 py-20'>
        <div className='grid grid-cols-1 lg:grid-cols-5'>
          <div className='rounded bg-white p-5 lg:col-span-2 lg:col-start-4'>
            <p className=' text-xl text-black lg:text-2xl'>Đăng Nhập</p>
            <form action=''>
              <div className='mt-6'>
                <input
                  className='w-full rounded border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow'
                  type='email'
                  placeholder='Email'
                  {...register('email')}
                />
                {errors?.email && <div className='h-4 text-sm text-red-500'>{errors?.email.message}</div>}
              </div>
              <div className='mt-2'>
                <input
                  className='w-full rounded border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow'
                  type='password'
                  placeholder='Password'
                  {...register('password')}
                />
                {errors?.password && <div className='h-4 text-sm text-red-500'>{errors?.password.message}</div>}
              </div>

              <button className='w-full rounded bg-primary p-4 text-white'>Đăng Nhập</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
