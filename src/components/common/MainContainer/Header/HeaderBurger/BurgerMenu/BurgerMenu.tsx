import React, {FC} from 'react';

import styles from "./BurgerMenu.module.css";

import AuthorizedMenu from "./AuthorizedMenu/AuthorizedMenu";
import NonAuthorizedMenu from "./NonAuthorizedMenu/NonAuthorizedMenu";
import {useNavigate} from "react-router-dom";
import {Routes} from "../../../../../../routes/routes";
import {useSelector} from "react-redux";


interface BurgerMenuProps {
    userName?: string
}

const BurgerMenu: FC<BurgerMenuProps> = ({userName = ""}) => {
    const navigate = useNavigate();
    // @ts-ignore
    const { user } = useSelector(state => state.user);

    const handleHomeRedirect = () => navigate(Routes.blog);
    const handleAddPostRedirect = () => navigate(Routes.addPost);

    const nonAuthMenuElements = [{description: "Home", action: handleHomeRedirect} ]
    const authMenuElements = [...nonAuthMenuElements, {description: "Add post", action: handleAddPostRedirect }];

    return (
        <div className={styles.burgerMenuWrapper}>
            {!!user?.username
                ?
                <AuthorizedMenu userName={userName} menuElements={authMenuElements} />
                :
                <NonAuthorizedMenu menuElements={nonAuthMenuElements}/>
            }
        </div>
    );
};

export default BurgerMenu;