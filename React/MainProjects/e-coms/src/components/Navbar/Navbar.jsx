import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { FiSearch } from "react-icons/fi";
import { MdOutlinePerson } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {apiValue} from '../Api/ApiFood'
import { FaRegUser } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { removeUserData } from '../../Redux/Userredux';


const Navbar = ({ onSearch }) => {
   

    const [searchQuery,setSearchQuery] = useState('')
    // const [seachResult,setSearchResults]=useState([])

    console.log("*3838333333",searchQuery);

    const dispatch = useDispatch()

   const loginout = () =>{
    dispatch(removeUserData())
    
   }

//    const handleChange = (e) => {
//     const query = e.target.value;
//     setSearchQuery(query);
//     onSearch(query); // Notify the parent component about the search query
//   };


    return (
        <div className='Nav'>
            <div className='Nav-main'>
                <div className='Nav-logo'>
                    {/* <img src={img} alt="" /> */}
                </div>
                <div className='Nav-cat'>
                    <Link to='/'> <button>Home</button></Link>
                    <Link to='/pizza'> <button>Pizza</button></Link>
                    <Link to={'/burger'}> <button>Burger</button></Link>

                    <Link to={'/vegitem'}> <button>Dessert</button></Link>
                </div>
                <div className='Nav-search'>
                    <div className='icons-one'>
                        <FiSearch className='search-icon' />
                    </div>
                    <input type="text" placeholder="Search items..." value={searchQuery}  onChange={(e) => setSearchQuery(e.target.value)}  />
                    {/* <button>search</button> */}
                    {/* <input
            type='text'
            placeholder='Search items...'
            value={searchQuery}
            onChange={handleChange}
          />     */}
                </div>
                <div className='Nav-cart'>
                    {/* <button>profile</button> */}
                    <Link to={'/profile'}>  <h2><MdOutlinePerson className='icons' />  </h2></Link>
                    <Link to={'/cart'}>  <h2> <FiShoppingCart className='icons' /></h2></Link>
                    {/* <button>cart</button> */}
                    <Link to={'/login'} className='login-btn-link'><h4>Login</h4></Link>
                    <div className='userlogut'>
                <IoMdLogOut  onClick={loginout}/>
                </div>
                </div>
                

                {/* <FaRegUser /> */}
            </div>
            {/* <Outlet/> */}

        </div>
    )
}

export default Navbar