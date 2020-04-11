import React, {useContext} from 'react';
import {TweetContext} from './tweetContext'
export const TotalTweet = ()=>{
    const [tweets, setTweets] = useContext(TweetContext);
    return (
    <p> Total Counts { tweets.length}</p>
    )
}