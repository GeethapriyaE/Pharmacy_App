import React from 'react'
import { Divider, Button, Grid } from '@mui/material';
import Header from '../Header';
import OrderCard from './OrderCard';

const orderStatus=[
    {label:"On the Way", value:"on_the_way"},
    {label:"Delivered", value:"delivered"},
    {label:"Cancelled", value:"cancelled"},
    {label:"Returned", value:"returned"}
]
const Order = () => {
  return (
    <div >
        <div className='h-auto bg-primary'>
        <Header />
        <div className="border-b border-gray-200 w-full"></div>
      </div>
      <div className='px:3'>
        <Grid container sx={{justify:"space-between",py:5,px:5}}>
            <Grid item xs={2.5}>
                <div className='h-auto shadow-lg bg-white p-5 sticky top-5'>
                    <h1 className='font-bold text-lg'>Filter</h1>
                    <div className='space-y-4 mt-10'>
                        <h1 className='font-semibold'>ORDER STATUS</h1>
                        {orderStatus.map((option)=><div className='flex items-center'>
                            <input defaultValue={option.value} type="checkbox" className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500 ' />
                            <label className='ml-3 text-sm text-gray-600' htmlFor={option.value}>
                                {option.label}
                            </label>

                        </div>)}
                    </div>
                </div>
            </Grid>
            <Grid item xs={9} sx={{px:4}}>
                <div className='space-y-4 w-full'>
                {[1,1,1,1,1,1].map((item)=><OrderCard />)}
                </div>
            </Grid>
        </Grid>
        </div>
    </div>
  )
}

export default Order