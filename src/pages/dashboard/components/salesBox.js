import React from 'react';
import { HiDotsVertical } from 'react-icons/hi';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Chart } from "react-google-charts";

export default function SalesBox() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const options = ['Last Day','Last Week','Last Month','Last Year'];
    
    const ITEM_HEIGHT = 48;
    const data = [
        ["Year", "Sales", "Expenses"],
        ["2021", 1000, 400],
        ["2022", 1170, 460],
        ["2023", 660, 1120],
        ["2024", 1030, 540],
      ];
      
      const sales_options = {
        hAxis: { title: "Year", titleTextStyle: { color: "#000" } },
        vAxis: { minValue: 0, gridlines:{color:'transparent'},titleTextStyle: { color: "#000" }},
        chartArea: { width: "90%", height: "170px" },
        backgroundColor: 'transparent',
      };
      
  return (
    <>
        <div className="box graph-box">
        <div className="d-flex align-items-center w-100 bottomElement">
        <h3>Total Sales</h3>
        <div className='toggleIcon'>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <HiDotsVertical />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                paper: {
                    style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: '20ch',
                    },
                },
                }}
            >
                {options.map((option) => (
                <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                    {option}
                </MenuItem>
                ))}
            </Menu>
            </div>

        </div>
        <h3 className="text-white font-weight-bold sales-number">$56,340.00</h3>
        <div className='graph'>
        <Chart chartType="AreaChart" data={data} options={sales_options} />
        </div>
        </div>

        

    </>
  )
}
