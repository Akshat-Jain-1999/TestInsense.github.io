import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
const Notification = () => {
    return (
        <>
            <div class="appHeader bg-primary text-light d-flex py-3">
                <div class="left">
                    <a href="/" class="headerButton goBack">
                        <FontAwesomeIcon icon={faAngleDoubleLeft} />
                    </a>
                </div>
                <div class="right m-auto">
                    <div class="pageTitle">Notifications</div>
                </div>
            </div>
            
            
            




        <div class="appCapsule">
            
            <div class="wide-block pt-2 pb-1">

                <p class="mx-3">Will you get 40%, 30%, or 20% off. Check your app to reveal your mystery savings</p>
                <div class="container">
                    <button type="button" class="btn btn-primary" onclick="notification('notification-13')">
                        Yes</button>
                    <button type="button" class="btn btn-danger" onclick="notification('notification-13')">
                        No</button>
                </div>
                

            </div>
            <hr></hr>
            <div class="wide-block pt-2 pb-1">
                <p class="mx-3">Hi Maria! Hotels are filling up fast. Don't forget to book a reservation for your upcoming trip to Atlanta .</p>
                <div class="container">
                    <button type="button" class="btn btn-primary" onclick="notification('notification-13')">
                        Let's go</button>
                    <button type="button" class="btn btn-danger" onclick="notification('notification-13')">
                        Dismiss</button>
                </div>
            </div>
            <hr></hr>
            <div class="wide-block pt-2 pb-1">

                <p class="mx-3">Tata Power - Mumbai. Pay Rs. 1629 for Oct, 2020</p>
                <div class="container">
                    <button type="button" class="btn btn-primary " onclick="notification('notification-13')">
                        Pay</button>
                    <button type="button" class="btn btn-danger " onclick="notification('notification-13')">
                        Dismiss</button>
                </div>

            </div>
            <hr></hr>

        </div>

        </>
    )
}

export default Notification;