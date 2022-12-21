import React, {ChangeEventHandler, FC, MouseEventHandler, useState} from 'react';
import {Routes} from "../../../routes/routes";
import {FormElementError} from "../../../types/formElement";

import styles from "./AddPostForm.module.css";
import Input from "../../../components/common/Input/Input";
import TextArea from "../../../components/common/TextArea/TextArea";
import FileInput from "../../../components/common/Input/FileInput/FileInput";
import AddPostFormActions from "./AddPostFormActions/AddPostFormActions";
import PostsService from "../../../services/postsService";
import {useNavigate} from "react-router-dom";

interface AddPostFormState {
    title: string
    url: string
    date: string
    image: File | null
    imageName: string
    description: string
    text: string
}

const addPostFormInitialState = {
    title: "",
    url: "",
    date: "",
    image: null,
    imageName: "",
    description: "",
    text: ""
}

interface AddPostFormErrors {
    title: FormElementError
    image: FormElementError
    description: FormElementError
    text: FormElementError
}

const initialErrorValue = { text: null, error: false};

const initialFormElementsError: AddPostFormErrors = {
    title: initialErrorValue,
    image: initialErrorValue,
    description: initialErrorValue,
    text: initialErrorValue
}

const AddPostForm: FC = () => {
    const navigate = useNavigate();

    const [addPostForm, setPostForm] = useState<AddPostFormState>(addPostFormInitialState);
    const [formFieldsError, setFormFieldsError] = useState<AddPostFormErrors>(initialFormElementsError)

    const [imagePreview, setImagePreview] = useState<any>("");

    const handleFilePreviewRemove = () => {
        setImagePreview("")
        setPostForm(prevState => ({...prevState, image: null, imageName: ""}))
    }

    const handleFileReset: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault()
        handleFilePreviewRemove()
    }

    const handleSetTitle: ChangeEventHandler<HTMLInputElement> = ({target: { value: title } }) => {
        setFormFieldsError(prevState => ({ ...prevState, title: initialErrorValue }))
        setPostForm(prevState => ({...prevState, title}));
    }

    const handleSetUrl: ChangeEventHandler<HTMLInputElement> = ({target: { value: url } }) => {
        setPostForm(prevState => ({...prevState, url}));
    }

    const handleSetDate: ChangeEventHandler<HTMLInputElement> = ({target: { value: date } }) => {
        setPostForm(prevState => ({...prevState, date}));
    }

    const handleSetText: ChangeEventHandler<HTMLTextAreaElement> = ({target: { value: text } }) => {
        setFormFieldsError(prevState => ({ ...prevState, text: initialErrorValue }))
        setPostForm(prevState => ({...prevState, text}));
    }

    const handleSetDescription: ChangeEventHandler<HTMLTextAreaElement> = ({target: { value: description } }) => {
        setFormFieldsError(prevState => ({ ...prevState, description: initialErrorValue }))
        setPostForm(prevState => ({...prevState, description}));
    }

    const handleSetImage: ChangeEventHandler<HTMLInputElement> = (event) => {
        const file = event?.target?.files?.[0]
        const reader = new FileReader();

        reader.addEventListener("load", () => setImagePreview(reader.result))

        if (file) {
            reader.readAsDataURL(file)
        } else {
            handleFilePreviewRemove()
        }

        setFormFieldsError(prevState => ({ ...prevState, image: initialErrorValue }))
        setPostForm(prevState => ({...prevState, imageName: event?.target?.value, image: file || null}))
    }

    const handleFormValidate = () => {
        let isValid = true
        for (let field in addPostForm) {
            // @ts-ignore
            if (!addPostForm[field]) {
                setFormFieldsError(prevState => ({ ...prevState, [field]: { error: true, text: "Required Field is Empty" } }))
                isValid = false
            }
        }

        return isValid
    }

    const handlePostCreate = async () => {
        const isValid = handleFormValidate();

        if (isValid) {
            const data = {
                title: addPostForm.title,
                text: addPostForm.text,
                image: addPostForm.imageName,
                lesson_num: 51
            }

            await PostsService.addPost(data, localStorage.getItem("access") || "");
        }
    }

    const handleCancelPostCreation = () => {
        setPostForm(addPostFormInitialState)
        setFormFieldsError(initialFormElementsError)
        setImagePreview("")
    }

    const handleDeletePost = () => {
        navigate(Routes.blog)
    }

    return (
        <form className={styles.form}>
            <div className={styles.inputs}>
                <Input
                    title={"Title"}
                    id={"title"}
                    name={"postTitle"}
                    value={addPostForm.title}
                    type={"text"}
                    placeholder={"Astronauts prep for new solar arrays on nearly spacewalk"}
                    required
                    error={formFieldsError?.title}
                    onChange={handleSetTitle}
                />
                <Input
                    title={"URL"}
                    id={"url"}
                    name={"Url"}
                    type={"text"}
                    placeholder={"iss-us-eva-79"}
                    required
                    value={addPostForm.url}
                    onChange={handleSetUrl}
                />
                <Input
                    title={"Publish at"}
                    id={"date"}
                    name={"Date"}
                    type={"text"}
                    placeholder={"11/03/2022"}
                    value={addPostForm.date}
                    onChange={handleSetDate}
                />
                <FileInput
                    title={"Image"}
                    file={addPostForm.imageName.replace(/.*\\/, "") || "File"}
                    id={"file"}
                    name={"File"}
                    type={"file"}
                    placeholder={"filename.jpeg"}
                    value={addPostForm.imageName}
                    error={formFieldsError?.image}
                    onFileReset={handleFileReset}
                    onChange={handleSetImage}
                />
            </div>
            {!!imagePreview && <img src={imagePreview} className={styles.imgPreview} alt={"img"}/>}
            <TextArea
                title={"Description"}
                id={"description"}
                placeholder={"Add your text"}
                required
                value={addPostForm.description}
                error={formFieldsError?.description}
                onChange={handleSetDescription}
            />
            <TextArea
                title={"Text"}
                id={"text"}
                placeholder={"Add your text"}
                required
                value={addPostForm.text}
                error={formFieldsError?.text}
                onChange={handleSetText}
            />
            <AddPostFormActions
                onDelete={handleDeletePost}
                onCancel={handleCancelPostCreation}
                onSubmit={handlePostCreate}
            />
        </form>
    );
};

export default AddPostForm;