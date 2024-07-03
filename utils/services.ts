export const BASE_URL =
  process.env.NODE_ENV == "production"
    ? "https://crypto-app-backend-sage.vercel.app"
    : "http://localhost:5000";

import { type Transactions } from "../src/component/deposit/BTCDeposit";

type withdrawal = {
  date: string;
  type: string;
  amount: number;
  status: string;
  currency: string;
  externalWallet: string;
  userId?: string;
};

type stake = {
  date: string;
  type: string;
  amount: number;
  status: string;
  currency: string;
  externalWallet: string;
  duration: string;
  userId?: string;
};

type signupType = {
  email: string;
  firstName: string;
  lastName: string;
  userId: string;
};

export const signup = async (body: signupType): Promise<Response> => {
  const res = await fetch(`${BASE_URL}/signup`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return res;
};

export const deposit = async (body: Transactions): Promise<Response> => {
  const res = await fetch(`${BASE_URL}/deposit`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return res;
};

export const getTransactions = async (body?: string): Promise<Response> => {
  const res = await fetch(`${BASE_URL}/getTransactions`, {
    method: "GET",
    headers: {
      'Authorization': `Bearer ${body}`
    }
  });
  return res;
};

export const withdraw = async (body: withdrawal): Promise<Response> => {
  const res = await fetch(`${BASE_URL}/withdraw`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return res;
};

export const stake = async (body: stake): Promise<Response> => {
  const res = await fetch(`${BASE_URL}/stake`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return res;
};
