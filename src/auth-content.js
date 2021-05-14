import { createContext } from 'react';

export const AuthContext = createContext({
    isLoggesIn:false,
    login:()=> {},
    logout:()=> {}
});