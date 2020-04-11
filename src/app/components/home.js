import React, {Fragment} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import auth from '../services/auth.service'
// Fragment -> used to remove unwanted enclosing parent element while returning
// 1. use array 
// 2. use fragement
const Temp = () => {
    //using array
    // return ([
    //     <div key="1">Hi</div>,
    //     <div key="2">Hello</div>
    // ]),

    return (
        <Fragment>
            <div >Hi</div>,
            <div>Hello</div>
        </Fragment>
    )
}
// Type Checking using propTypes
Temp.propTypes = {
    strOrNum : PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    numArray : PropTypes.arrayOf(PropTypes.number),
    arrayOObj : PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        age : PropTypes.number
    }))
}
export class Home extends React.Component {
    constructor(props){
        super(props)
        this.age = props.age;
        this.state = {
            age: props.age, // only initialize in constructor
            status:0,
            homeLink: props.initialHomeLink
        }
        console.log('Constructor')
    }

    buttonClick() {   // event 
        this.age += 3;  // this wont change state of component

        this.setState({
            age: this.state.age +3
        })  // trigger state update.
        console.log(this.age);
    }
    onChangeHomeLink() {
        this.props.changeLink(this.state.homeLink);
    }
    //two way data binding ex.
    onHandleChange(event) {
        this.setState(
            { homeLink : event.target.value}
        )
    }
    componentWillMount(){
        console.log('componentWillMount : Called immediately before mounting occurs, and before Component#render. Avoid introducing any side-effects or subscriptions in this method.')

       console.log(' Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps prevents this from being invoked.');

    }
    componentDidMount(){
        console.log('componentDidMount : Called immediately after a component is mounted. Setting state here will trigger re-rendering.')
    }


    componentWillReceiveProps(newProps){
        console.log('componentWillReceiveProps' , newProps)
    }
    shouldComponentUpdate(newProps, nextState){ // just hover to see definition
        console.log('shouldComponentUpdate',newProps,nextState)
    }
    componentWillUpdate(newProps,nextState){
        console.log('componentWillUpdate', newProps,nextState)
    }
    componentDidUpdate(prevProps, prevstate){
        console.log('componentDidUpdate', prevProps,prevstate)
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
    // render(){
    //     let text = 'Home';  //{} use for binding data to ui
    //     //this.props
    //     return (
    //         <div className="jumbotron text-center">
    //             <h1>My {text} Component</h1>
    //             <p>Prop Name :  {this.props.name} and age : {this.props.age}</p>
    //             <p>Prop Name :  {this.props.name} and state age : {this.state.age}</p>
    //             <p>Object Prop : {this.props.user.name}</p>
    //             <ul>
    //              {this.props.user.hobbies.map((hobby, i)=> <li key={i}>{hobby}</li>)}
    //             </ul>
    //             <hr/>
    //             {this.props.children}
    //             <button type="button" className="btn btn-primary" onClick ={ this.buttonClick.bind(this)}>Primary</button> 
    //             <hr/>
    //             <button type="button" className="btn btn-primary" onClick ={ this.props.greet}>parent method</button>
    //             <hr/>
    //             <input type="text" value={this.state.homeLink} onChange={(event) => this.onHandleChange(event)}/>
    //             <button type="button" className="btn btn-primary" onClick ={ this.onChangeHomeLink.bind(this)}>change home link</button>
    //         </div>       
    //     )
    // }
    render() {
        return (
           <div>
              <h1>Home</h1>
              <button onClick={ () => {
                  auth.login( () => {
                      this.props.history.push('/addUser');
                  })
              }}>Log In</button>
           </div>
        )
     }
}
//Event listener wont work directly because of this context 
// 2 way to handle 1. arrow ()=> this.buttonClick() function 2. bind this.buttonClick.bind(this)
// PropTypes
Home.propTypes = {
    name : PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object,
    children:PropTypes.element
}
    
//component
//props  what you pass from other component to child component
//event
//propTypes
//state allow rerender of ui
//setState
//how react update ui it has virtual dom representation of actual dom
//performing any operation on actual dom is costly so when we perform any operation it recreate virtual dom and compare old virtual dom with new virtual dom if anything is changed
// then it updates only what it needs to update // test crome rerender  then enable paint flash
// stateless component
//parent child communication using props we pass reference from parent to child then use that reference in child component
//passing data between parent child. 
//two way data binding
//component life cycle
// initial rendering
//constructor >> calls only once -- > set initial state
//componentWillMount --> immediatly before initial rendering // when component load into app (only once)
//render --> render component
//componentDidMount  --> immediatly  initial rendering (initial only onnce) -> ajax call , subscription
// rerender
//render
//componentWillRecieveProps --> When component receive new props
//shouldComponentUpdate(should return false to prevent rendering) --> before rendering, after recieve new props or state
//componentWillUpdate--> before rendering, after recieve old props or state
//compomentDidUpdate --> after components update are flushed to dom
//componentDidUpdMount --> immediatly before removing component from dom

//pure component --> to avoid rerendering if state doesnot change or if state is same
// 1. using shouldComponentUpdate
// 2. pure component -- > it does shallow compare > dont use if object is much complex -- use in leaf node not in parent otherwise nothing will render
// refs and dom -> Reactjs Ref attribute to access DOM Elements. Use Callback function to set ref property. Use Refs to focus on Input field element. 
// shadow dom --> it is basically used for scoped css