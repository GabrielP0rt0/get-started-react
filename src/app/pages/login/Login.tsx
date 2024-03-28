import { useRef, useCallback, useEffect, useMemo, useState, useContext } from "react"
import { InputLogin } from "./components/InputLogin"
import { ButtonLogin } from "./components/ButtonLogin"
import { UsuarioLogadoContext } from "../../shared/contexts"

export const Login = () => {

    const inputPasswordRef = useRef<HTMLInputElement>(null)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailLength = useMemo(() => {
        return email.length + password.length;
    }, [email]);

    // useEffect(() => {
    //     if (window.confirm('Deseja realmente logar?')) {
    //         console.log('Logado com sucesso')
    //     } else {
    //         console.log('Logout')
    //     }
    // }, []);

    // useEffect(() => {
    //     console.log('Email: ', email)
    //     console.log('Password: ', password)
    // }, [email, password]);

    const handleEntrar = useCallback(() => {
        console.log(email)
        console.log(password)
        console.log(emailLength)

        if (inputPasswordRef.current !== null) {
            inputPasswordRef.current.focus()
        }

    }, [email, password])

    const { nomeDoUsuario } = useContext(UsuarioLogadoContext);

    return (
        <div>
            <form>

                <p> {nomeDoUsuario} </p>

                <InputLogin
                    label="Email"
                    value={email}
                    onChange={newValue => setEmail(newValue)}
                    onPressEnter={() => inputPasswordRef.current?.focus()}
                />

                <InputLogin 
                    ref={inputPasswordRef}
                    label="Senha"
                    value={password}
                    type="password"
                    onChange={newValue => setPassword(newValue)}
                />

                <ButtonLogin type="submit" onClick={handleEntrar}>
                    Entrar
                </ButtonLogin>

            </form>
        </div>
    )
}