import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import DashBoard from './pages/dashboard/index';
import Header from './components/Header';
import SideBar from './components/Sidebar';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div className='main d-flex'>
      <div className='sidebarWrapper'>
        <SideBar/>
      </div>
      <div className='content'>
      <Routes>
        <Route path={'/'} exact={true} element={<DashBoard/>}/>
        <Route path={'/dashboard'} exact={true} element={<DashBoard/>}/>
      </Routes>

      </div>

    </div>

    </BrowserRouter>
  );
}

export default App;
