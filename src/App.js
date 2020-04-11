import React from 'react';
// import {Header} from './app/components/header';
import {Home} from './app/components/home';
import {Root} from './app/components/root';
import {About} from './app/components/about';
import {Users} from './app/components/user';
import {Shop} from './app/components/Shop';
import './App.css';
import { Route, Link, BrowserRouter as Router ,Switch, Redirect,Prompt} from 'react-router-dom'
import { ShopDetails } from './app/components/shopDetails';
import AddUser from './app/components/addUser';
import AuthRoute from './app/protected.route';



import { useLocation} from "react-router";

const Settings = () => {
    let location = useLocation();
    console.log(location);
    return <div>settings component</div>;
};

//ex1
// //Redux
// import { createStore } from 'redux';

// //ACTION -> return object

// const increment = () => {
//    return {
//      type: 'INCREMENT'
//    }
// }
// const decrement = () => {
//   return { 
//     type: 'DECREMENT'
//   }
// }

// // REDUCER

// const counter = (state= 0, action) =>{
//     switch(action.type) {
//       case 'INCREMENT' : 
//         return state + 1;
//       case 'DECREMENT' : 
//         return state - 1;
//     }
// }

// //STORE

// let store = createStore(counter);

// store.subscribe( ()=> {console.log(store.getState())});

// //DISPATCH

// store.dispatch(increment());

export class App extends React.Component {

  constructor(){
    super()
    this.state = {
      homeLink: 'Home',
      homeMounted: true,
      loggedIn : false
    }
  }
  onGreat(){ // parenet child communication
    //this then it has to bind
    alert('hi from called child');
  }

  onChangeHomeLink(newName){
    this.setState({homeLink:newName});
  }

  onChangedHomeMounted(){
    this.setState({
      homeMounted: !this.state.homeMounted
    })
  }

  // render(){
  //  let  user = {
  //     name: 'Rahul',
  //     hobbies: ['Cricket', 'Reading']
  //   };
  //   let homeComp = ''
  //   // if(this.state.homeMounted){
  //   //   homeComp = (
  //   //     <Home  name={'Manoj'} 
  //   //     age={27} 
  //   //     user={user} 
  //   //     greet={this.onGreat} 
  //   //     changeLink={this.onChangeHomeLink.bind(this)}
  //   //     initialHomeLink={this.state.homeLink}>
  //   //       {/* <p>This is from App component</p>  this will go in this.props.children */}
  //   //     </Home>
  //   //   )
  //   //}
  //   return (
  //       <Root>
  //         <About></About>
  //       </Root>
  //       // <div className="container">
  //       //   <Header homeLink={this.state.homeLink}/>
  //       //   {/* <Home  name={'Manoj'} 
  //       //   age={27} 
  //       //   user={user} 
  //       //   greet={this.onGreat} 
  //       //   changeLink={this.onChangeHomeLink.bind(this)}
  //       //   initialHomeLink={this.state.homeLink}>
  //       //     {/* <p>This is from App component</p>  this will go in this.props.children */}
  //       //   {/* </Home> */} */}
  //       //   {homeComp}
  //       //   <hr/>
  //       //   <button type="button" className="btn btn-primary" onClick ={ this.onChangedHomeMounted.bind(this)}>umount mount</button>
  //       // </div>
  //   );
  // }

  render(){
    return(
    <Router>
      <Prompt
       when={!this.state.loggedIn}
       message={(location)=>{
         return location.pathname.startsWith('/about') ? 'Are you sure' : true;
       }

       }
      />
      <Root homeLink={this.state.homeLink}>
       {/* <IndexRoute component = {About} /> */}
       <Switch>
       <Route exact path="/" component={Home} />
       <Route path = "/home" component = {Home} />
       <Route path = "/about/:msg" render={({match})=>(
          this.state.loggedIn ? (<About msg={match.params.msg}/>) : (<Redirect to="/"/>) 
       )} />
       <Route path = "/user/:name" component = {Users} />
       <Route exact path = "/shop" component = {Shop} />
       <Route path = "/shop/:id" strict component = {ShopDetails} />
       <AuthRoute path = "/addUser" component = {AddUser} />
       <AuthRoute path="/settings" component={Settings} />
       </Switch>
      </Root>
      
 </Router>)
  }
}

//export default App;
//path use regular expression to match url
//strict will match exact eg. /about/
//NavLink-> highlight active url -> activeStyle = {{color:green}}
// Switch: To render a single component, wrap all the routes inside the Switch Component.
{/* <Switch> 
    <Route exact path='/' component={Home}></Route> 
    <Route exact path='/about' component={About}></Route> 
    <Route exact path='/contact' component={Contact}></Route> 
</Switch> */}

{/* <Router>
  <Nav></Nav>
  <switch>
    <Route></Route>
    <Route></Route>
  </switch>
</Router> */}
//Redux
//Store ->  Store all state of app (Globalized state)
//Action -> Its just describe what you wana do?
//Reducer -> How your action tranfromed from one state to other
//Dispatch -> where we actualy perform action

//functional component doesnot have state -> use for presentational purpose
// use class as container component -> state + lifecycle hooks
//props: property of a component pass as attribute
//props.children --> access contents of a component
//setState --> it change state and create new object and then compare with previus object and then find it find dom which has to update
// its an asyncronous operation
//events - > pass downward but prapogate upward.
// <Child {...props} name='name'/>
//sibling communications ->> it happens by parent
// any component to any component --> event emitter
// list and keys
// can't mutate state directly inside array -> need to create copy and then update then use setState method
//React Lazy Loading & Code splitting

// When component rendered from route then it get history func in props.