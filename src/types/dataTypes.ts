export interface RootState {
    auth: AuthState;
}

export interface AuthState {
    authUser: UserDatayType | null;
    isAuthenticated: boolean;
}

export interface UserDatayType {
    id: string;
    fullName: string;
    email: string;
    profilePic: string;
}

export interface LoginDataType {
    email: string;
    password: string;
}

export type SignUpDataType = {
    fullName: string;
    confirmPassword: string;
    gender: string;
} & LoginDataType

export interface ErrorDataType {
    message: string;
    success: boolean;
}