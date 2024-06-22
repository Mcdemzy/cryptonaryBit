const BASE_URL = "http://localhost:5000"
import { type DepositDetails } from "../src/component/deposit/BTCDeposit";


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

export const btcDeposit = async (body: DepositDetails): Promise<Response> => {
    const res = await fetch(`${BASE_URL}/btcDeposit`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
    return res;
}