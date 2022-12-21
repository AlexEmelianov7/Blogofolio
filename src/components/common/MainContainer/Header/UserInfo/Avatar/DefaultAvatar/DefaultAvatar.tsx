import React from 'react';
import defaultAvatar from "../../../../../../../assets/icons/user.svg";

import styles from "../Avatar.module.css";

const DefaultAvatar = () => {
    return (
        <div className={styles.defaultAvatar}>
            <img src={defaultAvatar} alt="img"/>
        </div>
    );
};

export default DefaultAvatar;