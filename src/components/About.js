import React from 'react';
import '../App.css';


const About = () => {
    return (
       <div>
          <html>

          <div id = "home" className="text-center">
             <h1>Create A  Recipe</h1>
      
             <p><hr></hr></p>
               <div className="item">
               <form action = "http://localhost:3000/api/item" method="post" >
                  <label for="name">Recipe name:</label> <br/>
                  <input type="text" id="name" name="name"/> <br/><br/>
                  <label for="fname">Recipe Content:</label> <br/>
                  <textarea id="content" name="content" rows="30" cols="50"></textarea><br/>
                  <input type="submit" class="btn btn-outline-dark" value = "submit"></input>
               </form>



               </div>

      

                  </div>
             </html>
            

       </div>
    );
}
 
export default About;