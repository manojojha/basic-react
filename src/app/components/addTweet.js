

import React, {useState, useContext} from 'react';
import {TweetContext} from './tweetContext'
export const AddTweet = ()=>{
    const [name,setName] = useState('');
    const [message,setMessage] = useState('');
    const [tweets, setTweets] = useContext(TweetContext)
    const updateName = e => {
        setName(e.target.value);
    }
   const updateMessage = e => {
        setMessage(e.target.value);
    }

    const addTweet = ()=>{
        setTweets(prevTweets => [...prevTweets,{name:name,message:message}]);
    }
    return (
        <div>
            <div class="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" value={name} class="form-control" id="name" onChange={updateName}/>
            </div>
            <div class="form-group">
            <label for="msg">Tweet:</label>
            <input type="text" value={message} class="form-control" id="msg" onChange={updateMessage}/>
            </div>
            <button class="btn btn-default" onClick={addTweet}>Submit</button>
      </div>
    )
}