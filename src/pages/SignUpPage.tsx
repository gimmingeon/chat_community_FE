import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import SignupBar from "../components/SignupBar";

export default function SignUpPage() {

    const [inputSignupText, setInputSignupText] = useState({
        email: "",
        password: "",
        passwordConfirm: "",
        nickname: ""
    })

    const signupMutation = useSignup();

    const handleSignup = () => {
        signupMutation.mutate(inputSignupText)
    }

    return (
        <div>
            <SignupBar
                inputSignupText={inputSignupText}
                setInputSignupText={setInputSignupText}
                handleSignup={handleSignup}
            />
        </div>
    )
}