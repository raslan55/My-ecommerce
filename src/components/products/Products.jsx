import { Loader, Placeholder } from 'rsuite';

import banner from '../../assets/10389998.jpg';
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



<section className="py-3 py-lg-5 py-xl-8">
  <div className="container overflow-hidden">
    <div className="row gy-5 gy-lg-0 align-items-lg-center justify-content-lg-between">
      <div className="col-12 col-lg-6 order-1 order-lg-0">
        <h1 className="display-3 fw-bold mb-3">Discover Fashion That Reflects Your Unique Personality. </h1>
        <p className="fs-4 mb-5"> Offer a unique discount code based on the customer's purchase history or style preferences.</p>
      
      </div>
      <div className="col-12 col-lg-5 text-center">
        <div className="position-relative">
          <img className="img-fluid position-relative z-2" loading="lazy" src={banner} alt="A Digital Agency Specialized in AI and Web 3.0"/>
        </div>
      </div>
    </div>
  </div>
</section>




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
              <div className="col-4  mt-3 mb-3" key={product.id}>
                <Card product={product} />
              </div>
            );
          })}
        </div>)}
       
      </div>
    </>
  );
}
