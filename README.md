<h1>RecipeApp</h1>
<p>This was made to learn the MERN stack (Mongo.db, Express.js, React.js, and Node.js). This is a simple web app where users can add recipes to the database and read 
from them.</p>
  <br>
  <p>In more Detail...</p>
  <p>
 I created a front end using the React.js
framework. I created two pages using two routes to render their relative components. One page
allows me to create a recipe and send it to the database by inputting name and content then
submitting it with a button using the HTML form. This HTML form calls an API endpoint from
Node.js: POST localhost:3000/api/item which sends the information in a JSON format. On the
backend, Node.js is waiting for a request from the frontend. Once it gets a request it will parse
the JSON, create a new Schema (which like creating a new object to put inside a database), then
send it to MongoDB to be written into. After successfully writing it in, it will send a JSON
response saying success.
The other page will generate recipes from the database. The page will call the API endpoint from
Node.js backend: GET localhost:3000/api/item which will get a list of recipe items. If the API
call is a success, it will reference the MongoDB database, get all the items, then it will send a
JSON response where the front end can parse it and put the information on the page using
HTML.
</p>

![asdasd](https://user-images.githubusercontent.com/38186787/118220057-94551a80-b42f-11eb-9aa6-43e8e5ca2a62.PNG)
![zc](https://user-images.githubusercontent.com/38186787/118220088-a8008100-b42f-11eb-86ee-151846acf069.PNG)
![sw](https://user-images.githubusercontent.com/38186787/118220114-b77fca00-b42f-11eb-82d3-39aa888e44c3.PNG)
