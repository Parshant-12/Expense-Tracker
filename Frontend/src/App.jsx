import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import Login from '../Components/Authentication/Login'
import Signup from '../Components/Authentication/SignUp'
import Dashboard from '../Components/Pages/Dashboard'
import Analysis from '../Components/Pages/Analysis'
function App() {
  const Root = () => {
    const isAuthenticated = false;
    return isAuthenticated ? (<Navigate to="/Dashboard" />) : (<Navigate to="/Login" />)
  }
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Root />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/SignUp' element={<Signup />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/Analysis' element={<Analysis />} />
        </Routes>
      </Router >
    </>
  )
}

export default App
