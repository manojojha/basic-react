import React, {useState, createContext} from 'react';

export const TweetContext = createContext();

export const TweetProvider = (props)=>{
    const [tweets, setTweets] = useState([
        { id: 1, name: 'manoj', message:'hi how are you'},
        { id: 2, name: 'ajay', message:'cool!!!!!!!!!!!!'},
        { id: 3, name: 'modi', message:'i am fine'}
    ]);


    return (
        <TweetContext.Provider value ={[tweets,setTweets]}>
            {props.children}
        </TweetContext.Provider>
    )
} 