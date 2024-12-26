import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import DashBoard from './pages/dashboard';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path={'/'} exact={true} element={<DashBoard/>}/>
        <Route path={'/dashboard'} exact={true} element={<DashBoard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
