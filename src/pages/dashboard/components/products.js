import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';






function Products() {
    const [showBy, setshowBy] = useState('');
    const [showCatBy, setshowCatBy] = useState('');


  return (
    <>
    <div className='row classFilters mt-3 w-100'>
    <div className='col-md-3'>
      <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
        <InputLabel id="demo-simple-select-helper-label">SHOW BY</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={showBy}
          label="Age"
          onChange={(e)=>setshowBy(e.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>With label + helper text</FormHelperText>
      </FormControl>
    </div>

    <div className='col-md-3'>
      <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
        <InputLabel id="demo-simple-select-helper-label">CATEGORY BY</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={showCatBy}
          label="Age"
          onChange={(e)=>setshowCatBy(e.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
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
        <tr>
          <td>#1</td>
          <td>
            <div className='d-flex productBox align-items-center'>
              <div className='imgWrapper'>
                <div className='img'>
                  <img src="https://www.molekulaire.com/cdn/shop/files/Facewash_1_8c140dcd-3f50-478b-94c2-065559b055c1.jpg?v=1721396364&width=493" className='w-100'/>
                </div>
              </div>
            <div className='info'>
            <h6>Facewash for female customers</h6>
            <p>Women's exclusive collection summer skincare facewash and moinsturizer</p>
            </div>
            </div>
          </td>
          <td>Electronics</td>
          <td>Samsung</td>
          <td>
            <del className='oldprice'>$621.00</del>
            <span className='newprice text-danger'>$521.00</span>
          </td>
          <td>50</td>
          <td>4.5</td>
          <td>12</td>
          <td>$8388</td>
          <td>
            <div className='actions d-flex align-items-center'>
            <Button className="btn btn-sm preview" color="secondary"><FaEye/></Button>
            <Button className="btn btn-sm edit" color="success"><MdEdit/></Button>
            <Button className="btn btn-sm delete" color="error"><FaTrash/></Button>
            </div>
          </td>
        </tr>

        <tr>
          <td>#1</td>
          <td>
            <div className='d-flex productBox align-items-center'>
              <div className='imgWrapper'>
                <div className='img'>
                  <img src="https://www.molekulaire.com/cdn/shop/files/Facewash_1_8c140dcd-3f50-478b-94c2-065559b055c1.jpg?v=1721396364&width=493" className='w-100'/>
                </div>
              </div>
            <div className='info'>
            <h6>Facewash for female customers</h6>
            <p>Women's exclusive collection summer skincare facewash and moinsturizer</p>
            </div>
            </div>
          </td>
          <td>Electronics</td>
          <td>Samsung</td>
          <td>
            <del className='oldprice'>$621.00</del>
            <span className='newprice text-danger'>$521.00</span>
          </td>
          <td>50</td>
          <td>4.5</td>
          <td>12</td>
          <td>$8388</td>
          <td>
            <div className='actions d-flex align-items-center'>
            <Button className="btn btn-sm preview" color="secondary"><FaEye/></Button>
            <Button className="btn btn-sm edit" color="success"><MdEdit/></Button>
            <Button className="btn btn-sm delete" color="error"><FaTrash/></Button>
            </div>
          </td>
        </tr>

        <tr>
          <td>#1</td>
          <td>
            <div className='d-flex productBox align-items-center'>
              <div className='imgWrapper'>
                <div className='img'>
                  <img src="https://www.molekulaire.com/cdn/shop/files/Facewash_1_8c140dcd-3f50-478b-94c2-065559b055c1.jpg?v=1721396364&width=493" className='w-100'/>
                </div>
              </div>
            <div className='info'>
            <h6>Facewash for female customers</h6>
            <p>Women's exclusive collection summer skincare facewash and moinsturizer</p>
            </div>
            </div>
          </td>
          <td>Electronics</td>
          <td>Samsung</td>
          <td>
            <del className='oldprice'>$621.00</del>
            <span className='newprice text-danger'>$521.00</span>
          </td>
          <td>50</td>
          <td>4.5</td>
          <td>12</td>
          <td>$8388</td>
          <td>
            <div className='actions d-flex align-items-center'>
            <Button className="btn btn-sm preview" color="secondary"><FaEye/></Button>
            <Button className="btn btn-sm edit" color="success"><MdEdit/></Button>
            <Button className="btn btn-sm delete" color="error"><FaTrash/></Button>
            </div>
          </td>
        </tr>

        <tr>
          <td>#1</td>
          <td>
            <div className='d-flex productBox align-items-center'>
              <div className='imgWrapper'>
                <div className='img'>
                  <img src="https://www.molekulaire.com/cdn/shop/files/Facewash_1_8c140dcd-3f50-478b-94c2-065559b055c1.jpg?v=1721396364&width=493" className='w-100'/>
                </div>
              </div>
            <div className='info'>
            <h6>Facewash for female customers</h6>
            <p>Women's exclusive collection summer skincare facewash and moinsturizer</p>
            </div>
            </div>
          </td>
          <td>Electronics</td>
          <td>Samsung</td>
          <td>
            <del className='oldprice'>$621.00</del>
            <span className='newprice text-danger'>$521.00</span>
          </td>
          <td>50</td>
          <td>4.5</td>
          <td>12</td>
          <td>$8388</td>
          <td>
            <div className='actions d-flex align-items-center'>
            <Button className="btn btn-sm preview" color="secondary"><FaEye/></Button>
            <Button className="btn btn-sm edit" color="success"><MdEdit/></Button>
            <Button className="btn btn-sm delete" color="error"><FaTrash/></Button>
            </div>
          </td>
        </tr>

        <tr>
          <td>#1</td>
          <td>
            <div className='d-flex productBox align-items-center'>
              <div className='imgWrapper'>
                <div className='img'>
                  <img src="https://www.molekulaire.com/cdn/shop/files/Facewash_1_8c140dcd-3f50-478b-94c2-065559b055c1.jpg?v=1721396364&width=493" className='w-100'/>
                </div>
              </div>
            <div className='info'>
            <h6>Facewash for female customers</h6>
            <p>Women's exclusive collection summer skincare facewash and moinsturizer</p>
            </div>
            </div>
          </td>
          <td>Electronics</td>
          <td>Samsung</td>
          <td>
            <del className='oldprice'>$621.00</del>
            <span className='newprice text-danger'>$521.00</span>
          </td>
          <td>50</td>
          <td>4.5</td>
          <td>12</td>
          <td>$8388</td>
          <td>
            <div className='actions d-flex align-items-center'>
            <Button className="btn btn-sm preview" color="secondary"><FaEye/></Button>
            <Button className="btn btn-sm edit" color="success"><MdEdit/></Button>
            <Button className="btn btn-sm delete" color="error"><FaTrash/></Button>
            </div>
          </td>
        </tr>

        <tr>
          <td>#1</td>
          <td>
            <div className='d-flex productBox align-items-center'>
              <div className='imgWrapper'>
                <div className='img'>
                  <img src="https://www.molekulaire.com/cdn/shop/files/Facewash_1_8c140dcd-3f50-478b-94c2-065559b055c1.jpg?v=1721396364&width=493" className='w-100'/>
                </div>
              </div>
            <div className='info'>
            <h6>Facewash for female customers</h6>
            <p>Women's exclusive collection summer skincare facewash and moinsturizer</p>
            </div>
            </div>
          </td>
          <td>Electronics</td>
          <td>Samsung</td>
          <td>
            <del className='oldprice'>$621.00</del>
            <span className='newprice text-danger'>$521.00</span>
          </td>
          <td>50</td>
          <td>4.5</td>
          <td>12</td>
          <td>$8388</td>
          <td>
            <div className='actions d-flex align-items-center'>
            <Button className="btn btn-sm preview" color="secondary"><FaEye/></Button>
            <Button className="btn btn-sm edit" color="success"><MdEdit/></Button>
            <Button className="btn btn-sm delete" color="error"><FaTrash/></Button>
            </div>
          </td>
        </tr>

        <tr>
          <td>#1</td>
          <td>
            <div className='d-flex productBox align-items-center'>
              <div className='imgWrapper'>
                <div className='img'>
                  <img src="https://www.molekulaire.com/cdn/shop/files/Facewash_1_8c140dcd-3f50-478b-94c2-065559b055c1.jpg?v=1721396364&width=493" className='w-100'/>
                </div>
              </div>
            <div className='info'>
            <h6>Facewash for female customers</h6>
            <p>Women's exclusive collection summer skincare facewash and moinsturizer</p>
            </div>
            </div>
          </td>
          <td>Electronics</td>
          <td>Samsung</td>
          <td>
            <del className='oldprice'>$621.00</del>
            <span className='newprice text-danger'>$521.00</span>
          </td>
          <td>50</td>
          <td>4.5</td>
          <td>12</td>
          <td>$8388</td>
          <td>
            <div className='actions d-flex align-items-center'>
            <Button className="btn btn-sm preview" color="secondary"><FaEye/></Button>
            <Button className="btn btn-sm edit" color="success"><MdEdit/></Button>
            <Button className="btn btn-sm delete" color="error"><FaTrash/></Button>
            </div>
          </td>
        </tr>

        <tr>
          <td>#1</td>
          <td>
            <div className='d-flex productBox align-items-center'>
              <div className='imgWrapper'>
                <div className='img'>
                  <img src="https://www.molekulaire.com/cdn/shop/files/Facewash_1_8c140dcd-3f50-478b-94c2-065559b055c1.jpg?v=1721396364&width=493" className='w-100'/>
                </div>
              </div>
            <div className='info'>
            <h6>Facewash for female customers</h6>
            <p>Women's exclusive collection summer skincare facewash and moinsturizer</p>
            </div>
            </div>
          </td>
          <td>Electronics</td>
          <td>Samsung</td>
          <td>
            <del className='oldprice'>$621.00</del>
            <span className='newprice text-danger'>$521.00</span>
          </td>
          <td>50</td>
          <td>4.5</td>
          <td>12</td>
          <td>$8388</td>
          <td>
            <div className='actions d-flex align-items-center'>
            <Button className="btn btn-sm preview" color="secondary"><FaEye/></Button>
            <Button className="btn btn-sm edit" color="success"><MdEdit/></Button>
            <Button className="btn btn-sm delete" color="error"><FaTrash/></Button>
            </div>
          </td>
        </tr>

        <tr>
          <td>#1</td>
          <td>
            <div className='d-flex productBox align-items-center'>
              <div className='imgWrapper'>
                <div className='img'>
                  <img src="https://www.molekulaire.com/cdn/shop/files/Facewash_1_8c140dcd-3f50-478b-94c2-065559b055c1.jpg?v=1721396364&width=493" className='w-100'/>
                </div>
              </div>
            <div className='info'>
            <h6>Facewash for female customers</h6>
            <p>Women's exclusive collection summer skincare facewash and moinsturizer</p>
            </div>
            </div>
          </td>
          <td>Electronics</td>
          <td>Samsung</td>
          <td>
            <del className='oldprice'>$621.00</del>
            <span className='newprice text-danger'>$521.00</span>
          </td>
          <td>50</td>
          <td>4.5</td>
          <td>12</td>
          <td>$8388</td>
          <td>
            <div className='actions d-flex align-items-center'>
            <Button className="btn btn-sm preview" color="secondary"><FaEye/></Button>
            <Button className="btn btn-sm edit" color="success"><MdEdit/></Button>
            <Button className="btn btn-sm delete" color="error"><FaTrash/></Button>
            </div>
          </td>
        </tr>

        <tr>
          <td>#1</td>
          <td>
            <div className='d-flex productBox align-items-center'>
              <div className='imgWrapper'>
                <div className='img'>
                  <img src="https://www.molekulaire.com/cdn/shop/files/Facewash_1_8c140dcd-3f50-478b-94c2-065559b055c1.jpg?v=1721396364&width=493" className='w-100'/>
                </div>
              </div>
            <div className='info'>
            <h6>Facewash for female customers</h6>
            <p>Women's exclusive collection summer skincare facewash and moinsturizer</p>
            </div>
            </div>
          </td>
          <td>Electronics</td>
          <td>Samsung</td>
          <td>
            <del className='oldprice'>$621.00</del>
            <span className='newprice text-danger'>$521.00</span>
          </td>
          <td>50</td>
          <td>4.5</td>
          <td>12</td>
          <td>$8388</td>
          <td>
            <div className='actions d-flex align-items-center'>
            <Button className="btn btn-sm preview" color="secondary"><FaEye/></Button>
            <Button className="btn btn-sm edit" color="success"><MdEdit/></Button>
            <Button className="btn btn-sm delete" color="error"><FaTrash/></Button>
            </div>
          </td>
        </tr>

        <tr>
          <td>#1</td>
          <td>
            <div className='d-flex productBox align-items-center'>
              <div className='imgWrapper'>
                <div className='img'>
                  <img src="https://www.molekulaire.com/cdn/shop/files/Facewash_1_8c140dcd-3f50-478b-94c2-065559b055c1.jpg?v=1721396364&width=493" className='w-100'/>
                </div>
              </div>
            <div className='info'>
            <h6>Facewash for female customers</h6>
            <p>Women's exclusive collection summer skincare facewash and moinsturizer</p>
            </div>
            </div>
          </td>
          <td>Electronics</td>
          <td>Samsung</td>
          <td>
            <del className='oldprice'>$621.00</del>
            <span className='newprice text-danger'>$521.00</span>
          </td>
          <td>50</td>
          <td>4.5</td>
          <td>12</td>
          <td>$8388</td>
          <td>
            <div className='actions d-flex align-items-center'>
            <Button className="btn btn-sm preview" color="secondary"><FaEye/></Button>
            <Button className="btn btn-sm edit" color="success"><MdEdit/></Button>
            <Button className="btn btn-sm delete" color="error"><FaTrash/></Button>
            </div>
          </td>
        </tr>

        <tr>
          <td>#1</td>
          <td>
            <div className='d-flex productBox align-items-center'>
              <div className='imgWrapper'>
                <div className='img'>
                  <img src="https://www.molekulaire.com/cdn/shop/files/Facewash_1_8c140dcd-3f50-478b-94c2-065559b055c1.jpg?v=1721396364&width=493" className='w-100'/>
                </div>
              </div>
            <div className='info'>
            <h6>Facewash for female customers</h6>
            <p>Women's exclusive collection summer skincare facewash and moinsturizer</p>
            </div>
            </div>
          </td>
          <td>Electronics</td>
          <td>Samsung</td>
          <td>
            <del className='oldprice'>$621.00</del>
            <span className='newprice text-danger'>$521.00</span>
          </td>
          <td>50</td>
          <td>4.5</td>
          <td>12</td>
          <td>$8388</td>
          <td>
            <div className='actions d-flex align-items-center'>
            <Button className="btn btn-sm preview" color="secondary"><FaEye/></Button>
            <Button className="btn btn-sm edit" color="success"><MdEdit/></Button>
            <Button className="btn btn-sm delete" color="error"><FaTrash/></Button>
            </div>
          </td>
        </tr>
        <tr>
          <td>#1</td>
          <td>
            <div className='d-flex productBox align-items-center'>
              <div className='imgWrapper'>
                <div className='img'>
                  <img src="https://www.molekulaire.com/cdn/shop/files/Facewash_1_8c140dcd-3f50-478b-94c2-065559b055c1.jpg?v=1721396364&width=493" className='w-100'/>
                </div>
              </div>
            <div className='info'>
            <h6>Facewash for female customers</h6>
            <p>Women's exclusive collection summer skincare facewash and moinsturizer</p>
            </div>
            </div>
          </td>
          <td>Electronics</td>
          <td>Samsung</td>
          <td>
            <del className='oldprice'>$621.00</del>
            <span className='newprice text-danger'>$521.00</span>
          </td>
          <td>50</td>
          <td>4.5</td>
          <td>12</td>
          <td>$8388</td>
          <td>
            <div className='actions d-flex align-items-center'>
            <Button className="btn btn-sm preview" color="secondary"><FaEye/></Button>
            <Button className="btn btn-sm edit" color="success"><MdEdit/></Button>
            <Button className="btn btn-sm delete" color="error"><FaTrash/></Button>
            </div>
          </td>
        </tr>

        <tr>
          <td>#1</td>
          <td>
            <div className='d-flex productBox align-items-center'>
              <div className='imgWrapper'>
                <div className='img'>
                  <img src="https://www.molekulaire.com/cdn/shop/files/Facewash_1_8c140dcd-3f50-478b-94c2-065559b055c1.jpg?v=1721396364&width=493" className='w-100'/>
                </div>
              </div>
            <div className='info'>
            <h6>Facewash for female customers</h6>
            <p>Women's exclusive collection summer skincare facewash and moinsturizer</p>
            </div>
            </div>
          </td>
          <td>Electronics</td>
          <td>Samsung</td>
          <td>
            <del className='oldprice'>$621.00</del>
            <span className='newprice text-danger'>$521.00</span>
          </td>
          <td>50</td>
          <td>4.5</td>
          <td>12</td>
          <td>$8388</td>
          <td>
            <div className='actions d-flex align-items-center'>
            <Button className="btn btn-sm preview" color="secondary"><FaEye/></Button>
            <Button className="btn btn-sm edit" color="success"><MdEdit/></Button>
            <Button className="btn btn-sm delete" color="error"><FaTrash/></Button>
            </div>
          </td>
        </tr>

        <tr>
          <td>#1</td>
          <td>
            <div className='d-flex productBox align-items-center'>
              <div className='imgWrapper'>
                <div className='img'>
                  <img src="https://www.molekulaire.com/cdn/shop/files/Facewash_1_8c140dcd-3f50-478b-94c2-065559b055c1.jpg?v=1721396364&width=493" className='w-100'/>
                </div>
              </div>
            <div className='info'>
            <h6>Facewash for female customers</h6>
            <p>Women's exclusive collection summer skincare facewash and moinsturizer</p>
            </div>
            </div>
          </td>
          <td>Electronics</td>
          <td>Samsung</td>
          <td>
            <del className='oldprice'>$621.00</del>
            <span className='newprice text-danger'>$521.00</span>
          </td>
          <td>50</td>
          <td>4.5</td>
          <td>12</td>
          <td>$8388</td>
          <td>
            <div className='actions d-flex align-items-center'>
            <Button className="btn btn-sm preview" color="secondary"><FaEye/></Button>
            <Button className="btn btn-sm edit" color="success"><MdEdit/></Button>
            <Button className="btn btn-sm delete" color="error"><FaTrash/></Button>
            </div>
          </td>
        </tr>
        </tbody>
      </table>

      <div className='d-flex tableFooter'>
        <p>Showing <b>12</b> of <b>60</b> results</p>
        <Pagination count={10} color="secondary" className='pagination'/>
      </div>


    </div>
    </>
  )
}

export default Products;