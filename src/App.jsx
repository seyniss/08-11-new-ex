import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import About from './pages/About'
import Board from './pages/Board'
import BoardDetail from './pages/BoardDetail'
import Home from './pages/Home'
import NotFound from './pages/NotFound'


function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/board' element={<Board />} />
        <Route path='/board/:id' element={<BoardDetail />} />
        <Route path='*' element={<NotFound />} /> {/* 404 처리 */}
      </Routes>
    </div>
  )
}

export default App
