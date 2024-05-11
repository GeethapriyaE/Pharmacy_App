import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import RegisterUserForm from "./Register";
import { useEffect, useState } from "react";
import LoginUserForm from "./Login";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Alert, Snackbar } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function AuthModal({ handleClose, open }) {
  const location = useLocation();
  const { auth } = useSelector((store) => store);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.user) {
      handleClose();
      if (auth.user?.role === "ADMIN") {
        navigate('/admin');
      }
    }
  }, [auth.user]);
//   useEffect(() =>{
//   if (!auth.user || auth.user.role !== "ADMIN") {
//     // If user is not logged in or does not have admin role, redirect to home page
//     navigate("/");
//   }
// }, [auth.user, navigate]);
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        size="large"
      >
        <Box className="rounded-md" sx={style}>
          {location.pathname === "/login" ? (
            <LoginUserForm />
          ) : (
            <RegisterUserForm />
          )}
        </Box>
      </Modal>
    </>
  );
}
