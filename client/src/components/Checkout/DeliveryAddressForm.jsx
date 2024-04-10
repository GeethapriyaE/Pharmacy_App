import React from 'react';
import { Grid, Button, Box, TextField } from '@mui/material';
import AddressCard from '../AddressCard/AddressCard';

const DeliveryAddressForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("address");
        const data = new FormData(e.currentTarget);
        
        const address={
            firstName:data.get("firstName"),
            lastName:data.get("lastName"),
            streetAddress:data.get("address"),
            city:data.get("city"),
            state:data.get("state"),
            zipCode:data.get("zip"),
            mobile:data.get("phoneNumber")
        }
        console.log("address",address);
    }

    return (
        <div>
            <Grid container spacing={4}>
                <Grid item xs={12} lg={5}>
                    <Box className='border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'>
                        <div className='p-5 py-7 border-b cursor-pointer'>
                            <AddressCard />
                            <Button sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }} size='large' variant='contained'>
                                Deliver Here
                            </Button>
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={7}>
                    <Box className='border rounded-md shadow-md p-5'>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField required type="text" id="firstName" name="firstName" label="First Name" fullWidth autoComplete="given-name" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required type="text" id="lastName" name="lastName" label="Last Name" fullWidth autoComplete="given-name" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField required type="text" id="address" name="address" label="Address" fullWidth autoComplete="given-name" multiline rows={4} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required type="text" id="city" name="city" label="City" fullWidth autoComplete="given-name" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required type="text" id="state" name="state" label="State/Province/Region" fullWidth autoComplete="given-name" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required type="number" id="zip" name="zip" label="Zip / Postal code" fullWidth autoComplete="shipping postal-code" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required type="number" id="phoneNumber" name="phoneNumber" label="Phone Number" fullWidth autoComplete="given-name" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <div className='border-b cursor-pointer'>
                                        <Button sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }} size='large' variant='contained' type='submit'>
                                            Submit
                                        </Button>
                                    </div>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}

export default DeliveryAddressForm;
