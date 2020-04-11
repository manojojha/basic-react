import React from 'react';
import {Link} from 'react-router-dom'
//stateless component where we dont actually nead state and it will have props access only 
//for performance
export const Header = (props) =>{
        console.log(props)
        return (
            <nav className="navbar navbar-default">
            <div className="container-fluid">
                <ul className="nav navbar-nav">
                <li className="active"> <Link to="/">{props.homeLink}</Link> </li>
                <li><Link to="/about/us">About</Link> </li>
                <li><Link to="/user">User</Link> </li>
                <li><Link to="/shop">Shop</Link> </li>
                <li><Link to="/addUser">Add User</Link> </li>
                 <li><Link
                            to={{
                                pathname: "/settings",
                                state: {
                                    fromNavBar: true
                                }
                            }}
                        >
                            Settings
                        </Link></li>
                </ul>
            </div>
            </nav>
        )
    
}
//activeStyle
//activeClassName
//navigation from code
//params
//The useLocation hook returns the location object which contains the pathname, search, hash, key and the state properties of the current location.