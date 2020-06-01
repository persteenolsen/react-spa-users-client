import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { accountService } from '@/_services';

function Details({ match }) {
   
    const { path } = match;

    // Getting the User id from Login stored in LocalStorage
    const user = accountService.userValue;

    const [userdb, setUser] = useState([]);

    useEffect(() => {
        
         accountService.getById(user.id)
          // .then(response => response.json())
          .then(userdata => {
         
          setUser(userdata) 

          })
     }, []);


    return ( 
              

        <div>
           
            <h1>My Profile</h1>
            <p>
               
                <strong>Name: </strong> {userdb.title} {userdb.firstName} {userdb.lastName}<br />
                <strong>Email: </strong> {userdb.email}
            </p>

            <p><Link to={`${path}/update`}>Update Profile</Link></p>
       
        </div>


   
   ); 
}

export { Details };