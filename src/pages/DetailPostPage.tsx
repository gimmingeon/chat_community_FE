import { useParams } from "react-router-dom";
import DetailPost from "../components/DetailPost";
import { useDetailPostGet } from "../hooks/useDetailPostGet";

export default function DetailPostPage() {

    let { id } = useParams();

    if (!id) {
        return <div>잘못된 접근입니다</div>;
    }

    const { data } = useDetailPostGet(id);

    if (!data) {
        return null
    }


    return (
        <div>
            <DetailPost data={data} />
        </div>
    )
}