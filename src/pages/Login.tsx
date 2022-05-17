import React, { FormEventHandler } from 'react'
import { Auth } from '../layouts/Auth'
import { DarkModeButton } from '../components/DarkModeButton'
import { useNavigate } from 'react-router-dom'


export const Login = () => {
    const navigate = useNavigate();
    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        navigate("/");
    }

    return (
        <Auth>

            <div className='dark:bg-neutral-800 dark:border-0 border-[1px] border-neutral-10 md:w-96 w-11/12 h-[600px] p-5 shadow-2xl rounded-xl relative flex flex-col'>
                <DarkModeButton className="dark:text-white text-neutral-800 text-xl absolute top-5 left-5" />
                <div className='flex-1'></div>
                <div className='h-3/6'>
                    <form className='flex flex-col text-center' onSubmit={handleSubmit}>
                        <div className='mb-5'>
                            <h1 className='font-roboto font-[500] mb-2 dark:text-neutral-400 text-neutral-800'>Usuario</h1>
                            <input className='dark:outline-0 outline outline-neutral-400 dark:bg-neutral-700 outline-[1px] p-2 text-sm font-robot rounded-lg w-60 text-neutral-500' type={'text'} />

                        </div>

                        <div className='mb-10'>
                            <h1 className='font-roboto font-[500] mb-2 dark:text-neutral-400 text-neutral-800'>Contraseña</h1>
                            <input className='dark:outline-0 outline outline-neutral-400 dark:bg-neutral-700 outline-[1px] p-2 text-sm font-robot rounded-lg w-60 text-neutral-500' type={'password'} />

                        </div>
                        <div className=''>
                            <button type='submit' className='bg-red-700 px-10 py-3 rounded-3xl text-neutral-200 font-roboto font-[500] uppercase'>Ingresar</button>
                        </div>
                    </form>
                </div>
            </div>


        </Auth>
    )
}
