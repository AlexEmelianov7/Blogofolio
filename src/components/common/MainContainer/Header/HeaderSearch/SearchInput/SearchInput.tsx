import React, {ChangeEventHandler, FC, FormEvent, FormEventHandler} from 'react';
import styles from "./SearchInput.module.css";
import IconSelector from "../../../../IconSelector/IconSelector";

interface SearchInputProps {
    query: string
    onClose: () => void
    onChange: ChangeEventHandler<HTMLInputElement>
    onSubmit: FormEventHandler<HTMLFormElement>
}

const SearchInput: FC<SearchInputProps> = ({query= "", onChange, onClose, onSubmit}) => {
    return (
        <form onSubmit={onSubmit} className={styles.searchInputWrapper}>
            <input
                id={"search"}
                value={query}
                onChange={onChange}
                name={"searchInput"}
                placeholder={"Search..."}
                className={styles.searchInput}
            />
            <IconSelector id={"cancel"} onClick={onClose} className={styles.cancelBtn}/>
        </form>
    );
};

export default SearchInput;