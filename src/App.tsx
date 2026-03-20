import { Route, Routes } from "react-router-dom"
import PostPage from "./pages/PostPage"
import HeaderBar from "./components/HeaderBar"
import LoginPage from "./pages/LoginPage"
import DetailPostPage from "./pages/DetailPostPage"

function App() {

  return (
    <div>

      <HeaderBar />

      <Routes>
        <Route path="/" element={<PostPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/post/:id" element={<DetailPostPage />} />
      </Routes>
    </div>
  )
}

export default App
