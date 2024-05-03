import React,{useState,useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Main(){
    const [data,setData]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            try{
              const response=await axios.get("http://localhost:3006/products");

              setData(response.data);
    
            }catch(error){
              console.log('error fetching data',error);
            }
          };
          fetchData();
        
    },[])
    return(
        <div>
      

      <div >
        <div className="bg-slate-300">
        <div className="py-10 px-40 text-2xl font-medium"><h1>Laptops:</h1></div>
        <ul>
          
            <div className="container mx-auto sm p-4 ">
              
                {data.map((datas)=>(
                <ul>
                <li className="container w-1/2 p-4 mx-auto text-center border-transparent my-20 rounded-xl shadow-lg shadow-black-4000/500 bg-white" key={datas.productName}> 
                Product Name: {datas.productName}<br/>
                Price: {datas.price}<br/>
                Rating: {datas.rating}<br/>
                Discount: {datas.discount}<br/>
                Availability: {datas.availability}<br/>
                <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm  text-center container my-5 sm w-20 p-4 mx-auto "><Link to={"/Details/${datas.productName}"}>Details</Link></button>

                </li>
                </ul>) )}
                
                


           
          
            </div> 
           
         
         
        </ul>
        </div>
      </div>
      </div>

    )
}

export default Main;