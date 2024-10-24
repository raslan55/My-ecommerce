import React from 'react'

export default function Card(props) {
    const {product}=props;
  return (
    <>
    <div className="card border-0 rounded-25 shadow h-100">
    <img src={product.image} className="card-img" alt={product.description}/>
    <div className="card-body mt-3 mb-3">
        <div className="row">
            <div className="col-10">
                <h6 className="card-title">{product.title}</h6>
                <p className="card-text">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    ({product.rating.rate})
                </p>
            </div>
            <div className="col-2">
                <i className="bi bi-bookmark-plus fs-2"></i>
            </div>
        </div>
    </div>
    <div className="row align-items-center text-center g-0">
        <div className="col-4">
            <h5>{product.price}$</h5>
        </div>
        <div className="col-8">
            <a href="/#" className="btn btn-dark  shadow  w-100 p-2 rounded-0  text-white text-decoration-none">ADD TO CART</a>
        </div>
    </div>
</div>

    </>
  )
}
