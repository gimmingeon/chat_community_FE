import { useState } from "react"
import LoginBar from "../components/LoginBar"
import { useLoginPost } from "../hooks/useLogin"

export default function LoginPage() {

    const [inputLoginText, setInputLoginText] = useState({
        email: "",
        password: ""
    })

    const loginMutation = useLoginPost()

    const handleLogin = () => {
        loginMutation.mutate(inputLoginText)
    }

    return (
        <div>
            <LoginBar
                inputLoginText={inputLoginText}
                setInputLoginText={setInputLoginText}
                handleLogin={handleLogin}
            />
        </div>
    )
}