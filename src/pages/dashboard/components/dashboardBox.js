import React, { useEffect } from 'react';
import { BiTrendingDown, BiTrendingUp } from 'react-icons/bi';
import { HiDotsVertical } from 'react-icons/hi';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function DashboardBox(props) {
  // Default colors in case none are provided
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const colors = props.color || ['#fff', '#ddd'];

  useEffect(() => {
    console.log('Gradient Colors:', colors);
  }, [colors]);
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

  return (
    <div
      className="dashboardBox"
      style={{
        backgroundImage: `linear-gradient(to right, ${colors[0]}, ${colors[1]})`
      }}>
      {
        props.grow===true?
        <span className='chart'><BiTrendingDown/></span>
        :
        <span className='chart'><BiTrendingUp/></span>
      }
        <div className='d-flex w-100'>
            <div className='col1'>
                <h4 className='text-white mb-0'>
                    Total Users
                </h4>
                <span className='text-white box-number'>277</span>
            </div>

            <div className='ml-auto'>
                <span className='icon'>
                    {props.icon? <props.icon/>:null}
                </span>
            </div>
        </div>
        <div className='d-flex align-items-center w-100 bottomElement'>
            <h6 className='ml-auto toggleText'>Last Month</h6>
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
      </div>
  );
}
