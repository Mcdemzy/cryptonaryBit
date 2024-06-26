export const BASE_URL = process.env.NODE_ENV === "production" ? "https://crypto-app-backend-kohl.vercel.app/" : "http://localhost:5000"
import { type Transactions } from "../src/component/deposit/BTCDeposit";

type withdrawal = {
    date: string;
    type: string;
    amount: number;
    status: string;
    currency: string;
    externalWallet: string;
}

type signupType = {
    email: string,
    firstName: string,
    lastName: string,
    password: string,
}

type signinType = {
    email: string,
    password: string,
}

export const signup = async (body: signupType): Promise<Response> => {
    const res = await fetch(`${BASE_URL}/signup`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
    return res;
};

export const login = async (body: signinType): Promise<Response> => {
    const res = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
    return res;
};

export const deposit = async (body: Transactions): Promise<Response> => {
    const res = await fetch(`${BASE_URL}/deposit`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
    return res;
}

export const getTransactions = async (): Promise<Response> => {
    const res = await fetch(`${BASE_URL}/getTransactions`, {
        method: "GET",
        credentials: "include",
    });
    return res;
}

export const withdraw = async (body: withdrawal): Promise<Response> => {
    const res = await fetch(`${BASE_URL}/withdraw`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });
    return res;
}