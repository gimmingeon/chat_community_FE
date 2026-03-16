interface LoginBarProps {
    inputLoginText: { email: string, password: string }
    setInputLoginText: React.Dispatch<React.SetStateAction<any>>
    handleLogin: () => void
}

export default function LoginBar({
    inputLoginText,
    setInputLoginText,
    handleLogin
}: LoginBarProps) {

    return (
        <div>
            <input
                type="text"
                placeholder="이메일"
                value={inputLoginText.email}
                onChange={(e) =>
                    setInputLoginText((prev: any) => ({
                        ...prev,
                        email: e.target.value
                    }))
                }
            />

            <input
                type="password"
                placeholder="비밀번호"
                value={inputLoginText.password}
                onChange={(e) =>
                    setInputLoginText((prev: any) => ({
                        ...prev,
                        password: e.target.value
                    }))
                }
            />
            <button onClick={handleLogin}>로그인</button>
        </div>
    )
}