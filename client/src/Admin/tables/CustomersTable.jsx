import React, { useEffect, useState } from 'react';
import { Avatar, Card, CardHeader, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from "react-redux";

const UsersTable = () => {
  const navigate = useNavigate();
  const { auth } = useSelector((store) => store);

  return (
    <Card>
      <CardHeader
        title='All Users'
        sx={{ pt: 2, alignItems: 'center', '& .MuiCardHeader-action': { mt: 0.6 } }}
        action={<Typography onClick={() => navigate("/admin/users")} variant='caption' sx={{ color: "blue", cursor: "pointer", paddingRight: ".8rem" }}>View All</Typography>}
        titleTypographyProps={{
          variant: 'h5',
          sx: { lineHeight: '1.6 !important', letterSpacing: '0.15px !important' }
        }}
      />
      <TableContainer>
        <Table sx={{ minWidth: 390 }} aria-label='table in dashboard'>
          <TableBody>
            {auth?.users?.map(user => (
              <TableRow hover key={user.id} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell> <Avatar alt={user.name} src={user.avatar} /> </TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default UsersTable;
