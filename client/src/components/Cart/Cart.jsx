import React from 'react'
import CartItem from './CartItem'
import Header from '../Header'
import { Divider, Button, Grid } from '@mui/material';

const Cart = () => {
  return (
    <div>
      <div className='h-auto bg-primary'>
        <Header />
        <div className="border-b border-gray-200 w-full"></div>
      </div>

      <div className="lg:grid grid-cols-3 lg:px-10 relative">
        <div className='col-span-2'>
          {[1, 1, 1, 1].map((item, index) => (
            <Grid key={index} item lg={12}>
              <CartItem />
            </Grid>
          ))}
        </div>

        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-8">
          <div className='border'>
            <p className='uppercase font-bold opacity-60 pb-4 px-2'>Price Details</p>
            <Divider />
            <div className='space-y-3 font-semibold mb-10'>
              <div className='flex justify-between pt-3 text-black'>
                <span>Price</span>
                <span>₹14697</span>
              </div>
              <div className='flex justify-between pt-3 '>
                <span>Discount</span>
                <span className='text-green-600'>₹3419</span>
              </div>
              <div className='flex justify-between pt-3 '>
                <span>Delivery Charge</span>
                <span className='text-green-600'>Free</span>
              </div>
              <div className='flex justify-between pt-3 font-bold'>
                <span>Total Amount</span>
                <span className='text-green-600'>₹1278</span>
              </div>
            </div>
            <Button color="secondary" variant="contained" className='w-full mt-5' sx={{ px: "2.5rem", py: "0.7rem", bgcolor: "#9155fd" }}>
              CHECKOUT
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
