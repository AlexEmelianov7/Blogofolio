import React, {ChangeEvent, FC, FormEvent, useEffect, useState} from 'react';

import styles from "./Header.module.css"
import HeaderBurger from "./HeaderBurger/HeaderBurger";
import UserInfo from "./UserInfo/UserInfo";
import HeaderSearch from "./HeaderSearch/HeaderSearch";
import {useLocation, useNavigate} from "react-router-dom";
import {Routes} from "../../../../routes/routes";
import SearchService from "../../../../services/searchService";

const Header: FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchQueryChange = async (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        location.search = `?search=${event.target.value}`
    }

    const handleSearch = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        new FormData(event.currentTarget);

        navigate(`${Routes.search}?search=${searchQuery}`)
    }

    return (
        <header className={styles.header}>
            <HeaderBurger/>
            <HeaderSearch query={searchQuery} onChange={handleSearchQueryChange} onSubmit={handleSearch} />
            <div className={styles.headerRightSide}>
                <UserInfo userName={"James Hetfield"}/>
            </div>
        </header>
    );
};

export default Header;