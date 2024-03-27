import { StateStorage } from "zustand/middleware"
import Cookies from 'js-cookie';

export const cookieStorage: StateStorage = {
    getItem: (name: string): string | null => {
        return Cookies.get(name) || null
    },
    setItem: (name: string, value: string): void => {
        Cookies.set(name, value, { path: "/", expires: 1 })
    },
    removeItem: (name: string): void => {
        Cookies.remove(name, { path: "/" });
    },
};