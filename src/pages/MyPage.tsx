import MyInfoBox from "../components/MyInfoBox";
import { useMyInfo } from "../hooks/useMyInfo"

export default function MyPage() {

    const myData = useMyInfo();

    if (!myData.data) {
        return <div>로딩 중...</div>
    }

    return (
        <div>
            <MyInfoBox data={myData.data} />
        </div>
    )
}