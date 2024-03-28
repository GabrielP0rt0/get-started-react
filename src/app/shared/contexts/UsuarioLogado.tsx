import { createContext } from "react";

interface IUsuarioLogadoContextData {
    nomeDoUsuario: string;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

interface IUsuarioLogadoProps {
    children: React.ReactNode;
};

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProps> = ( { children } ) => {
    return (
        <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: "batata" }}>
            {children}
        </UsuarioLogadoContext.Provider>
    )
}