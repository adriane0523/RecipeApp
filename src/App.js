
import React,  { useState, useEffect, Component}  from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';
import Navigation from './components/Navigation';

class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };


componentDidMount() {
  this.callApi()
    .then(res => this.setState({ response: res }))
    .catch(err => console.log(err));
}

callApi = async () => {
  const response = await fetch("http://localhost:3000/api/item");
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  
  return body;
};




  render() {
/*
    num = Math.floor(Math.random() * 1); 
    let arr = [{name:"Egg Sandwhich", content: "2 bread\n3 sunny side eggs\n2bacon\nmayo\nsirrcha\n Put bread, then 3 eggs, 2 bacons, put sirrcha and mayo on the other bread then combine"},
    
    
    ];*/

    
    
let arr = this.state.response.data
console.log(arr)


    return (      
      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
            <Route path="/recipes" component={About} exact/> 
             <Route path="/" component={() => <Home name={arr} content={""} />}/>
   
           
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;
