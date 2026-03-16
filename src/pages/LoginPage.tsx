import { useState } from "react"
import LoginBar from "../components/LoginBar"

export default function LoginPage() {

    const [loginText, setLoginText] = useState({
        id: "",
        password: ""
    })

    const [inputLoginText, setInputLoginText] = useState({
        id: "",
        password: ""
    })

    return (
        <div>
            <LoginBar
                inputLoginText={inputLoginText}
                setInputLoginText={setInputLoginText}
                setLoginText={setLoginText}
            />
        </div>
    )
}