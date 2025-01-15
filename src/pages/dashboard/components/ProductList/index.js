import { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { MdEdit } from "react-icons/md";
import { FaTrash, FaEye } from "react-icons/fa";
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import productsData from './productData.json';
import './ProductList.css';
import { Link } from 'react-router-dom';

function ProductsList() {
  const [showBy, setshowBy] = useState('');
  const [showCatBy, setshowCatBy] = useState('');
  const [products, setProducts] = useState([]); // State for products

  useEffect(() => {
    // Simulating fetching data
    setProducts(productsData);
  }, []); // Runs only once

  return (
    <>
    <div className="right-content w-100">
    <div className="card shadow border-0 p-3 mt-4 align-items-center">
            <h3 className="hd">Product List</h3>
      <div className='row classFilters mt-3 w-100'>
        <div className='col-md-3'>
          <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
            <InputLabel id="show-by-label">SHOW BY</InputLabel>
            <Select
              labelId="show-by-label"
              id="show-by"
              value={showBy}
              onChange={(e) => setshowBy(e.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="10">Ten</MenuItem>
              <MenuItem value="20">Twenty</MenuItem>
              <MenuItem value="30">Thirty</MenuItem>
            </Select>
            <FormHelperText>With label + helper text</FormHelperText>
          </FormControl>
        </div>

        <div className='col-md-3'>
          <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
            <InputLabel id="category-by-label">CATEGORY BY</InputLabel>
            <Select
              labelId="category-by-label"
              id="category-by"
              value={showCatBy}
              onChange={(e) => setshowCatBy(e.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="10">Ten</MenuItem>
              <MenuItem value="20">Twenty</MenuItem>
              <MenuItem value="30">Thirty</MenuItem>
            </Select>
            <FormHelperText>With label + helper text</FormHelperText>
          </FormControl>
        </div>
      </div>

      <div className='table-responsive w-100'>
        <table className='table table-bordered v-align'>
          <thead className='thead-dark'>
            <tr>
              <th>UID</th>
              <th>PRODUCT</th>
              <th>CATEGORY</th>
              <th>BRAND</th>
              <th>PRICE</th>
              <th>STOCK</th>
              <th>RATING</th>
              <th>ORDER</th>
              <th>SALES</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.uid}</td>
                <td>
                  <div className='d-flex productBox align-items-center'>
                    <div className='imgWrapper'>
                      <div className='img'>
                        <img src={product.product.image} alt={product.product.name} className='w-100' />
                      </div>
                    </div>
                    <div className='info'>
                      <h6>{product.product.name}</h6>
                      <p>{product.product.description}</p>
                    </div>
                  </div>
                </td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <td>
                  <del className='oldprice'>{product.price.old}</del>
                  <span className='newprice text-danger'>{product.price.new}</span>
                </td>
                <td>{product.stock}</td>
                <td>{product.rating}</td>
                <td>{product.order}</td>
                <td>{product.sales}</td>
                <td>
                  <div className='actions d-flex align-items-center'>
                    <Link to='/product-details'><Button className="btn btn-sm preview" color="secondary"><FaEye /></Button></Link>
                    <Button className="btn btn-sm edit" color="success"><MdEdit /></Button>
                    <Button className="btn btn-sm delete" color="error"><FaTrash /></Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className='d-flex tableFooter'>
          <p>Showing <b>{products.length}</b> of <b>60</b> results</p>
          <Pagination count={10} color="secondary" className='pagination' />
        </div>
      </div>
      </div>
      </div>
    </>
  );
}

export default ProductsList;
