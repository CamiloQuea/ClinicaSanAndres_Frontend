import React from 'react'
import { useTheme } from '../hooks/useTheme';

interface IAuth {
    children: JSX.Element
}

export const Auth = ({ children }: IAuth) => {

    const [switchMode] = useTheme();
    return (
        <div className='dark:bg-neutral-900 bg-white h-screen flex items-center justify-center'>
            {children}
        </div>
    )
}
