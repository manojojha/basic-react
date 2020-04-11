import React, {Component} from 'react';

const MyInput = (props) =>{

    return (<input type="text" ref={props.inputRef}/>)
} 

const CustomInput = () => {
    let inputRef = null;
   const onClick = ()=>{
        inputRef.focus();
    }
    return (
        <div>
                <label htmlFor="lname">My Input:</label><br/>
                <MyInput inputRef = {(input) => inputRef=input}/>
                <input type="submit" value="Submit"  onClick={onClick}/>
        </div>
    )
}

export default class AddUser extends Component {
    onClick =() => {
        console.log(this.fname);
        alert(`fname : ${this.fname.value} | lname : ${this.lname.value}`);
    }
    onKeyUp(target, e){
        if(e.keyCode === 13){
            switch(target){
                case 'fname':
                    this.lname.focus();
                    break;
                case 'lname':
                    this.submit.focus();
                    break;
                default:
                    this.fname.focus();
            }
        }
    }
    render() {
        return (
            <div className="container">
                <h1>MyInput</h1>
                <CustomInput/>
                <br/>
                <h1>User</h1>
                <label htmlFor="fname">First name:</label><br/>
                <input type="text" ref={(input) => this.fname=input}  onKeyUp={ this.onKeyUp.bind(this,'fname')} id="fname" name="fname" /><br/>
                <label htmlFor="lname">Last name:</label><br/>
                <input type="text" ref={(input) => this.lname=input} onKeyUp={ this.onKeyUp.bind(this,'lname')} id="lname" name="lname"/><br/><br/>
                <input type="submit" value="Submit" ref={(input) => this.submit=input} onClick={this.onClick}/>
            </div>
        )
    }

}