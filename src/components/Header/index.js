import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { useState } from "react";
import logo from '../../assets/images/logo.png';
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import SearchBox from "./searchBox";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { GoBell } from "react-icons/go";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { MdPersonAdd } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { FaShieldHalved } from "react-icons/fa6";
import { MyContext } from "../../App";
import { Button } from "bootstrap";






const Header = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isOpenNotifications,setOpenNotifications] = React.useState(false);
    const openAccounts = Boolean(anchorEl);
    const openNotificationMenu = Boolean(isOpenNotifications);
    const [isLogin,setLogin] = useState(false);

    const context = useContext(MyContext);

    const openMyAcc = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const closeMyAcc = () => {
      setAnchorEl(null);
    };
    const openNotifications = (event) => {
        setOpenNotifications(true);
      };
      const closeNotifications = () => {
        setOpenNotifications(false);
      };
    return(
        <>
        <header className="d-flex align-items-center">
        <div className="container-fluid w-100">
        <div className="row d-flex align-items-center">
            <div className="col-sm-2 part1">
                <Link to={'./'} className="d-flex align-items-center logo">
                    <img src={logo} alt={logo}/>
                    <span className="ml-2">MY JYOTI</span>
                </Link>
            </div>

            <div className="col-sm-3 d-flex align-items-center part2 pl-4">
                <button className="rounded-circle mr-3" onClick={()=>{context.setisToggleSideBar(!context.isToggleSideBar)}}>
                    {
                        context.isToggleSideBar===false ? <MdMenuOpen/>:<MdOutlineMenu/>
                    }
                </button>
                <SearchBox/>
            </div>

            <div className="col-sm-7 d-flex justify-content-end align-items-center part3 pl-4">
                <button className="rounded-circle mr-3"><CiLight/></button>
                <button className="rounded-circle mr-3"><MdDarkMode/></button>
                <button className="rounded-circle mr-3"><MdOutlineMailOutline/></button>
                <button className="rounded-circle mr-3"><IoCartOutline/></button>
                <div className="notificationWrapper position-relative">
                    <button className="rounded-circle mr-3" onClick={openNotifications}><GoBell/></button>
                    <Menu
                        anchorEl={isOpenNotifications}
                        id="notifcations"
                        className="notification-menu dropdown-list"
                        open={openNotificationMenu}
                        onClose={closeNotifications}
                        onClick={closeNotifications}
                        slotProps={{
                        paper: {
                            elevation: 0,
                            sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 10,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                            },
                        },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        <div className="head pl-3 pb-0">
                            <h4>Orders(12)</h4>
                        </div>
                        <Divider/>
                        <div className="scrollView">
                        <MenuItem onClick={closeNotifications}>
                        <div className="d-flex">
                        <div>
                        <div className="user-image">
                            <span className="rounded-circle">
                                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"/>
                            </span>
                        </div>
                        </div>
                        <div className="dropdownInfo">
                            <h4>
                                <span>
                                    <b>Mahmudul </b> 
                                    added to his favourite list 
                                    <b> Leather belt steve madden</b>
                                </span>
                            </h4>
                            <p className="text-sky mb-0">A few Seconds ago</p>
                        </div>
                        </div>
                        </MenuItem>
                        <MenuItem onClick={closeNotifications}>
                        <div className="d-flex">
                        <div>
                        <div className="user-image">
                            <span className="rounded-circle">
                                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"/>
                            </span>
                        </div>
                        </div>
                        <div className="dropdownInfo">
                            <h4>
                                <span>
                                    <b>Mahmudul </b> 
                                    added to his favourite list 
                                    <b> Leather belt steve madden</b>
                                </span>
                            </h4>
                            <p className="text-sky mb-0">A few Seconds ago</p>
                        </div>
                        </div>
                        </MenuItem>
                        <MenuItem onClick={closeNotifications}>
                        <div className="d-flex">
                        <div>
                        <div className="user-image">
                            <span className="rounded-circle">
                                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"/>
                            </span>
                        </div>
                        </div>
                        <div className="dropdownInfo">
                            <h4>
                                <span>
                                    <b>Mahmudul </b> 
                                    added to his favourite list 
                                    <b> Leather belt steve madden</b>
                                </span>
                            </h4>
                            <p className="text-sky mb-0">A few Seconds ago</p>
                        </div>
                        </div>
                        </MenuItem>
                        <MenuItem onClick={closeNotifications}>
                        <div className="d-flex">
                        <div>
                        <div className="user-image">
                            <span className="rounded-circle">
                                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"/>
                            </span>
                        </div>
                        </div>
                        <div className="dropdownInfo">
                            <h4>
                                <span>
                                    <b>Mahmudul </b> 
                                    added to his favourite list 
                                    <b> Leather belt steve madden</b>
                                </span>
                            </h4>
                            <p className="text-sky mb-0">A few Seconds ago</p>
                        </div>
                        </div>
                        </MenuItem>
                        <MenuItem onClick={closeNotifications}>
                        <div className="d-flex">
                        <div>
                        <div className="user-image">
                            <span className="rounded-circle">
                                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"/>
                            </span>
                        </div>
                        </div>
                        <div className="dropdownInfo">
                            <h4>
                                <span>
                                    <b>Mahmudul </b> 
                                    added to his favourite list 
                                    <b> Leather belt steve madden</b>
                                </span>
                            </h4>
                            <p className="text-sky mb-0">A few Seconds ago</p>
                        </div>
                        </div>
                        </MenuItem>
                        <MenuItem onClick={closeNotifications}>
                        <div className="d-flex">
                        <div>
                        <div className="user-image">
                            <span className="rounded-circle">
                                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"/>
                            </span>
                        </div>
                        </div>
                        <div className="dropdownInfo">
                            <h4>
                                <span>
                                    <b>Mahmudul </b> 
                                    added to his favourite list 
                                    <b> Leather belt steve madden</b>
                                </span>
                            </h4>
                            <p className="text-sky mb-0">A few Seconds ago</p>
                        </div>
                        </div>
                        </MenuItem>
                        <MenuItem onClick={closeNotifications}>
                        <div className="d-flex">
                        <div>
                        <div className="user-image">
                            <span className="rounded-circle">
                                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"/>
                            </span>
                        </div>
                        </div>
                        <div className="dropdownInfo">
                            <h4>
                                <span>
                                    <b>Mahmudul </b> 
                                    added to his favourite list 
                                    <b> Leather belt steve madden</b>
                                </span>
                            </h4>
                            <p className="text-sky mb-0">A few Seconds ago</p>
                        </div>
                        </div>
                        </MenuItem>
                        <div className="pl-3 pr-3 w-100 pt-3 pb-1">
                        <button className="btn-blue w-100">View All Notifications</button></div>
                        </div>
                    </Menu>
                </div>
                {
                    isLogin!==true? <button className="btn-blue btn-lg"> Sign In</button>
                    :
                    <>
                    <div className="myAccWrapper">
                    <div className="myAcc d-flex align-items-center">
                    <div className="user-image rounded-circle" onClick={openMyAcc}>
                    <span className="user-img">
                            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"/>
                        </span>
                    </div>
                    <div className="user-info">
                        <h4>Guest User</h4>
                        <p>guestuser@gmail.com</p>
                    </div>
                    </div>
                    <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={openAccounts}
                    onClose={closeMyAcc}
                    onClick={closeMyAcc}
                    slotProps={{
                    paper: {
                        elevation: 0,
                        sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&::before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                        },
                    },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem onClick={closeMyAcc}>
                    <ListItemIcon>
                        <MdPersonAdd fontSize="small" />
                    </ListItemIcon>
                    My Account
                    </MenuItem>
                    <MenuItem onClick={closeMyAcc}>
                    <ListItemIcon>
                        <FaShieldHalved fontSize="small" />
                    </ListItemIcon>
                    Reset Password
                    </MenuItem>
                    <MenuItem onClick={closeMyAcc}>
                    <ListItemIcon>
                        <MdLogout fontSize="small" />
                    </ListItemIcon>
                    Logout
                    </MenuItem>
                </Menu>
                    </div>
                    </>

                }

                


                
                
            </div>
        </div>
        </div>

        </header>

        </>
    )
}

export default Header;