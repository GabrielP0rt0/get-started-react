import { createContext, useCallback, useState } from "react";

interface IUsuarioLogadoContextData {
    nomeDoUsuario: string;
    logout: () => void;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

interface IUsuarioLogadoProps {
    children: React.ReactNode;
};

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProps> = ( { children } ) => {

    const [name, setName] = useState('')
    


    const handleLogout = useCallback (() => {
        console.log("Logout executado")
    }, [])

    return (
        <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: name, logout: handleLogout }}>
            {children}
        </UsuarioLogadoContext.Provider>
    )
}