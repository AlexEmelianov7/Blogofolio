import React, {ChangeEventHandler, FC, useState} from 'react';
import {PageProps} from "../../types/pageProps";
import AuthForm, {AuthFormProps} from "../../components/common/AuthForm/AuthForm";
import {Routes} from "../../routes/routes";
import PageContainer from "../../components/common/PageContainer/PageContainer";

import styles from "./SignIn.module.css";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import JwtService from "../../services/jwtService";
import UserService from "../../services/userService";
import {setUserAction} from "../../store/reducers/userReducer";
import {FormElementError} from "../../types/formElement";

interface SignInFormProps {
    email: string
    password: string
}

interface SignInFormErrors {
    email: FormElementError
    password: FormElementError
}

const initialErrorValue = { text: null, error: false};

const initialFormElementsError: SignInFormErrors = {
    password: initialErrorValue,
    email: initialErrorValue
}

const SignIn: FC<PageProps> = ({title = ""}) => {
    const [signInForm, setSignInForm] = useState<SignInFormProps>({email: "", password: ""});
    const [formFieldsError, setFormFieldsError] = useState<SignInFormErrors>(initialFormElementsError)

    const handleSetEmail: ChangeEventHandler<HTMLInputElement> = ({target: { value: email } }) => {
        setFormFieldsError(prevState => ({ ...prevState, email: initialErrorValue }))
        setSignInForm(prevState => ({...prevState, email}));
    }
    const handleSetPassword: ChangeEventHandler<HTMLInputElement> = ({target: { value: password } }) => {
        setFormFieldsError(prevState => ({ ...prevState, password: initialErrorValue }))
        setSignInForm(prevState => ({...prevState, password}));
    }

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const handleUserNavigate = () => navigate(Routes.blog)

    const handleCreateUserToken = async () => {
        const result = await JwtService.createAccessToken(signInForm.email, signInForm.password);

        for (let item in result) {
            localStorage.setItem(item, result[item]);
        }
    }

    const handleUpdateAccessToken = async () => {
        const refresh = localStorage.getItem("refresh");

        if (!!refresh) {
            const { accessToken } = await JwtService.updateAccessToken(refresh);
            localStorage.setItem("access", accessToken);

            return accessToken
        }
    }

    const handleVerifyToken = async () => {
        const token = localStorage.getItem("access");
        const result = {
            token: token,
            valid: false
        }

        if (!!token) {
            await JwtService.verifyToken(token)
            result.valid =true
        }
        return result
    }

    const handleUserInfoCall = async (token: string) => {
        return await UserService.getUser(token);
    }

    const handleUserInfoGet = async () => {
        const {valid , token} = await handleVerifyToken();
        let user;

        if (valid && token) {
            user = await handleUserInfoCall(token);
        }
        else  {
            const token = await handleUpdateAccessToken();
            user = await handleUserInfoCall(token);
        }
        return user
    }

    const handleFormValidate = () => {
        let isValid = true
        for (let field in signInForm) {
            // @ts-ignore
            if (!signInForm[field]) {
                setFormFieldsError(prevState => ({ ...prevState, [field]: { error: true, text: "Required Field is Empty" } }))
                isValid = false
            }
        }

        return isValid
    }


    const handleSignIn = async () => {
        const isValid = handleFormValidate();
        if (isValid) {
            try {
                await handleCreateUserToken();
                const user = await handleUserInfoGet();

                if (!!user) {
                    dispatch(setUserAction(user));
                    handleUserNavigate();
                }

            } catch (e) {
                console.log(e)
            }
        }
    }


    const signInFormConfig: AuthFormProps = {
        inputs: [
            {
                title: "Email",
                id: "email",
                name: "userEmail",
                type: "email",
                value: signInForm.email,
                onChange: handleSetEmail,
                placeholder: "Your email",
                error: formFieldsError?.email
            },
            {
                title: "Password",
                id: "password",
                name: "userPassword",
                type: "password",
                value: signInForm.password,
                onChange: handleSetPassword,
                placeholder: "Your password",
                error: formFieldsError?.password
            }
        ],
        page: Routes.signIn,
        actionButton: {
            onSubmit: handleSignIn,
            title: "Sign In"
        }
    }

    return (
        <PageContainer title={title}>
            <div className={styles.formWrapper}>
                <AuthForm {...signInFormConfig}/>
            </div>
        </PageContainer>
    );
};

export default SignIn;