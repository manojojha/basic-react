import React from 'react'
import {useParams, useHistory, useLocation} from 'react-router'
import { useRouteMatch } from "react-router";
import {TweetProvider} from './tweetContext';
import {TotalTweet} from './totalTweet';
import {TweetList} from './tweetList';
import {AddTweet} from './addTweet'
export const Users = ()=> {
    const {name} = useParams();
    const history = useHistory();
    const location = useLocation();
    let match = useRouteMatch({
      path: "/Movies/:id/",
      strict: true,
      sensitive: true
    });
    // onBackNavigation() {
    //   //  history.push("/home");
    // }
    const goBack = () =>{
      history.goBack();
    }
    return (
      <TweetProvider>
        <div className="col-md-12">
           <h2>Name : {name}</h2>
          <h3>Users Tweets</h3>
          <AddTweet/>
          <TotalTweet></TotalTweet>
          <TweetList></TweetList>
          <button onClick={goBack}>Go Back</button>
          <button onClick={() => history.push("/")}>Home</button>
          {/* <div>
            {match && <Movies match={match} />}
          </div> */}
        </div>
      </TweetProvider>

    )
  
}


//context api drawback --> all the component get rerender whoever use this context on update 
// good for rendering

//The useHistory gives us access to the history object which helps us programmatically navigate or change routes.

//useRouteMatch gives you access to the match property without rendering a <Route> component. It matches the URL just like a Route would and it accepts an exact, strict, path and sensitive options just like a <Route>. Before V5.1 the ways to access the match object are through:

