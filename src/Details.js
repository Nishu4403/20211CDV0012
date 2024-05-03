import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

function Details () {
    const [data, setData] = useState([])
    const {productName} = useParams();
    return(
        <div>
            Details
        </div>
    )
}

export default Details;