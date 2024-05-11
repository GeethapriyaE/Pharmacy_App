import { Avatar,  AvatarGroup,Menu,
  MenuItem, Box,Button, Card, CardHeader, Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from "react";
import { general_medicine} from '../../components/general_medicine'
import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";

const RecentOrders = () => {
    const navigate=useNavigate();
    const { adminsOrder } = useSelector((store) => store);
    const [anchorElArray, setAnchorElArray] = useState([]);
  return (
    <Card>
       <CardHeader
          title='Recent Orders'
          sx={{ pt: 2, alignItems: 'center', '& .MuiCardHeader-action': { mt: 0.6 } }}
          action={<Typography onClick={()=>navigate("/admin/orders")} variant='caption' sx={{color:"blue",cursor:"pointer",paddingRight:".8rem"}}>View All</Typography>}
          titleTypographyProps={{
            variant: 'h5',
            sx: { lineHeight: '1.6 !important', letterSpacing: '0.15px !important' }
          }}
        />
    <TableContainer>
      <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
        <TableHead>
          <TableRow>
             <TableCell>Image</TableCell>
            <TableCell>Title</TableCell>
          
            <TableCell>Price</TableCell> 
          </TableRow>
        </TableHead>
        <TableBody>
              {adminsOrder?.orders?.slice(0,5).map((item, index) => (
                <TableRow
                  hover
                  key={item.name}
                  sx={{ "&:last-of-type td, &:last-of-type th": { border: 0 } }}
                >
                  <TableCell sx={{}}>
                  <AvatarGroup max={4} sx={{justifyContent: 'start'}}>
      {item.orderItems.map((orderItem)=><Avatar  alt={item.title} src={orderItem.product?.imageUrl} /> )}
    </AvatarGroup>
                    {" "}
                  </TableCell>

                  <TableCell
                    sx={{ py: (theme) => `${theme.spacing(0.5)} !important` }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography
                        sx={{
                          fontWeight: 500,
                          fontSize: "0.875rem !important",
                        }}
                      >
                        {item?.orderItems.map((order) => (
                          <span className=""> {order.product?.title},</span>
                        ))}
                      </Typography>
                      <Typography variant="caption">
                        {item?.orderItems.map((order) => (
                          <span className="opacity-60">
                            {" "}
                            {order.product?.brand},
                          </span>
                        ))}
                      </Typography>
                    </Box>
                  </TableCell>

                  <TableCell>{item?.totalPrice}</TableCell>
      
                  <TableCell
                    sx={{ textAlign: "center" }}
                    className="text-white"
                  >
                    {/* <Button>{item.orderStatus==="PENDING"?"PENDING": item.orderStatus==="PLACED"?"CONFIRMED":item.orderStatus==="CONFIRMED"?"SHIPPED":"DELEVERED"}</Button> */}
                    <div>
                    </div>
                  </TableCell>
                  <TableCell
                    sx={{ textAlign: "center" }}
                    className="text-white"
                  >
    
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
      </Table>
    </TableContainer>
  </Card>
  )
}

export default RecentOrders