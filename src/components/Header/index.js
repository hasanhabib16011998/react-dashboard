import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png';
import { MdMenuOpen } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import SearchBox from "./searchBox";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { GoBell } from "react-icons/go";





const Header = () => {
    return(
        <>
        <header className="d-flex align-items-center">
        <div className="container-fluid w-100">
        <div className="row d-flex align-items-center">
            <div className="col-sm-2 part1">
                <Link to={'./'} className="d-flex align-items-center logo">
                    <img src={logo} alt={logo}/>
                    <span className="ml-2">E-SHOP</span>
                </Link>
            </div>

            <div className="col-sm-3 d-flex align-items-center part2 pl-4">
                <button className="rounded-circle mr-3"><MdMenu/></button>
                <SearchBox/>
            </div>

            <div className="col-sm-7 d-flex justify-content-end align-items-center part3 pl-4">
                <button className="rounded-circle mr-3"><CiLight/></button>
                <button className="rounded-circle mr-3"><MdDarkMode/></button>
                <button className="rounded-circle mr-3"><MdOutlineMailOutline/></button>
                <button className="rounded-circle mr-3"><IoCartOutline/></button>
                <button className="rounded-circle mr-3"><GoBell/></button>

                <div className="myAccWrapper">
                    <div className="myAcc d-flex align-items-center">
                    <div className="user-image">
                    <span className="rounded-circle">
                            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"/>
                        </span>
                    </div>
                    <div className="user-info">
                        <h4>Guest User</h4>
                        <p>guestuser@gmail.com</p>
                    </div>
                    </div>
                </div>
                
            </div>
        </div>
        </div>

        </header>

        </>
    )
}

export default Header;