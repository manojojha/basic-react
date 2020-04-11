import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
export const Shop = ()=>{
    const [items , setItems] = useState([]);

    useEffect(() => {
        fetchItem();
    },[])

   const fetchItem = async () => {
        const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
        const items = await data.json();
        console.log(items)
        setItems(items.items);
    }
    return (
        <div>
            { items.map((item) => (
                <h1 key={item.id}>
                  <Link to={`/shop/${item.id}`}>{item.name}</Link>  
                </h1>
            ))}
        </div>
    )
}