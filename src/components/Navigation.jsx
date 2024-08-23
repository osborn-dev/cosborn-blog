import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react';
import { Avatar } from 'antd'
import { IoIosMenu } from 'react-icons/io';


const navLinks = [
  { title: 'Home', path: '/home' },
  { title: 'Blog', path: '/blog' },
  { title: 'Contact Us', path: '/contact-us' },
  { title: 'login', path: '/login' }
];

function Navigation({user}) {
    const [menuActive, setMenuActive] = useState(false)
    const sidebarRef = useRef(null)


   // Handle clicks outside the sidebar
   const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setMenuActive(false);
    }
  };

  // Add event listener for clicks outside
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);



  return (
    <nav className="site-navigation">
        <span className='menu-title'>Cosborn</span>
        <div className={`menu-content-container ${menuActive && 'active'}`} ref={sidebarRef}>
        <ul>
            {   
              navLinks.map((link, index) => {
                return (
                    <li key={index}><Link to={link.path}>{link.title}</Link></li>
                )
              })
             }
        </ul>
        <span className='menu-avatar-container'>
        <Avatar src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'size={36} />
        <span className='menu-avatar-name'>{`${user.name}`}</span>
        </span>
        </div>
        <IoIosMenu className='ios-menu' onClick={() => setMenuActive(!menuActive)}/>
    </nav>
  )
}
export default Navigation