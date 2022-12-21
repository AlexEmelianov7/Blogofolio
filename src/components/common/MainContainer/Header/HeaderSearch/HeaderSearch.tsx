import React, {ChangeEventHandler, FC, FormEventHandler, useState} from 'react';
import styles from "./HeaderSearch.module.css";
import SearchInput from "./SearchInput/SearchInput";
import IconSelector from "../../../IconSelector/IconSelector";

interface HeaderSearchProps {
    query: string
    onChange: ChangeEventHandler<HTMLInputElement>
    onSubmit: FormEventHandler<HTMLFormElement>
}

const HeaderSearch: FC<HeaderSearchProps> = ({query = "", onChange, onSubmit}) => {
    const [open, setOpen] = useState<boolean>(false);

    const handleCloseSearchInput = () => setOpen(false);
    const handleOpenSearchInput = () => setOpen(true);

    return (
        <div className={styles.headerSearchWrapper}>
            {open && <SearchInput query={query} onClose={handleCloseSearchInput} onChange={onChange} onSubmit={onSubmit} />}
            <div className={styles.searchBtnWrapper}>
                <IconSelector id={"search"} onClick={handleOpenSearchInput} className={styles.searchBtn}/>
            </div>
        </div>
    );
};

export default HeaderSearch;