import React, {FC} from 'react';

import styles from "../Avatar.module.css";
import {useSelector} from "react-redux";

export interface UserAvatarProps {
    userName: string
    url?: string
    alt?: string
}

const UserAvatar: FC<UserAvatarProps> = (
    {   userName= "",
        url = "",
        alt = ""
    }) => {

    // @ts-ignore
    const { user } = useSelector(state => state.user);

    const transformUserAvatar = () => {
        return userName.split(" ").map(string => string.charAt(0).toUpperCase()).join("")
    }

    return (
        <div className={styles.userAvatarWrapper}>
            {!!url ? <img src={url} alt={alt}/> : <p className={styles.userAvatar}>{transformUserAvatar()}</p>}
            {!!user?.username && <p className={styles.userName}>{user?.username}</p>}
        </div>
    );
};

export default UserAvatar;