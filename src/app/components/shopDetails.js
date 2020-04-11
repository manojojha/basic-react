import React, {useState, useEffect} from 'react';
export const ShopDetails = ({match})=>{
    const [item , setItem] = useState([]);

    useEffect(() => {
        fetchItem();
    },[])

   const fetchItem = async () => {
        const data = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);
        const item = await data.json();
        console.log(item)
        setItem(item);
    }
    return (
        <div>
           {item.name}
        </div>
    )
}