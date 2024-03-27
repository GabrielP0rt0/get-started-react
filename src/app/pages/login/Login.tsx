import { useRef, useCallback, useEffect, useMemo, useState } from "react"
import { InputLogin } from "./components/InputLogin"

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

        if (inputPasswordRef.current !== null) {
            inputPasswordRef.current.focus()
        }

    }, [email, password])



    return (
        <div>
            <form>
                <p>Quantidade de caracteres no email = {emailLength}</p>

                <InputLogin
                    label="Email"
                    value={email}
                    onChange={newValue => setEmail(newValue)}
                    onPressEnter={() => inputPasswordRef.current?.focus()}
                />

                <InputLogin 
                    label="Senha"
                    value={password}
                    type="password"
                    onChange={newValue => setPassword(newValue)}
                />

                <button type="submit" onClick={handleEntrar}>
                    Entrar
                </button>

            </form>
        </div>
    )
}