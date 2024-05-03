import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Details () {
    const [data, setData] = useState([])
    const {productName} = useParams();
    useEffect( () => {
        axios.get('http://localhost:3006/products' + productName)
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, [])
    return(
        <div>
            <h3>Details Of The Product</h3>
            <div>Name: {data.productName}</div><br/>
            <div>Price: {data.price}</div><br/>
            <div>Rating: {data.rating}</div><br/>
            <div>Discount: {data.discount}</div><br/>
            <div>Availability: {data.availability}</div><br/>
            
        </div>
    )
}

export default Details;