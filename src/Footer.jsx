import React from 'react';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { faTh } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer =() => {
    return (
    <>
    <div class="foot">
        <div class="footer">
            <a href="/">
             <i class="input-icon">
                <div class="d-flex flex-column justify-content-center align-items-center">
                <FontAwesomeIcon icon={faTh} />
                <p class="small" >Applications</p>
             </div>
         </i>
         </a>
         <a href="/recent" class="item "><i class="input-icon">
             <div class="d-flex flex-column justify-content-center align-items-center">
             <FontAwesomeIcon icon={faCalendarAlt} />
              <p class="small" >Recent</p>
             </div>
         </i>
         </a>
         <a href="/notification" class="item "><i class="input-icon">
             <div class="d-flex flex-column justify-content-center align-items-center">
             <FontAwesomeIcon icon={faBell} />
              <p class="small" >Notifications</p>
             </div>
         </i>
         </a>
         <a href="/settings" class="item "><i class="input-icon">
             <div class="d-flex flex-column justify-content-center align-items-center">
             <FontAwesomeIcon icon={faCog} />
              <p class="small" >Settings</p>
             </div>
         </i>
         </a>
        </div>   
        </div>
            
    </>
    );
};

export default Footer;