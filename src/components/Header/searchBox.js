import { IoIosSearch } from "react-icons/io";


export default function SearchBox() {
  return (
    <div className='searchbox d-flex align-items-center'>
    <IoIosSearch className="mr-2"/>
        <input type='text' placeholder='search items...'/>
    </div>
  )
}
