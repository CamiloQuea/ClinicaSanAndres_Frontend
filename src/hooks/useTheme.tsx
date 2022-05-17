import React, { useEffect, useState } from 'react'

export const useTheme = (): [VoidFunction, boolean] => {

    const [theme, setTheme] = useState(localStorage.theme);

    const colorTheme = theme == 'dark' ? 'light' : 'dark';

    const switchTheme = () => {
        setTheme(colorTheme);
    }


    useEffect(() => {

        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);

        localStorage.setItem("theme", theme);

    }, [theme, colorTheme]);

    const isDark = theme == 'dark' ? true : false;

    return [switchTheme, isDark];

}
