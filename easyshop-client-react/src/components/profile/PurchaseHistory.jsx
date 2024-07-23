import React from 'react'
import './Profile.css'
import OrderTable from './OrderTable'

const PurchaseHistory = () => {
  return (
    <div className='purchaseHistory-container'>
      <h1>Purchase History</h1>
      <div className='purchaseHistory'>
        <OrderTable />
      </div>
    </div>
  )
}

export default PurchaseHistory
