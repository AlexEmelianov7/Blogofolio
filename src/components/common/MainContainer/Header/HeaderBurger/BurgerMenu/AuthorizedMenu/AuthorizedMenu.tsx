import React, {FC} from 'react';

import UserInfo from "../../../UserInfo/UserInfo";
import BurgerMenuElem, {BurgerMenuElemVariant} from "../BurgerMenuItem/BurgerMenuElem";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

import styles from "./AuthorizedMenu.module.css";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {setUserAction} from "../../../../../../../store/reducers/userReducer";
import {Routes} from "../../../../../../../routes/routes";

export interface IMenuElem {
    description: string
    action: () => void
}

interface AuthorizedMenuProps {
    userName: string
    menuElements: IMenuElem[]
}

const AuthorizedMenu: FC<AuthorizedMenuProps> = (
    {
        menuElements= [],
        userName= "",
    }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        dispatch(setUserAction(null));
        navigate(Routes.signIn)
    }

    return (
       <>
           <div className={styles.menuTopSide}>
               <UserInfo userName={userName} />
               {menuElements.map(elem => <BurgerMenuElem key={elem.description} onClick={elem.action} variant={BurgerMenuElemVariant.primary}>{elem.description}</BurgerMenuElem>   )}
           </div>
           <div className={styles.menuBottomSide}>
               <ThemeSwitcher/>
               <BurgerMenuElem
                   onClick={handleLogOut}
                   variant={BurgerMenuElemVariant.secondary}
               >
                   Log Out
               </BurgerMenuElem>
           </div>
       </>
    );
};

export default AuthorizedMenu;