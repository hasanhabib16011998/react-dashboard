import "./dashboard.css";
import DashboardBox from "./components/dashboardBox";
import SalesBox from "./components/salesBox";
import { FaUserCircle } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import Products from "./components/products";


const  DashBoard = () => {
    return(
        <>
        <div className="right-content w-100">
            <div className="row dashboardBoxWrapperRow">
                <div className="col-sm-8">
                    <div className="dashboardBoxWrapper d-flex">
                    <DashboardBox color={['#ff7f50', '#ff4500']} icon={FaUserCircle} grow={true}/> {/* Coral Shades */}
                    <DashboardBox color={['#32cd32', '#228b22']} icon={FaCartArrowDown}/> {/* Lime Green Shades */}
                    <DashboardBox color={['#00ced1', '#20b2aa']} icon={FaShoppingBag}/> {/* Turquoise Shades */}
                    <DashboardBox color={['#87ceeb', '#4682b4']} icon={MdReviews}/> {/* Sky Blue Shades */}
                    </div>
                </div>
                <div className="col-sm-4 pl-0">
                <SalesBox/>
                </div>
            </div>

            <div className="card shadow border-0 p-3 mt-4 align-items-center">
            <h3 className="hd">Best Selling Products</h3>
            <Products/>
            </div>

        </div>

        </>
    )
}

export default DashBoard;