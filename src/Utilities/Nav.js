import React , {useState , useEffect} from 'react';
import {Link,useLocation,useNavigate} from 'react-router-dom'
import $ from 'jquery'
const Nav= () => {

  const [isActive, setIsActive] = useState(false);
  const [name,setName] = useState("");
const header = useNavigate();
const location = useLocation();
const token = localStorage.getItem('customer_token');
const Logout = ()=>{
  localStorage.removeItem('customer_token')
  header('/')
}

const LoadData = async()=>{
  const request = await fetch('http://localhost:5000/app/mms/backend/customer/fetchdata',{
    method:'GET',
    headers:{
      'Content-Type': 'application/json',
      'customer_token':token,
        },
         
  });
  const response = await request.json();
  const {customer} = response;
  const {name} = customer
  setName(name);
}
  function handleClick() {
    setIsActive(!isActive);
    $('.header-area .nav').slideToggle(200);
  }

  const [width, setWidth] = useState(window.innerWidth);
 

  const handleResize = () => {
    const headerNav = document.querySelector('.header-area .nav');
    const menuTrigger = document.querySelector('.menu-trigger');
    if (menuTrigger && headerNav) {
      const newWidth = window.innerWidth;

      if (newWidth < 991) {
        menuTrigger.classList.remove('active');
        headerNav.style.display = 'none';
      } else {
        menuTrigger.classList.add('active');
        headerNav.style.display = 'flex';
      }
      setWidth(newWidth);

    }
    
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    // Initialize the menu visibility based on the initial width
  handleResize()

    return () => window.removeEventListener('resize', handleResize);
  }, []); // No need to include 'width' in the dependency array


useEffect(()=>{
  if(token){
    LoadData();
   
  }
  
},[])
  return (
    <header className="header-area header-sticky">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <nav className="main-nav">
                   
                    <Link to='/'  className="logo">
                        <img src="asset/images/logo5.png" alt="logo" />
                    </Link>
                    
                    <ul className="nav">
                        <li><Link to='/' className={`${location.pathname==='/' && 'active'}`}>Home</Link></li>
                        <li><Link to="/catalog" className={`${location.pathname==='/catalog' && 'active'}`}>Portfolio</Link></li>
                        <li><Link to="/deals" className={`${location.pathname==='/deals' && 'active'}`}>Packages</Link></li>
                        <li><Link to="/reservations" className={`${location.pathname==='/reservations' && 'active'}`}>Reservation</Link></li>
                       {!token && <>
                        <li><Link to='/login' className={`${location.pathname==='/login' && 'active'}`}>Login</Link></li>
                        <li><Link to='/signup' className={`${location.pathname==='/signup' && 'active'}`}>Sign up</Link></li>
                       </>}
                        
{token && <>

                        <li><Link to='/profile' className={`${location.pathname==='/profile' && 'active'}`}>{name}</Link></li>
                        <li><div className="logout-button"><button onClick={Logout}>Logout</button></div></li>
                        </>}
                    </ul>   
                    <span className={`menu-trigger ${isActive ? 'active' : ''}`} onClick={handleClick}>
                        <span>Menu</span>
                    </span>
                   
                </nav>
            </div>
        </div>
    </div>
  </header>


  );
}

export default Nav;
