import React, {useState, useEffect} from "react";

import axios from "axios";



function Main () {

    const createEmployee = async (data: Employee) => {
        const { data: response } = await axios.post('https://20.244.56.144/test/auth', data);
        return response.data;
      };
      
      interface Employee {
        companyNAme: "AMZ";
        ownerName: "Nishad";
        rollNo: "20211CDV0012";
        ownerEmail:"nishad.20211cdv0012@presidencyuniversity.in";
        accessCode:"aoGrsJ";
      };

    const [products, setProducts] = useState([]);

    useEffect( () => {
        const fetchProducts=async() => {
          try {
            const response = await axios.get('http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000');
            setProducts(response.data);
          } catch (error) {
            console.log('Error fetching data:', error);
          }
        };
        fetchProducts();
      } 
     )

     return (
        <div >
          <h1>Laptops:</h1>
          <ul>
            {products.map((product) => (
              <li key={product.productName}>
              {product.ProductName}, {product.price}, {product.rating}, {product.discount}, {product.availability}
            </li>
            ))}
          </ul>
        </div>
      );
    }

export default Main;

