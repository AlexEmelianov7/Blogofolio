import React, {ChangeEventHandler, FC, useState} from 'react';
import {PageProps} from "../../types/pageProps";
import {Routes} from "../../routes/routes";
import AuthForm, {AuthFormProps} from "../../components/common/AuthForm/AuthForm";
import PageContainer from "../../components/common/PageContainer/PageContainer";

import styles from "./SignUp.module.css";
import {useDispatch} from "react-redux";
import {handleUserSignUp} from "../../store/asyncActions/userActions";
import {useNavigate} from "react-router-dom";
import {FormElementError} from "../../types/formElement";

interface SignUpFormProps {
    name: string
    email: string
    password: string
    confirmPassword: string
}

interface SignUpFormErrors {
    name: FormElementError
    email: FormElementError
    password: FormElementError
    confirmPassword: FormElementError
}

const initialErrorValue = { text: null, error: false};

const initialFormElementsError: SignUpFormErrors = {
    name: initialErrorValue,
    email: initialErrorValue,
    password: initialErrorValue,
    confirmPassword: initialErrorValue
}

const SignUp: FC<PageProps> = ({title = ""}) => {
    const [signUpForm, setSignUpForm] = useState<SignUpFormProps>({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [formFieldsError, setFormFieldsError] = useState<SignUpFormErrors>(initialFormElementsError);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUserRedirect = () => navigate( `${Routes.signUpConfirmation}?email=${signUpForm.email}`);

    const handleSubmit = () => {
        const isValid = handleFormValidate();

        if (isValid) {
            // @ts-ignore
            dispatch(handleUserSignUp(signUpForm.email, signUpForm.password, signUpForm.name, handleUserRedirect));
        }
    }

    const handleSetName: ChangeEventHandler<HTMLInputElement> = ({target: { value: name } }) => {
        setFormFieldsError(prevState => ({ ...prevState, name: initialErrorValue }))
        setSignUpForm(prevState => ({...prevState, name}));
    }
    const handleSetEmail: ChangeEventHandler<HTMLInputElement> = ({target: { value: email } }) => {
        setFormFieldsError(prevState => ({ ...prevState, email: initialErrorValue }))
        setSignUpForm(prevState => ({...prevState, email}));
    }
    const handleSetPassword: ChangeEventHandler<HTMLInputElement> = ({target: { value: password } }) => {
        setFormFieldsError(prevState => ({ ...prevState, password: initialErrorValue }))
        setSignUpForm(prevState => ({...prevState, password}));
    }
    const handleSetConfirmPassword: ChangeEventHandler<HTMLInputElement> = ({target: { value: confirmPassword } }) => {
        setFormFieldsError(prevState => ({ ...prevState, confirmPassword: initialErrorValue }))
        setSignUpForm(prevState => ({...prevState, confirmPassword}));
    }

    const handleFormValidate = () => {
        let isValid = true
        for (let field in signUpForm) {
            // @ts-ignore
            if (!signUpForm[field]) {
                setFormFieldsError(prevState => ({ ...prevState, [field]: { error: true, text: "Required Field is Empty" } }))
                isValid = false
            }
        }

        return isValid
    }

    const signUpFormConfig: AuthFormProps = {
        inputs: [
            {
                title: "Name",
                id: "name",
                name: "userName",
                value: signUpForm.name,
                onChange: handleSetName,
                placeholder: "Your name",
                error: formFieldsError.name
            },
            {
                title: "Email",
                id: "email",
                name: "userEmail",
                value: signUpForm.email,
                onChange: handleSetEmail,
                placeholder: "Your email",
                error: formFieldsError.email
            },
            {
                title: "Password",
                id: "password",
                name: "userPassword",
                type: "password",
                value: signUpForm.password,
                onChange: handleSetPassword,
                placeholder: "Your password",
                error: formFieldsError.password
            },
            {
                title: "Confirm Password",
                id: "confirmPassword",
                name: "userConfirmPassword",
                type: "password",
                value: signUpForm.confirmPassword,
                onChange: handleSetConfirmPassword,
                placeholder: "Confirm password",
                error: formFieldsError.confirmPassword
            }
        ],
        page: Routes.signUp,
        actionButton: {
            onSubmit: handleSubmit,
            title: "Sign Up"
        }
    }


    return (
        <PageContainer title={title}>
            <div className={styles.formWrapper}>
                <AuthForm {...signUpFormConfig}/>
            </div>
        </PageContainer>
    );
};

export default SignUp;