import './css/Navbar.css';
export default function Navbar(){
  return (
    <div className='navbar'>
      <div className='logo'>
      <img src='logo.ico' alt='logo' className='logo-ico'/>
      </div>
      <div className='navs'>
        <a href="#Home" className='navbar-item'>
          Home
        </a>
        <a href="#About" className="navbar-item">
          About
        </a>
        <a href="#Course" className="navbar-item">
          Course
        </a>
      </div>
    </div>
  )
}