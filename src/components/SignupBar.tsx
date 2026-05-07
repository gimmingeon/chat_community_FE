import type { SignupType } from "../type/SignupType"
import "../css/LoginBar.css"

interface SignupProps {
    inputSignupText: SignupType
    setInputSignupText: React.Dispatch<React.SetStateAction<SignupType>>
    handleSignup: () => void
}

export default function SignupBar({
    inputSignupText,
    setInputSignupText,
    handleSignup
}: SignupProps) {
    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-title">회원가입</div>
                <input
                    className="login-input"
                    type="text"
                    placeholder="이메일"
                    value={inputSignupText.email}
                    onChange={(e) =>
                        setInputSignupText((prev: any) => ({
                            ...prev,
                            email: e.target.value
                        }))
                    }
                />

                <input
                    className="login-input"
                    type="password"
                    placeholder="비밀번호"
                    value={inputSignupText.password}
                    onChange={(e) =>
                        setInputSignupText((prev: any) => ({
                            ...prev,
                            password: e.target.value
                        }))
                    }
                />

                <input
                    className="login-input"
                    type="password"
                    placeholder="비밀번호 확인"
                    value={inputSignupText.passwordConfirm}
                    onChange={(e) =>
                        setInputSignupText((prev: any) => ({
                            ...prev,
                            passwordConfirm: e.target.value
                        }))
                    }
                />

                <input
                    className="login-input"
                    type="text"
                    placeholder="닉네임"
                    value={inputSignupText.nickname}
                    onChange={(e) =>
                        setInputSignupText((prev: any) => ({
                            ...prev,
                            nickname: e.target.value
                        }))
                    }
                />

                <button className="login-button" onClick={handleSignup}>
                    회원가입
                </button>
            </div>
        </div>
    )
}