import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Login from './components/account/Login';
import Register from './components/account/register/Register';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element = {<Login />} />
      <Route path='/register' element = {<Register />} />
      
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
