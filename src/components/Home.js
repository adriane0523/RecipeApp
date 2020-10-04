
import React, { Component } from 'react';
import '../App.css';



const home = ({name, content}) => {


    return (
       <div>
          <html>
             <div id = "home" className="text-center">
             <h1>View A Random Recipe</h1>
             <button type="button" className="btn btn-outline-dark">Click here to generate random recipe</button>
             <p><hr></hr></p>
               <div className="item">
               <h3>{JSON.stringify(name)}</h3>
     
               <p>{content}</p>
               </div>

             </div>
            
           </html>                                                            
       </div>
    );
}
 
export default home;