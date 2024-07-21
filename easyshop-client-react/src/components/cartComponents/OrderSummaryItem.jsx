import React from 'react'
import './Cart.css'

const OrderSummaryItem = ( { name, quantity, price } ) => {
  return (
    <div className='order-summaryItem'>
        <div >
            <span>{name}</span>
            <p>Quantity: {quantity}</p>
        </div>
        <div>
            <p>${price * quantity}</p>
        </div>
    </div>
  )
}

export default OrderSummaryItem
