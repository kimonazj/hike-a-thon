import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './css/navbar.css'
import Wishlist from './wishlist';
import Filter from './filter';
import preferenceLogo from './icons/preferences.png';
import listLogo from './icons/wishlist.png'
function Navbar(){
    return(
        <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-0" style={{background: 'linear-gradient(90deg, rgba(175,196,187,1) 0%, rgba(63,90,79,1) 28%, rgba(1,27,16,1) 100%)'}}>
         <a class="navbar-brand ps-5 py-3 pe-3 me-0" href="!#" style={{color:'#011B10', }}>Hike-a-thon</a>
         <button class="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon" ></span>
        </button>
         <div class="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul class="navbar-nav" >
                <li class="nav-item">
                    <a class="nav-link" href="!#" style={{color:'#F5F5F5'}}>Explore</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="!#" style={{color:'#F5F5F5'}}>Contribute</a>
                </li>
            </ul>

            <ul class="navbar-nav ms-auto">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" style={{backgroundColor: "#3F5A4F", borderRadius: '10px',color:'#E7F1E6'}} href="!#" id="filterDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src={preferenceLogo} alt="PLogo" width="30" height="24" class="d-inline-block align-text-top pe-1"></img>
                        Preferences
                    </a>
                
                    <div class="dropdown-menu" aria-labelledby="filterDropdown">
                        <Filter></Filter>
                    </div>
                </li>

                <li class="nav-item">
                <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#wishlistCollapse" aria-expanded="false" aria-controls="wishlistCollaps">
                    <img src={listLogo} alt="FLogo" width="30" height="30" class="d-inline-block align-text-tops"></img>
                </button>
                </li>
            </ul>
         </div>
        </nav>

        <div class="collapse" id="wishlistCollapse">
            <Wishlist></Wishlist>
        </div>

        </div>
    )
}


export default Navbar;