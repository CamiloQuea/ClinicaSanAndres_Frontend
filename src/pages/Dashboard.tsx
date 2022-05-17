import { faArrowRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { DarkModeButton } from '../components/DarkModeButton';
import { useTheme } from '../hooks/useTheme'


export const Dashboard = () => {

    const [switchMode] = useTheme();

    const [menuState, changeMenuState] = useState(false);

    const navigate = useNavigate();

    const handleLogout = () => {

        navigate("/login");

    }


    return (
        <div className='dark:bg-neutral-900 bg-white flex flex-col h-screen'>
            <nav className='h-16 dark:bg-neutral-900 bg-white flex dark:border-0 dark:border-neutral-500 border border-neutral-50 shadow-lg p-3 sticky'>

                <nav className='flex-1'>

                </nav>
                <div className='relative'>
                    <FontAwesomeIcon className='p-3 cursor-pointer dark:text-neutral-200 text-neutral-700' icon={faUser} onClick={() => changeMenuState(!menuState)} />
                    {
                        menuState ?
                            <div className='absolute right-0 top-full dark:bg-neutral-900 bg-neutral-50  dark:border-neutral-800 z-50 dark:shadow-xl border border-neutral-50 shadow-lg w-52 p-3 flex flex-col dark:text-white text-neutral-700 font-roboto space-y-3'>

                                <div className='font-[500]'>
                                    <div >Configuracion</div>
                                </div>

                                <div className='flex justify-center items-center gap-10 text-xl '>
                                    <DarkModeButton className='' />
                                    <FontAwesomeIcon className='cursor-pointer' icon={faArrowRightFromBracket} onClick={handleLogout} />
                                </div>
                            </div> :
                            ""
                    }


                </div>
            </nav>
            <div className='dark:bg-neutral-800 bg-white flex-grow' >

            </div>
        </div>
    )
}
