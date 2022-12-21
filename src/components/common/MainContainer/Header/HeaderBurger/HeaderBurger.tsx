import React, {FC, useState} from 'react';

import styles from "./HeaderBurger.module.css";
import BurgerMenu from "./BurgerMenu/BurgerMenu";


const HeaderBurger: FC = (props) => {
    const [open, setOpen] = useState<boolean>(false);
    const handleToggleHeaderBurger = () => setOpen(prevState => !prevState);

    return (
        <>
            <div className={styles.headerBurgerWrapper} onClick={handleToggleHeaderBurger}>
                <div className={`${open ? styles.active : styles.headerBurger}`}>
                    <span />
                </div>
            </div>
            {open && <BurgerMenu userName={"James Hetfield"} />}
        </>
    );
};

export default HeaderBurger;
