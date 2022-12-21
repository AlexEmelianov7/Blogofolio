import {FC} from "react";

import {RouteObject} from "react-router-dom";

import Blog from "../pages/Blog/Blog";
import Post from "../pages/Post/Post";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import SignUpSuccess from "../pages/SignUpSuccess/SignUpSuccess";
import SignUpConfirmation from "../pages/SignUpConfirmation/SignUpConfirmation";
import ResetPasswordEmail from "../pages/ResetPasswordEmail/ResetPasswordEmail";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import SearchResults from "../pages/SearchResults/SearchResults";

import {PageProps} from "../types/pageProps";
import AddPost from "../pages/AddPost/AddPost";

export interface IRoute extends RouteObject{
    path: string
    Element: FC<PageProps>
    variant?: string | undefined
}

export interface IRoute extends RouteObject{
    path: string,
    Element: FC<PageProps>,
    title?: string
}

export enum Routes {
    signIn = "/signin",
    signUp = "/signup",
    blog = "/blog",
    post = "/blog/:id",
    search = "/search",
    addPost = "/add-post",
    signUpSuccess = "/signup/success",
    resetPasswordEmail = "/reset-password",
    signUpConfirmation = "/activate/:uid/:token",
    resetPassword = "/reset-password/new-password",
}

export const PUBLIC_ROUTES: IRoute[] = [
    {path: Routes.signIn, Element: SignIn, title: "Sign In"},
    {path: Routes.signUp, Element: SignUp, title: "Sign Up"},
    {path: Routes.blog, Element: Blog, title: "Blog"},
    {path: Routes.post, Element: Post},
    {path: Routes.signUpConfirmation, Element: SignUpConfirmation, title: "Registration confirmation"},
    {path: Routes.resetPasswordEmail, Element: ResetPasswordEmail, title: "Reset password"},
    {path: Routes.resetPassword, Element: ResetPassword, title: "New password"},
    {path: Routes.signUpSuccess, Element: SignUpSuccess, title: "Success"},
]

export const PRIVATE_ROUTES: IRoute[] = [
    ...PUBLIC_ROUTES,
    {path: Routes.search, Element: SearchResults},
    {path: Routes.addPost, Element: AddPost, title: "Add Post"},
]