import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import calendarLogo from './icons/calendar.png';
import locationLogo from './icons/location.png';
import barLogo from './icons/bars.png';
import './css/filter.css';

function Filter(){
    return(
        <div class="nav-filter">
            <a class="dropdown-item" href="!#">
                6/2023
                <img src={calendarLogo} alt="PLogo" width="30" height="24" class="d-inline-block align-text-top float-end"></img>
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="!#">
                WY
                <img src={locationLogo} alt="PLogo" width="30" height="24" class="d-inline-block align-text-top float-end"></img>
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="!#">
                M
                <img src={barLogo} alt="PLogo" width="30" height="24" class="d-inline-block align-text-top float-end"></img>
            </a>
        </div>
    )
}
export default Filter;