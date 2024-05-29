import './App.css';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
      
    
  );
}

export default App;
