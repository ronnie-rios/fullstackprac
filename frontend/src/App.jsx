import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Individual from './pages/Individual';
import CreatePage from './pages/CreatePage';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Individual />} />
        <Route path='/create' element={<CreatePage />} />
      </Routes>
    </>
  )
}

export default App
