import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import DashBoard from './pages/dashboard/index';
import Header from './components/Header';
import SideBar from './components/Sidebar';
import { createContext, useEffect, useState } from 'react';

const MyContext = createContext();

function App() {
  const[isToggleSideBar,setisToggleSideBar] = useState(false);
  const values={
    isToggleSideBar,
    setisToggleSideBar

  };

  return (
    <BrowserRouter>
    <MyContext.Provider value={values}>
    <Header/>
    <div className='main d-flex'>
      <div className={`sidebarWrapper ${isToggleSideBar===true?'toggle':''}`}>
        <SideBar/>
      </div>
      <div className={`content ${isToggleSideBar===true?'toggle':''}`}>
      <Routes>
        <Route path={'/'} exact={true} element={<DashBoard/>}/>
        <Route path={'/dashboard'} exact={true} element={<DashBoard/>}/>
      </Routes>

      </div>

    </div>
    </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export {MyContext};