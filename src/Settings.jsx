import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
const Settings =() =>{
    return (
        <>
        <div class="appHeader bg-primary text-light d-flex py-3">
                <div class="left">
                    <a href="/" class="headerButton goBack">
                        <FontAwesomeIcon icon={faAngleDoubleLeft} />
                    </a>
                </div>
                <div class="right m-auto">
                    <div class="pageTitle">Settings</div>
                </div>
            </div>
              <div id="appCapsule" >
        
<ul class="listview mt-3 link-listview">
    <li class="shift_right">
    <a href="#">
        Edit Profile</a>
            <FontAwesomeIcon icon={faAngleRight} />
    </li>
    <hr></hr>
    <li class="shift_right">
        <a href="#">
            Account settings
        </a>
        <FontAwesomeIcon icon={faAngleRight} />
    </li>
    <hr></hr>
    <li class="shift_right">
        <a href="#">
            Privacy
        </a>
        <FontAwesomeIcon icon={faAngleRight} />
    </li>
    <hr></hr>
    <li class="shift_right">
        <a href="#">
            Notification Settings
        </a>
        <FontAwesomeIcon icon={faAngleRight} />
    </li>
    <hr></hr>
</ul>





</div>
        </>
    )
}

export default Settings;