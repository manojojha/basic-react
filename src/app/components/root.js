import React, {lazy, Suspense} from 'react';
import {Header} from './header'
//const Header = lazy(() => import('./header'));
export class Root extends React.Component {
    render(){
        return (
            <div className="container">
                {/* <Suspense fallback = {<div>Loading...</div>}>
                 <Header homeLink="Home"/>
                </Suspense> */}
                <Header homeLink="Home" />
                <div className="row">
                {this.props.children}
                </div>  
            </div>
     
        )
    }
}


//example.com --> handle by server/#/home --> # single page application handle
//example.com/home -- > request goes to server but it can be handle by pushstate and server need to send index.html
//route ->> rendered component based on url
//switch --> matches first route and rendered component
//exaxt --> matches exact url

//Suspense load fallback untill main component loaded

