import { Route, Routes, Link, Router } from "react-router-dom"
import PostPage from "./pages/PostPage"
import HeaderBar from "./components/HeaderBar"

function App() {

  return (
    <div>

      <HeaderBar />

      <Routes>
        <Route path="/" element={<PostPage />} />
        <Route path="/signup" element={<div>로그인</div>} />
      </Routes>
    </div>
  )
}

export default App
