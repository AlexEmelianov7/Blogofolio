import React, {FC} from 'react';

import styles from "./UserInfo.module.css"

import Avatar from "./Avatar/Avatar";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

interface UserInfoProps {
    userName: string
    avatarUrl?: string
    className?: string
}

const UserInfo: FC<UserInfoProps> = (
    {
        avatarUrl = "",
        className = "",
    }) => {

    // @ts-ignore
    const { user } = useSelector(state => state.user);

    return (
        <div className={`${styles.userInfoWrapper} ${className}`}>
            <Link to={!!user?.username ? "./blog" : "./signin"}>
                <div className={styles.userInfo}>
                    <Avatar userName={user?.username} url={avatarUrl}/>

                </div>
            </Link>
        </div>
    );
};

export default UserInfo;