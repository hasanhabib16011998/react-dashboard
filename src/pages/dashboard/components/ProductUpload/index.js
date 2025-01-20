import React from 'react';
import { useState } from 'react';
import './productUpload.css';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { IoIosCloudUpload } from "react-icons/io";



export default function ProductUpload() {
    const [ categoryValue, setcategoryValue ] = useState('');
    const [ BrandValue, setBrandValue] = useState('');
    const handleCategoryValue = (event) => {
        setcategoryValue(event.target.value);
    };
    const handleBrandValue = (event) => {
        setBrandValue(event.target.value);
    };

    return (
        <>
        <div className="right-content w-100">
            <div className="card shadow border-0 p-3 mt-4 align-items-center">
            <h3 className="hd">Product Upload</h3>
            </div>


            <form className='form'>
            <div className="row g-3">
            <div className="col-md-9">
                <div className="card p-3">
                <h5>Basic Information</h5>

                <div className='form-group'>
                    <h6>Title</h6>
                    <input type='text'/>
                </div>

                <div className='form-group'>
                    <h6>Description</h6>
                    <textarea rows={10} cols={10}/>
                </div>

                <div className='row'>
                    <div className='col'>
                        <h6>Category</h6>
                        <Select
                            value={categoryValue}
                            onChange={handleCategoryValue}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            className='w-100'
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Skin Care</MenuItem>
                            <MenuItem value={20}>Health Care</MenuItem>
                            <MenuItem value={30}>Hygine Products</MenuItem>
                            </Select>
                    </div>


                    <div className='col'>
                        <h6>Brand</h6>
                        <Select
                            value={BrandValue}
                            onChange={handleBrandValue}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            className='w-100'
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Gucci</MenuItem>
                            <MenuItem value={20}>Versace </MenuItem>
                            <MenuItem value={30}>Prada</MenuItem>
                            </Select>
                    </div>
                </div>


                <div className='row mt-3'>
                    <div className='col'>
                        <div className='form-group'>
                            <h6>Regular Price</h6>
                            <input type='text'/>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='form-group'>
                            <h6>Discount Price</h6>
                            <input type='text'/>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="card p-3">
                <h5>Basic Information</h5>
                </div>
            </div>
            </div>

            <br/>
            <Button className='btn-blue btn-lg'><IoIosCloudUpload/> &nbsp; Publish and View</Button>

            </form>
        </div>
        </>
    );
}
