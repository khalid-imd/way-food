import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Landing from './landing'

const Routing = () => {
  return (
    <Router>
        <Routes>
            <Route exact path='/' element={<Landing/>} />
        </Routes>
    </Router>
  )
}

export default Routing 