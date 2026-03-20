import { Container, Nav, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/Header.css"
import { useMyInfo } from "../hooks/useMyInfo";
import { useLogout } from "../hooks/useLogout";

export default function HeaderBar() {

    const { data, isLoading } = useMyInfo();

    const { mutate: logout } = useLogout();

    // !! : 데이터가 있으면 true, 없으면 false
    const isLogin = !!data;

    if (isLoading) return null;

    return (
        <header className="header-navbar">
            <Navbar data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">개발자모아</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">게시글</Nav.Link>
                        <Nav.Link href="#features">내 채팅방</Nav.Link>
                        <Nav.Link href="#pricing">내 게시글</Nav.Link>
                    </Nav>

                    <Nav>
                        {
                            isLogin ? (
                                <Nav>
                                    <Nav.Link href="/my">마이페이지</Nav.Link>
                                    <Nav.Link onClick={() => logout()}>로그아웃</Nav.Link>
                                </Nav>

                            ) : (
                                <Nav.Link href="/login">로그인</Nav.Link>
                            )
                        }
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )

}