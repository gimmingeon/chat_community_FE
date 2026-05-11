import { Route, Routes } from "react-router-dom"
import PostPage from "./pages/PostPage"
import HeaderBar from "./components/HeaderBar"
import LoginPage from "./pages/LoginPage"
import DetailPostPage from "./pages/DetailPostPage"
import SignUpPage from "./pages/SignUpPage"
import CreatePostPage from "./pages/CreatePostPage"

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
      </Routes>
    </div>
  )
}

export default App
