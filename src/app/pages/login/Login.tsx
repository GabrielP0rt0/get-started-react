import { useState } from "react"

export const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleEntrar = () => {
    }

    return (
        <div>
            <form>

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