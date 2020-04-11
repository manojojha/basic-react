import React , {useState, useContext} from 'react';
import {TweetContext} from './tweetContext'
import { Tweet }from './tweet';
export const TweetList = ()=>{

    const [tweets, setTweets] = useContext(TweetContext);
    return (
    <div> <h2>Lists</h2>
     {tweets.map( (tweet) => (
         <Tweet name={tweet.name}  message={tweet.message} key={tweet.id}/>
     ))}
    </div>
    )
}