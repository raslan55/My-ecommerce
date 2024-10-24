import { Loader, Placeholder } from 'rsuite';

import React, { useState } from "react";
import Card from "../Card/Card";
import { useEffect } from "react";

export default function Products() {
  const DataURL = "https://fakestoreapi.com/products";
  const [products, setproducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(DataURL);
        const data = await response.json();
        setproducts(data);

        setTimeout(() => {
          setIsLoading(false);
        }, 20000);
      
      } catch (error) {
        console.log("error message",error)
        setIsLoading(false);

      }
    };

    fetchData();

  }, []);
  return (
    <>




<section className='Products'>
<div className="container mt-5">
<div className='row'>
<div className="col-12  ">
      <h3 className="display-5 fw-bold mb-5 mt-3">Discover Your New Favorites </h3>

      
      </div>
</div>
      

     
        {isLoading?(<div className="text-center">  
          <Placeholder.Paragraph rows={8} />
          <Loader  size="lg" content="loading..." vertical />
          </div>)
          
           : ( <div className="row gy-3">
          {products.map((product) => {
            return (
              <div className="col-lg-4 col-sm-12  col-md-6 mt-3 mb-3" key={product.id}>
                <Card product={product} />
              </div>
            );
          })}
        </div>)}
       
      </div>
</section>


    
    </>
  );
}
