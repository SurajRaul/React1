import { Link } from 'react-router-dom';
import image from '../assets/pngegg.png';
import { useSelector,useDispatch } from 'react-redux';
import Cookies from 'universal-cookie';
import { setUser } from '../features/login/loginSlice';
import { useEffect } from 'react';
export function Navbar() {
  const username=useSelector((storestate) => storestate.user.value);
  const dispatch=useDispatch();
  const cookies=new Cookies();
  function logOut(){
    cookies.remove("admin");
    dispatch(setUser(""));
  }
  useEffect(() => {
    const uname=cookies.get('admin');
    dispatch(setUser(uname));

  })
  return (

    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#e3f2fd' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src={image} width="110"></img></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-4">
            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#">Booking</a> */}
              <Link className="nav-link" to="/booking">Rooms</Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#">Dinning</a> */}
              <Link className="nav-link" to="/dinning">Dinning</Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#">Contact</a> */}
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-dark" type="submit">Search</button>
          </form>
          <div className="d-flex ms-auto">
            {username==="" || username===undefined ? <>
              <button className="btn btn-outline-primary me-2"><Link className="nav-link" to="/login">Login</Link></button>
              <button className="btn btn-outline-dark btn-warning"><Link className="nav-link" to="/signUp">Sign Up</Link></button></>
             :  <><bold><underline>{username}&nbsp;&nbsp;</underline></bold>
            <button className="btn btn-outline-dark btn-warning" onClick={logOut}>Logout</button></>
         }
          
            {/* d-flex: Applies Flexbox layout to the container for the buttons.
          ms-auto: Pushes the buttons to the far right within the navbar. */}
    
          </div>
          
          
        </div>
      </div>
    </nav>
  )
} 