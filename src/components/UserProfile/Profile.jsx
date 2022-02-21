import React, {  useEffect } from 'react';
import "./profile.css";


const Profile = () => {

  useEffect(()=>{
    let reservation =null;
  // let users = JSON.parse(localStorage.getItem("users"));
  let currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
  let booking = JSON.parse(localStorage.getItem("booking"));
  
  
    booking.tables.map((table) => {
      if (table.reservation) {
        if(table.reservation.email == currentUser[0].email)
       { reservation = "ddd";
        console.log(reservation);}
      }
    });
    
    //console.log(reservation);

  },[])

    return ( <>
        <main className="reservation-wrapper">
        <h1>Reservation</h1>

        </main>
    </> );
}
 
export default Profile;