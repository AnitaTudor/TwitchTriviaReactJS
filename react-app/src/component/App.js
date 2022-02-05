import React from "react";
import Signup from "./Signup";
import { Container } from 'react-bootstrap';
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./FrogotPassword"
import UpdateProfile from "./UpdateProfile";
import Quiz from "./Quiz"

function App() {

  return (

    <Container className="d-flex align-items-center justify-content-center main-container "
      style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route path='/' element={<PrivateRoute />}>
                <Route path='/' element={<Dashboard />} />
              </Route>
              <Route path='/update-profile' element={<PrivateRoute />}>
                <Route path='/update-profile' element={<UpdateProfile />} />
              </Route>
              <Route path='/quiz' element={<PrivateRoute />}>
                <Route path='/quiz' element={<Quiz />} />
              </Route>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>

  )
}
export default App
