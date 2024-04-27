import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';


//pages and component
import Home from './pages/Home';
import Navbar from './components/Navbar';
import DRLForm from './components/DRLForm';
import DRLDetailed from './pages/DRLDetailed';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Admin from './pages/Admin';
import Feedback from './pages/Feedback'

function App() {
  const {user} = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
              <Route
                path='/'
                element={user ? <Home /> : <Navigate to="/login"/>}
              />
              <Route
                path='/feedback/:id'
                element={<Feedback /> }
              />
              <Route
                path='/admin'
                element={<Admin />}
              />
              <Route
                path='/login'
                element={!user ? <Login /> : <Navigate to="/"/>}
              />
              <Route
                path='/signup'
                element={!user ? <Signup /> : <Navigate to="/"/>}
              />
              <Route
                path='/create'
                element={<DRLForm />}
              />
              <Route
                path='/drl/:id'
                element={<DRLDetailed />}
              />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
