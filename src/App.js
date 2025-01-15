import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import DashBoard from './pages/dashboard/index';
import Header from './components/Header';
import SideBar from './components/Sidebar';
import Login from './pages/dashboard/components/Login/index';
import ProductsList from './pages/dashboard/components/ProductList/index';
import ProductDetails from './pages/dashboard/components/ProductDetails';
import { createContext, useEffect, useState } from 'react';
import { SiTrueup } from 'react-icons/si';

const MyContext = createContext();

function App() {
  const[isToggleSideBar,setisToggleSideBar] = useState(false);
  const [isLogin,setLogin] = useState(true);
  const [isHideSideBarandHeader,setisHideSideBarandHeader] = useState(false);
  const [themeMode,setThemeMode] = useState(true);

  const values={
    isToggleSideBar,
    setisToggleSideBar,
    isLogin,
    setLogin,
    isHideSideBarandHeader,
    setisHideSideBarandHeader,
    themeMode,
    setThemeMode

  };
  useEffect(()=>{
    if(themeMode===true){
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      localStorage.setItem('themMode','light');
    }
    else{
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      localStorage.setItem('themMode','dark');
    }

  },[themeMode]);

  return (
    <BrowserRouter>
    <MyContext.Provider value={values}>
    {
      isHideSideBarandHeader !== true &&
      <Header/>
    }
    <div className='main d-flex'>
    {
      isHideSideBarandHeader !== true &&
      <div className={`sidebarWrapper ${isToggleSideBar===true?'toggle':''}`}>
        <SideBar/>
      </div>

    }
      
      <div className={`content ${isHideSideBarandHeader === true && 'full'} ${isToggleSideBar===true?'toggle':''}`}>
      <Routes>
        <Route path={'/'} exact={true} element={<DashBoard/>}/>
        <Route path={'/dashboard'} exact={true} element={<DashBoard/>}/>
        <Route path={'/login'} exact={true} element={<Login/>}/>
        <Route path={'/products-list'} exact={true} element={<ProductsList/>}/>
        <Route path={'/product-details'} exact={true} element={<ProductDetails/>}/>
      </Routes>

      </div>

    </div>
    </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export {MyContext};