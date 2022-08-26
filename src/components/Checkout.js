import React from 'react'
import Card from './Card';

const Checkout = (props) => {
  var totalPrice = 0;
  props.cartItem.map((val) => {
    return(
      totalPrice+=val.data.price
    );
  })
  return (
    <>
      <div className="mainHeadingContainer">
        <h1 className='mainHeading'>CHECKOUT</h1>
      </div>
      <div className="checkoutContainer">
        <div className="checkoutPage">
          {
            props.cartItem.map((val) => {
              return (
                <Card cardid={val.key}
                  cardimg={val.data.image}
                  cardname={val.data.title}
                  cardprice={val.data.price}
                  btnclass='removebtn'
                  btntext="Remove"
                  carddesc={val.data.description}
                  btnfunction={props.removefromcart}
                />
              );
            })
          }
        </div>
        <div className="orderContainer">
          <div className="orderDetail">
            <h1>Order Details</h1>
            <div className="orderSubHeading">
              <span>Items</span>
              <span>Price</span>
            </div>
            <div className="orderList">
              {
                props.cartItem.map((val) => {
                  return (
                    <div className="orderListItem">
                      <span className="orderListItemName">{val.data.title}</span>
                      <span className="orderListItemPrice">${val.data.price}</span>
                    </div>
                  );
                })
              }
            </div>
            <div className="orderTotalHeading">
              <span>Total</span>
            </div>
            <div className="orderTotal">
              <span>{props.cartItem.length ? props.cartItem.length : "0"} Items</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout;