
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface LoginWithPhoneInput {
    phone?: Nullable<string>;
    password?: Nullable<string>;
}

export interface SignupInput {
    id?: Nullable<string>;
    email?: Nullable<string>;
    username?: Nullable<string>;
    phone?: Nullable<string>;
    password?: Nullable<string>;
}

export interface UserInput {
    id?: Nullable<string>;
    name?: Nullable<string>;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    email?: Nullable<string>;
    role?: Nullable<string>;
    accountType?: Nullable<string>;
    phone?: Nullable<string>;
}

export interface Auth {
    id?: Nullable<string>;
    email?: Nullable<string>;
    google_id?: Nullable<string>;
    username?: Nullable<string>;
    phone?: Nullable<string>;
    role?: Nullable<string>;
    isActive?: Nullable<boolean>;
    emailToken?: Nullable<string>;
    profile?: Nullable<User>;
}

export interface LoginResponse {
    id?: Nullable<string>;
    token?: Nullable<string>;
    isActive?: Nullable<boolean>;
    authId?: Nullable<string>;
}

export interface IQuery {
    me(): Nullable<User> | Promise<Nullable<User>>;
    verifyToken(token?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;
    verifyToChangePassword(id?: Nullable<string>, token?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;
    getAuthUsers(): Nullable<Nullable<Auth>[]> | Promise<Nullable<Nullable<Auth>[]>>;
    getUsers(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
    getUser(id?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;
}

export interface IMutation {
    signup(input?: Nullable<SignupInput>): Nullable<User> | Promise<Nullable<User>>;
    login(email?: Nullable<string>, password?: Nullable<string>): Nullable<LoginResponse> | Promise<Nullable<LoginResponse>>;
    verifyToken(token?: Nullable<string>): Nullable<Auth> | Promise<Nullable<Auth>>;
    verifyOTP(otp?: Nullable<number>): Nullable<User> | Promise<Nullable<User>>;
    resendVerification(id?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;
    forgotPassword(phone?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;
    changeAuthPassword(password: string, oldPassword: string): Nullable<User> | Promise<Nullable<User>>;
    changePassword(id: string, password: string): Nullable<User> | Promise<Nullable<User>>;
    checkEmail(email?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;
    validateUsername(username?: Nullable<string>): Nullable<boolean> | Promise<Nullable<boolean>>;
    validateEmail(email?: Nullable<string>): Nullable<boolean> | Promise<Nullable<boolean>>;
    newPassword(password?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;
    resendOtp(phone?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;
    loginWithPhone(input?: Nullable<LoginWithPhoneInput>): Nullable<LoginResponse> | Promise<Nullable<LoginResponse>>;
    registerWithEmail(email?: Nullable<string>, password?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;
    updateUser(input?: Nullable<SignupInput>): Nullable<User> | Promise<Nullable<User>>;
    deleteUser(id?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;
    uploadImage(image?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;
    changeRole(id?: Nullable<string>, role?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;
    changeAccountType(id?: Nullable<string>, accountType?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;
    deleteAllUsers(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
    createUser(input?: Nullable<UserInput>): Nullable<User> | Promise<Nullable<User>>;
}

export interface User {
    id?: Nullable<string>;
    name?: Nullable<string>;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    google_id?: Nullable<string>;
    isActive?: Nullable<boolean>;
    email?: Nullable<string>;
    emailToken?: Nullable<string>;
    role?: Nullable<string>;
    accountType?: Nullable<Nullable<string>[]>;
    lastSeen?: Nullable<Date>;
    image?: Nullable<string>;
    state?: Nullable<string>;
    lga?: Nullable<string>;
    phone?: Nullable<string>;
}

type Nullable<T> = T | null;
