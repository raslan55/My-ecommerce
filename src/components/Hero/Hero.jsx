import React from 'react'
import banner from '../../assets/10389998.jpg';

export default function Hero() {
  return (
    <div>
      <section className="py-3 py-lg-5 py-xl-8">
  <div className="container overflow-hidden">
    <div className="row gy-5 gy-lg-0 align-items-lg-center justify-content-lg-between">
      <div className="col-12 col-lg-6 order-1 order-lg-0">
        <h1 className="display-3 fw-bold mb-3">Discover Fashion That Reflects Your Unique Personality. </h1>
        <p className="fs-4 mb-5"> Offer a unique discount code based on the customer's purchase history or style preferences.</p>
      </div>
      <div className="col-12 col-lg-5 text-center">
        <div className="position-relative">
          <img className="img-fluid position-relative z-2"  src={banner} alt="A Digital Agency Specialized in AI and Web 3.0"/>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
