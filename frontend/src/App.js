import {BrowserRouter, Routes, Route} from 'react-router-dom'

//pages and component
import Home from './pages/Home';
import Navbar from './components/Navbar';
import DRLForm from './components/DRLForm';
import DRLDetailed from './pages/DRLDetailed';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
              <Route
                path='/'
                element={<Home />}
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
