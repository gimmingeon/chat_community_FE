import { Route, Routes } from "react-router-dom"
import PostPage from "./pages/PostPage"
import HeaderBar from "./components/HeaderBar"
import LoginPage from "./pages/LoginPage"

function App() {

  return (
    <div>

      <HeaderBar />

      <Routes>
        <Route path="/" element={<PostPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  )
}

export default App
