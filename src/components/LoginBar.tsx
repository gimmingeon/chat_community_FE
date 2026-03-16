interface LoginBarProps {
    inputLoginText: { id: string, password: string }
    setInputLoginText: React.Dispatch<React.SetStateAction<any>>
    setLoginText: React.Dispatch<React.SetStateAction<any>>
}

export default function LoginBar({
    inputLoginText,
    setInputLoginText,
    setLoginText

}: LoginBarProps) {

    const handleInputLogin = () => {
        setLoginText((prev: any) => ({
            ...prev,
            id: inputLoginText.id,
            password: inputLoginText.password
        }))
    }

    return (
        <div>
            <input
                type="email"
                placeholder="이메일"
                value={inputLoginText.id}
                onChange={(e) =>
                    setInputLoginText((prev: any) => ({
                        ...prev,
                        id: e.target.value
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
            <button onClick={handleInputLogin}>로그인</button>
        </div>
    )
}