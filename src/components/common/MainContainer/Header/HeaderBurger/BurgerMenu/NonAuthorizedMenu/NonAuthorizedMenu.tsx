import React, {FC} from 'react';
import {IMenuElem} from "../AuthorizedMenu/AuthorizedMenu";
import BurgerMenuElem, {BurgerMenuElemVariant} from "../BurgerMenuItem/BurgerMenuElem";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import {useNavigate} from "react-router-dom";
import {Routes} from "../../../../../../../routes/routes";

interface NonAuthorizedMenuProps {
    menuElements: IMenuElem[]
}

const NonAuthorizedMenu: FC<NonAuthorizedMenuProps> = ({menuElements= []}) => {
    const navigate = useNavigate();
    const handleSignInRedirect = () => navigate(Routes.signIn)

    return (
        <>
            {menuElements.map(elem => <BurgerMenuElem onClick={elem.action}>{elem.description}</BurgerMenuElem>)}
            <div>
                <ThemeSwitcher/>
                <BurgerMenuElem
                    onClick={handleSignInRedirect}
                    variant={BurgerMenuElemVariant.secondary}
                >
                    Sign In
                </BurgerMenuElem>
            </div>
        </>
    );
};

export default NonAuthorizedMenu;