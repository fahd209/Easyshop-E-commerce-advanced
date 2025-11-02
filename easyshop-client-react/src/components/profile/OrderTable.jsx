import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useAuth } from '../context/AuthContext'
import baseUrl from '../config/baseUrl';

const OrderTable = () => {
  const { currentUser } = useAuth();
  const [orderData, setOrderData] = useState([{}])
  const [orderTotal, setOrderTotal] = useState(0);

  // get request for current user orders
  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const url = `${baseUrl}/orders`;
        const response = await axios.get(url, {
          headers: { // passing the current user token every time the req is called
            'Authorization': `Bearer ${currentUser.token}`,
          },
        })
        console.log(response.data)
        setOrderData(response.data)
        getOrderTotal();
      }
      catch (error) {
        console.log(error)
      }
    }


    fetchOrderData();
  }, [])

  const getOrderTotal = () => {
    const total = orderData.lineItems.reduce((total, item) => {
      return total + item.sales_price;
    }, 0);

    setOrderTotal(total);
  }

  const hasData = orderData.length > 0;
  const hasValidData = hasData && orderData[0].orderId !== undefined;

  return (
    <div>
      {hasValidData ? (

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Order number</TableCell>
                <TableCell align="right">Items</TableCell>
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orderData.map((order) => (
                <TableRow
                  key={null}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {order.orderId}
                  </TableCell>
                  <TableCell align="right">{order.itemsTotal}</TableCell>
                  <TableCell align="right">{order.date}</TableCell>
                  <TableCell align="right">${order.orderTotal}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      ) : (
        <p>No orders found</p>
      )}

    </div>
  )
}

export default OrderTable
