import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { faFileText } from "@fortawesome/free-solid-svg-icons";
import { faTasks } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
const Recent =() =>{
    return (
        <>

        <div class="appHeader bg-primary text-light d-flex align-items-center py-3">
                <div class="left">
                    <a href="/" class="headerButton goBack">
                        <FontAwesomeIcon icon={faAngleDoubleLeft} />
                    </a>
                </div>
                <div class="right m-auto">
                    <div class="pageTitle">Recents</div>
                </div>
        </div>
<div id="appCapsule">
        
<ul class="listview image-listview ">
    <li>
        <div class="item">
            <div class="icon-box bg-primary">
            <FontAwesomeIcon icon={faImage} />
            </div>
            <div >
                Photos
            </div>
        </div>
    </li>
    <li>
        <div class="item">
            <div class="icon-box bg-secondary">
            <FontAwesomeIcon icon={faVideo} />
            </div>
            <div class="in">
                <div>Videos</div>
            </div>
        </div>
    </li>
    <li>
        <div class="item">
            <div class="icon-box bg-danger">
            <FontAwesomeIcon icon={faMusic} />
            </div>
            <div class="in">
                <div>Apps</div>
            </div>
        </div>
    </li>
    <li>
        <div class="item">
            <div class="icon-box bg-info">
            <FontAwesomeIcon icon={faFile} />
            </div>
            <div class="in">
                <div>Docs</div>
            </div>
        </div>
    </li>
    <li>
        <div class="item">
            <div class="icon-box bg-warning">
            <FontAwesomeIcon icon={faTasks} />
            </div>
            <div class="in">
                <div>Tasks</div>
            </div>
        </div>
    </li>

    <li>
        <div class="item">
            <div class="icon-box bg-success">
            <FontAwesomeIcon icon={faFile} />
            </div>
            <div class="in">
                <div>Files</div>
            </div>
        </div>
    </li>
    
</ul>
</div>
        </>
    )
}

export default Recent;