import { useEffect, useMemo, useState } from "react"

export const Login = () => {

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
    
    const handleEntrar = () => {
        console.log(email)
        console.log(password)
    }



    return (
        <div>
            <form>
                <p>Quantidade de caracteres no email = {emailLength}</p>

                <label>
                    <span>Email</span>
                    <input value={email} onChange={e => setEmail(e.target.value)}/>
                </label>

                <label>
                    <span>Password</span>
                    <input type="password" value={password} onChange={p => setPassword(p.target.value)}/>
                </label>

                <button type="submit" onClick={handleEntrar}>
                    Entrar
                </button>

            </form>
        </div>
    )
}