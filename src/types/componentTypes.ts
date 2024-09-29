import { ChangeEventHandler, FormEventHandler, HTMLAttributes, InputHTMLAttributes, ReactNode } from "react";

export interface ComponentProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    className?: string;
}

export type FormProps = {
    onSubmit: FormEventHandler<HTMLFormElement>
} & ComponentProps

export interface AuthAlternateProps {
    text: string;
    to: string;
}


export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    type?: string;
    label?: string;
    className?: string;
    error?: string; // Optional error message
}

export interface GanderCheckboxProps {
    gander: string | null;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

