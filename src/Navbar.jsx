import React from 'react';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar =() => {
    return (
    <>
        <div class="header-large-title">
            <h1 class="title">My Apps</h1>
        </div>
        
                    <div class="searchbox" id="search">
                        <i class="input-icon">
                            <FontAwesomeIcon icon={faSearch} />
                        </i>
                        <input type="text" placeholder="Search by App Name or Owner"/>
                    </div>
    </>
    );
};

export default Navbar;