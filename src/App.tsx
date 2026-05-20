import { Route, Routes } from "react-router-dom"
import PostPage from "./pages/PostPage"
import HeaderBar from "./components/HeaderBar"
import LoginPage from "./pages/LoginPage"
import DetailPostPage from "./pages/DetailPostPage"
import SignUpPage from "./pages/SignUpPage"
import CreatePostPage from "./pages/CreatePostPage"
import MyPage from "./pages/MyPage"
import ChatPage from "./pages/ChatPage"

function App() {

  return (
    <div>

      <HeaderBar />

      <Routes>
        <Route path="/" element={<PostPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/post/:id" element={<DetailPostPage />} />
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/createpost" element={<CreatePostPage />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/chat/:id" element={<ChatPage />}></Route>
      </Routes>
    </div>
  )
}

export default App
