import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useTheme } from '../hooks/useTheme';

interface IDarkModeButton {

    className: string

}

export const DarkModeButton = ({ className }: IDarkModeButton): JSX.Element => {
    const [switchMode, isDark] = useTheme();


    return (
        <button onClick={switchMode}>
            <FontAwesomeIcon icon={isDark ? faMoon : faSun} className={className} />
        </button>
    )
}
