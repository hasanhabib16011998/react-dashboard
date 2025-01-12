import React,{useState,useContext} from 'react';
import "./sidebar.css";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaAngleRight,FaAngleDown } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { FaCartArrowDown } from "react-icons/fa";
import { LuMessageSquareText } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { Link } from 'react-router-dom';
import { MyContext } from '../../App';

export default function SideBar() {
    const context = useContext(MyContext);

    const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
    const toggleProductMenu = () => {
        setIsProductMenuOpen(!isProductMenuOpen);
    };
  return (
    <>
    <div className='sidebar'>
        <ul>
            <li>
                <button className='w-100'>
                    <span className='icon'><LuLayoutDashboard/></span>
                    DashBoard
                    <span className='arrow'><FaAngleRight/></span>
                </button>
            </li>
            <li>
                <button className='w-100' onClick={toggleProductMenu}>
                    <span className='icon'><AiOutlineProduct/></span>
                    Products
                    <span className='arrow'>
                    {isProductMenuOpen ? <FaAngleDown /> : <FaAngleRight />}
                    </span>
                </button>
                {isProductMenuOpen && (
                <ul className='submenu'>
                    <li><Link to="#">Product List</Link></li>
                    <li><Link to="#">Product View</Link></li>
                    <li><Link to="#">Product Upload</Link></li>
                </ul>
                 )}
            </li>
            <li>
                <button className='w-100'>
                    <span className='icon'><FaCartArrowDown/></span>
                    Orders
                    <span className='arrow'><FaAngleRight/></span>
                </button>
            </li>
            <li>
                <button className='w-100'>
                    <span className='icon'><LuMessageSquareText/></span>
                    Messages
                    <span className='arrow'><FaAngleRight/></span>
                </button>
            </li>
            <li>
                <button className='w-100'>
                    <span className='icon'><IoIosNotificationsOutline/></span>
                    Notifications
                    <span className='arrow'><FaAngleRight/></span>
                </button>
            </li>
            <li>
                <button className='w-100'>
                    <span className='icon'><IoIosSettings/></span>
                    Settings
                    <span className='arrow'><FaAngleRight/></span>
                </button>
            </li>
            <li>
                <button className='w-100'>
                    <span className='icon'><LuLayoutDashboard/></span>
                    Products
                    <span className='arrow'><FaAngleRight/></span>
                </button>
            </li>
            <li>
                <button className='w-100'>
                    <span className='icon'><LuLayoutDashboard/></span>
                    Products
                    <span className='arrow'><FaAngleRight/></span>
                </button>
            </li>
            <li>
                <button className='w-100'>
                    <span className='icon'><LuLayoutDashboard/></span>
                    Products
                    <span className='arrow'><FaAngleRight/></span>
                </button>
            </li>
            <li>
                <button className='w-100'>
                    <span className='icon'><LuLayoutDashboard/></span>
                    Products
                    <span className='arrow'><FaAngleRight/></span>
                </button>
            </li>
            <li>
                <button className='w-100'>
                    <span className='icon'><LuLayoutDashboard/></span>
                    Products
                    <span className='arrow'><FaAngleRight/></span>
                </button>
            </li>
            <li>
                <button className='w-100'>
                    <span className='icon'><LuLayoutDashboard/></span>
                    Products
                    <span className='arrow'><FaAngleRight/></span>
                </button>
            </li>
            <li>
                <button className='w-100'>
                    <span className='icon'><LuLayoutDashboard/></span>
                    Products
                    <span className='arrow'><FaAngleRight/></span>
                </button>
            </li>
            <li>
                <button className='w-100'>
                    <span className='icon'><LuLayoutDashboard/></span>
                    Products
                    <span className='arrow'><FaAngleRight/></span>
                </button>
            </li>
            <li>
                <button className='w-100'>
                    <span className='icon'><LuLayoutDashboard/></span>
                    Products
                    <span className='arrow'><FaAngleRight/></span>
                </button>
            </li>
            
        </ul>

    </div>
    </>
  )
}
