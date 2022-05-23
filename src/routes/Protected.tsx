import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom'

interface IProtected {

    children: JSX.Element

}

const Protected = ({ children }: IProtected) => {

    const [isAuth, setIsAuth] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = Cookies.get("token");
        if (token) {
            setIsAuth(true);
            
        } else {
            setIsAuth(false);
            navigate("/login");
        }
    }, [])


    return <div>
        {isAuth ? children : null}
    </div>;
};
export default Protected;
