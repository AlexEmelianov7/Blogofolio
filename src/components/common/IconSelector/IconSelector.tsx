import React, {FC, MouseEventHandler} from 'react';

import styles from "./IconSelector.module.css";
import {WithChildren} from "../../../types/withChildren";

export interface IconSelectorProps {
    id: string
    onClick?: MouseEventHandler
    disabled?: boolean
    description?: string
    className?: string
    svgClassName?: string
    dataRoute?: string
}

export const IconSelector: FC<IconSelectorProps & WithChildren> = (
    {
        id,
        onClick,
        description,
        className,
        svgClassName,
        children,
        disabled = false,
        dataRoute
    }) => {
    switch (id) {
        case "thumbsUp":
            return (
                <button className={`${styles.btn} ${className}`} onClick={onClick}>
                    <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={svgClassName} fillRule="evenodd" clipRule="evenodd" d="M18.292 19.65C18.218 20.136 17.794 20.5 17.292 20.5H17.28H7V10.712L10.608 2.594C11.415 2.852 12 3.608 12 4.5V8.5C12 9.052 12.447 9.5 13 9.5H18.674C18.728 9.502 18.78 9.503 18.832 9.511C19.097 9.551 19.33 9.692 19.488 9.907C19.646 10.122 19.712 10.385 19.672 10.648L18.292 19.65ZM5 20.5H3C2.449 20.5 2 20.051 2 19.5V12.5C2 11.948 2.449 11.5 3 11.5H5V20.5ZM21.099 8.72C20.623 8.075 19.925 7.654 19.132 7.533C18.972 7.509 18.814 7.504 18.66 7.5H14V4.5C14 2.294 12.206 0.5 10 0.5C9.605 0.5 9.247 0.733 9.086 1.093L5.35 9.5H3C1.346 9.5 0 10.845 0 12.5V19.5C0 21.154 1.346 22.5 3 22.5H17.269H17.304C18.776 22.5 20.048 21.409 20.269 19.951L21.648 10.95C21.77 10.157 21.574 9.366 21.099 8.72Z" fill="#313037"/>
                    </svg>
                </button>
            );
        case "thumbsDown":
            return (
                <button className={`${styles.btn} ${className}`} onClick={onClick}>
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={svgClassName} fillRule="evenodd" clipRule="evenodd" d="M20.3665 10.424C20.2535 11.052 19.6965 11.513 19.0365 11.501H17.3665V2.501H19.0545C19.6965 2.452 20.2525 2.948 20.3665 3.577V10.424ZM15.3665 12.288L11.7585 20.406C10.9515 20.148 10.3665 19.391 10.3665 18.501V14.501C10.3665 13.948 9.91853 13.501 9.36653 13.501H3.69753C3.65153 13.498 3.59053 13.499 3.53353 13.49C2.98853 13.407 2.61253 12.896 2.69453 12.352L4.07553 3.351C4.14953 2.861 4.60153 2.522 5.08653 2.501H15.3665V12.288ZM22.3575 3.366C22.1355 1.723 20.7305 0.5 19.0945 0.5C19.0755 0.5 19.0555 0.5 19.0365 0.501H5.09753C3.61053 0.511 2.32053 1.581 2.09853 3.049L0.717531 12.051C0.470531 13.686 1.59853 15.218 3.23053 15.466C3.39053 15.491 3.55353 15.503 3.70653 15.501H8.36653V18.501C8.36653 20.707 10.1605 22.501 12.3665 22.501C12.7625 22.501 13.1195 22.268 13.2805 21.907L17.0155 13.501H19.0185C20.6885 13.506 22.1325 12.298 22.3575 10.635C22.3635 10.591 22.3665 10.546 22.3665 10.501V3.501C22.3665 3.456 22.3635 3.411 22.3575 3.366Z" fill="#313037"/>
                    </svg>
                </button>
            );
        case "bookmark":
            return (
                <button className={`${styles.btn} ${className}`} onClick={onClick}>
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={svgClassName} fillRule="evenodd" clipRule="evenodd" d="M8 13C8.204 13 8.407 13.062 8.581 13.187L14 17.057V3C14 2.449 13.552 2 13 2H3C2.449 2 2 2.449 2 3V17.057L7.419 13.187C7.593 13.062 7.796 13 8 13ZM15 20C14.795 20 14.592 19.937 14.419 19.813L8 15.229L1.581 19.813C1.277 20.032 0.875 20.062 0.542 19.89C0.209 19.718 0 19.375 0 19V3C0 1.346 1.346 0 3 0H13C14.654 0 16 1.346 16 3V19C16 19.375 15.791 19.718 15.458 19.89C15.313 19.963 15.156 20 15 20Z" fill="#313037"/>
                    </svg>
                    {description}
                </button>
            );
        case "bookmarkFav":
            return (
                <button className={`${styles.btn} ${className}`} onClick={onClick}>
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={svgClassName} fillRule="evenodd" clipRule="evenodd" d="M15 20C14.795 20 14.592 19.937 14.419 19.813L8 15.229L1.581 19.813C1.277 20.032 0.875 20.062 0.542 19.89C0.209 19.718 0 19.375 0 19V3C0 1.346 1.346 0 3 0H13C14.654 0 16 1.346 16 3V19C16 19.375 15.791 19.718 15.458 19.89C15.313 19.963 15.156 20 15 20Z" fill="#313037"/>
                    </svg>
                </button>
            );
        case "dots":
            return (
                <button className={`${styles.btn} ${className}`} onClick={onClick}>
                    <svg width="20" height="4" viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={svgClassName} fillRule="evenodd" clipRule="evenodd" d="M0 2C0 3.10267 0.897333 4 2 4C3.10267 4 4 3.10267 4 2C4 0.897333 3.10267 0 2 0C0.897333 0 0 0.897333 0 2ZM10 4C8.89733 4 8 3.10267 8 2C8 0.897333 8.89733 0 10 0C11.1027 0 12 0.897333 12 2C12 3.10267 11.1027 4 10 4ZM18 4C16.8973 4 16 3.10267 16 2C16 0.897333 16.8973 0 18 0C19.1027 0 20 0.897333 20 2C20 3.10267 19.1027 4 18 4Z" fill="#313037"/>
                    </svg>
                    {children}
                </button>
            );
        case "search":
            return (
                <button className={`${styles.btn} ${className}`} onClick={onClick} type={"button"}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M20 20L16 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            );
        case "cancel":
            return (
                <button className={`${styles.btn} ${className}`} onClick={onClick} type={"button"}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={svgClassName} fillRule="evenodd" clipRule="evenodd" d="M17.6569 16.2426L13.4142 12L17.6569 7.75735C18.0472 7.36702 18.0472 6.73346 17.6569 6.34313C17.2665 5.95281 16.633 5.95281 16.2426 6.34313L12 10.5858L7.75736 6.34313C7.36704 5.95281 6.73347 5.95281 6.34315 6.34313C5.95282 6.73346 5.95282 7.36702 6.34315 7.75735L10.5858 12L6.34315 16.2426C5.95212 16.6337 5.95282 17.2665 6.34315 17.6568C6.73347 18.0472 7.36633 18.0479 7.75736 17.6568L12 13.4142L16.2426 17.6568C16.6337 18.0479 17.2665 18.0472 17.6569 17.6568C18.0472 17.2665 18.0479 16.6337 17.6569 16.2426Z" fill="white"/>
                    </svg>
                </button>
            );
        case "modalClose":
            return (
                <button className={`${styles.btn} ${className}`} onClick={onClick}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={svgClassName} d="M10.7431 10L19.8461 0.897011C20.0513 0.691822 20.0513 0.359146 19.8461 0.153957C19.6409 -0.0512316 19.3082 -0.0512316 19.103 0.153957L10 9.25688L0.897058 0.153892C0.69187 -0.0512972 0.359194 -0.0512972 0.154006 0.153892C-0.0512479 0.35908 -0.0512479 0.691757 0.154006 0.896946L9.25691 10L0.15394 19.103C-0.0513135 19.3082 -0.0513135 19.6409 0.15394 19.8461C0.256535 19.9487 0.390984 20 0.525499 20C0.660015 20 0.794464 19.9487 0.897058 19.8461L10 10.7431L19.103 19.8461C19.2056 19.9487 19.34 20 19.4745 20C19.6091 20 19.7435 19.9487 19.8461 19.8461C20.0513 19.6409 20.0513 19.3082 19.8461 19.103L10.7431 10Z" fill="#14141F"/>
                    </svg>
                </button>
            );
        case "delete":
            return (
                <button className={`${styles.btn} ${className}`} onClick={onClick} type={"reset"}>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={svgClassName} fillRule="evenodd" clipRule="evenodd" d="M13.5839 11.8426L17.5184 7.62478L16.387 6.49341L12.4335 10.7315L8.30466 6.74365L7.15381 7.8552L11.3426 11.901L7.40813 16.1188L8.5395 17.2502L12.493 13.012L16.6218 16.9999L17.7726 15.8883L13.5839 11.8426Z" fill="#FD3419"/>
                    </svg>
                </button>
            );
        case "arrowPrev":
            return (
                <button className={`${styles.btn} ${className}`} onClick={onClick} type={"button"} disabled={disabled} data-route={dataRoute}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={svgClassName} fillRule="evenodd" clipRule="evenodd" d="M10.7099 5.29238C10.8999 5.49238 10.9999 5.74238 10.9999 6.00238C10.9999 6.26238 10.8999 6.51238 10.7099 6.71238L6.40994 11.0024L19.9999 11.0024C20.5499 11.0024 20.9999 11.4524 20.9999 12.0024C20.9999 12.5524 20.5499 13.0024 19.9999 13.0024L6.40994 13.0024L10.7099 17.2924C11.0999 17.6824 11.0999 18.3224 10.7099 18.7124C10.3199 19.1024 9.67994 19.1024 9.28994 18.7124L3.28994 12.7124C3.19994 12.6224 3.12994 12.5124 3.07994 12.3924C3.05994 12.3424 3.03994 12.3024 3.03994 12.2524C2.98994 12.0924 2.98994 11.9124 3.03994 11.7524C3.03994 11.7024 3.05994 11.6624 3.07994 11.6124C3.12994 11.4924 3.19994 11.3824 3.28994 11.2924L9.28994 5.29238C9.67994 4.90238 10.3199 4.90238 10.7099 5.29238Z" fill="#313037"/>
                    </svg>
                    {description}
                    {children}
                </button>
            );
        case "arrowNext":
            return (
                <button className={`${styles.btn} ${className}`} onClick={onClick} type={"button"} disabled={disabled} data-route={dataRoute}>
                    {description}
                    {children}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={svgClassName} fillRule="evenodd" clipRule="evenodd" d="M13.2901 18.7076C13.1001 18.5076 13.0001 18.2576 13.0001 17.9976C13.0001 17.7376 13.1001 17.4876 13.2901 17.2876L17.5901 12.9976L4.00006 12.9976C3.45006 12.9976 3.00006 12.5476 3.00006 11.9976C3.00006 11.4476 3.45006 10.9976 4.00006 10.9976L17.5901 10.9976L13.2901 6.70762C12.9001 6.31762 12.9001 5.67762 13.2901 5.28762C13.6801 4.89762 14.3201 4.89762 14.7101 5.28762L20.7101 11.2876C20.8001 11.3776 20.8701 11.4876 20.9201 11.6076C20.9401 11.6576 20.9601 11.6976 20.9601 11.7476C21.0101 11.9076 21.0101 12.0876 20.9601 12.2476C20.9601 12.2976 20.9401 12.3376 20.9201 12.3876C20.8701 12.5076 20.8001 12.6176 20.7101 12.7076L14.7101 18.7076C14.3201 19.0976 13.6801 19.0976 13.2901 18.7076Z" fill="#313037"/>
                    </svg>
                </button>
            )
        default:
            return <svg></svg>
    }
};

export default IconSelector;