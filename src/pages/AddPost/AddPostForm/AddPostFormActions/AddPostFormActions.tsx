import React, {FC, MouseEventHandler} from 'react';
import Button, {ButtonVariant} from "../../../../components/common/Button/Button";
import styles from "./AddPostFormActions.module.css";

interface ActionsProps {
    onDelete: MouseEventHandler<HTMLButtonElement>
    onCancel: MouseEventHandler<HTMLButtonElement>
    onSubmit: MouseEventHandler<HTMLButtonElement>
}

const AddPostFormActions: FC<ActionsProps> = ({onDelete, onCancel, onSubmit}) => {
    return (
        <div className={styles.buttons}>
            <Button onClick={onDelete} className={styles.deleteBtn}>
                Delete post
            </Button>
            <div className={styles.leftButtons}>
                <Button onClick={onCancel} variant={ButtonVariant.secondary} className={styles.cancelBtn}>
                    Cancel
                </Button>
                <Button onClick={onSubmit} variant={ButtonVariant.primary} className={styles.submitBtn}>
                    Add post
                </Button>
            </div>
        </div>
    );
};

export default AddPostFormActions;