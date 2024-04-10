import React from 'react'
import { Divider, Button, Grid } from '@mui/material';
import AdjustIcon from '@mui/icons-material/Adjust';

const OrderCard = () => {
  return (
    <div className='p-5 shadow-md shadow-grey hover:shadow-2xl border'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            <Grid item xs={6}>
                <div className='flex cursor-pointer'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/cropped/yphty48rakp9tpv7zuxx.jpg" alt="" />
                    <div className='ml-5'>
                        <p className='ml-5 space-y-2'>Dolo</p>
                        <p className='opacity-50 text-xs font-semibold'>MicroLbs</p>
                    </div>
                </div>
            </Grid>
            <Grid item xs={2}>
                <p>₹199</p>
            </Grid>
            <Grid item xs={4}>
                {true && <div>
                    <p>
                    <AdjustIcon sx={{width:"15px",height:"15px"}} className='text-green-600 mr-2 text-sm' />
                    <span>
                        Delivered on March 03
                    </span>
                    <p className='text-xs'>Your Item has been delivered</p>
                </p>              
                    </div>}
                {false &&<p>
                    <span>
                        Expected Delivery on March 03
                    </span>
                </p>}
            </Grid>
        </Grid>
    </div>
  )
}

export default OrderCard