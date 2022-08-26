import React from 'react'
import Card from './Card';

const Product = (props) => {

  return (
    <>
      <div className="mainHeadingContainer">
        <h1 className='mainHeading'>ITEMS OR PRODUCTS</h1>
      </div>
      <div className="productPage">
        {
          props.res.map((val) => {
            return (
              <Card cardid={val.id}
                cardimg={val.image}
                cardname={val.title}
                cardprice={val.price}
                btnclass='addbtn'
                btntext="Add to Cart"
                carddesc={val.description}
                btnfunction={props.addtocart}
              />
            );
          })
        }
      </div>
    </>
  )
}

export default Product;