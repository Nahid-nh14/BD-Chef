import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
    const {userName, userPhoto , user, logOut} = useContext(AuthContext)
    const [isHover, setHover] = useState(false)
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }
    return (
        
        <div className=' p-5 flex justify-around items-center container mx-auto gradient'>
            
            <div className='text-3xl flex-grow'>BD CHEF</div>
        <ul className='items-center   md:space-x-8 md:flex'>
            <li>
                <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'default')}>Home</NavLink>
            </li>
            <li>
                <NavLink to='/blog' className={({ isActive }) => (isActive ? 'active' : 'default')}>Blog</NavLink>
            </li>
            {
                user ?             <li>
                <NavLink onClick={handleLogOut} to='/' className={({ isActive }) => (isActive ? 'active' : 'default')}>Log Out</NavLink>
            </li> :             <li>
                <NavLink to='/login' className={({ isActive }) => (isActive ? 'active' : 'default')}>Log in</NavLink>
            </li>
            }
            <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className='relative'> 
            <img className='h-8 w-8 rounded' src={userPhoto ? userPhoto : 'https://www.freepik.com/premium-vector/black-background-with-black-stripes_30987432.htm#query=black%20png%20background&position=44&from_view=search&track=robertav1_2_sidr'} alt="" />
            {isHover && (<div className='absolute '>{userName ? userName : ''}</div>)}
            
             </div>
            {/* <li>
                <NavLink to='/blog' className={({ isActive }) => (isActive ? 'active' : 'default')}>Blog</NavLink>
            </li> */}
        </ul>
    </div>
    );
};

export default Navbar;