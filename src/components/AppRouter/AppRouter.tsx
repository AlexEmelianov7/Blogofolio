import React, {FC, useEffect} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {PRIVATE_ROUTES, PUBLIC_ROUTES} from "../../routes/routes";
import {useDispatch, useSelector} from "react-redux";
import {handleGetUser} from "../../store/asyncActions/userActions";
import {setUserAction} from "../../store/reducers/userReducer";

const AppRouter: FC = () => {
    const dispatch = useDispatch();

    const { user } = useSelector((state: any) => state?.user);
    const handleGetUserSession = () => {
        const accessToken = localStorage.getItem("access") || "";
        const refreshToken = localStorage.getItem("refresh") || "";

       if (!!accessToken) {
            // @ts-ignore
           dispatch(handleGetUser(accessToken, refreshToken));
       }
       else {
            dispatch(setUserAction(null));
       }
    }

    useEffect(() => {
        handleGetUserSession()
    }, [])

    return (
        <Routes>
            {!!user
                ?
                PRIVATE_ROUTES.map(({ path, Element, title}) => <Route key={path} path={path} element={<Element title={title} />} />)
                :
                PUBLIC_ROUTES.map(({ path, Element, title}) => <Route key={path} path={path} element={<Element title={title} />} />)
            }

            <Route path={"*"} element={<Navigate to={!!user ? "/blog" : "/signin"} replace />} />
        </Routes>
    );
};

export default AppRouter;