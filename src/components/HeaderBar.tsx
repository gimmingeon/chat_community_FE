import { Container, Nav, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/Header.css"

export default function HeaderBar() {

    return (
        <header className="header-navbar">
            <Navbar bg="success" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">개발자모아</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">게시글</Nav.Link>
                        <Nav.Link href="#features">내 채팅방</Nav.Link>
                        <Nav.Link href="#pricing">내 게시글</Nav.Link>
                    </Nav>

                    <Nav>
                        <Nav.Link href="/signin">마이페이지/로그인</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )

}