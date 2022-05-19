import { useState } from "react";

import {
  Message,
  PeopleAltOutlined,
  SearchOutlined,
  Twitter,
} from "@mui/icons-material";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { DialogContainer } from "../components/Dialog";

export const SignIn = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister,setOpenRegister] = useState(false);
  // Login
  const handleCloseLogin = () => setOpenLogin(false);
  const handleOpenLogin = () => setOpenLogin(true);
  // Register
  const handleCloseRegister = () => setOpenRegister(false);
  const handleOpenRegister = () => setOpenRegister(true);

  return (
    <Box display="flex" height="100vh">
      {/* BLUE SIDE */}
      <Box
        sx={{
          background: "#71c9f8",
          flex: "0 0 50%",
          position: "relative",
          overflow: "hidden",
        }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Twitter
          color="primary"
          sx={{
            position: "absolute",
            left: "50%",
            top: "53%",
            transform: "translate(-50%,-50%)",
            width: "350%",
            height: "350%",
          }}
        />
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            width: "380px",
            position: "relative",
          }}
        >
          <li>
            <Typography
              variant="h6"
              fontWeight={600}
              color="white"
              display="flex"
              alignItems="center"
            >
              <SearchOutlined fontSize="large" sx={{ marginRight: "5px" }} />
              Читайте о том , что вам интересно
            </Typography>
          </li>
          <br />
          <li>
            <Typography
              fontWeight={600}
              color="white"
              variant="h6"
              display="flex"
              alignItems="center"
            >
              <PeopleAltOutlined fontSize="large" sx={{ marginRight: "5px" }} />
              Узнайте о чем говорят в мире
            </Typography>
          </li>
          <br />
          <li>
            <Typography
              fontWeight={600}
              color="white"
              variant="h6"
              display="flex"
              alignItems="center"
            >
              <Message fontSize="large" sx={{ marginRight: "5px" }} />
              Присоединяйтесь к общению
            </Typography>
          </li>
        </ul>
      </Box>
      {/* LOGIN SIDE */}
      <Box
        sx={{ flex: "0 0 50%", overflow: "hidden" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box sx={{ width: "380px" }}>
          <Twitter sx={{ fontSize: "45px" }} color="primary" />
          <Typography
            variant="h4"
            fontWeight={700}
            marginBottom={5}
            marginTop={3}
          >
            Узнайте, что происходит в мире прямо сейчас
          </Typography>
          <Typography mb={2} fontWeight={600}>
            Join too twitter
          </Typography>
          <Button
            sx={{ marginBottom: "15px" }}
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleOpenRegister}
          >
            Sign Up
          </Button>
          <Button
            onClick={handleOpenLogin}
            variant="outlined"
            color="primary"
            fullWidth
          >
            Sign In
          </Button>
        </Box>
      </Box>
      {/* Login   */}
      <DialogContainer title="Войти в твиттер" open={openLogin} handleClose={handleCloseLogin} >
        <FormControl fullWidth>
          <TextField 
            label="Email"
            variant="filled"
            fullWidth
            InputLabelProps={{
              shrink: true  
            }}
            sx={{display:'block',marginBottom: '10px'}}
          />
          <TextField 
            label="Пороль"
            variant="filled"
            fullWidth
            InputLabelProps={{
              shrink: true  
            }}
            sx={{display:'block',marginBottom: '20px',background:"silver"}}
          />
          <Button color="primary" variant="contained">
            Войти
          </Button>
        </FormControl>
      </DialogContainer>
      
      {/* REGISTER */}

      <DialogContainer title="Создайте учетную запись" open={openRegister} handleClose={handleCloseRegister} >
        <FormControl fullWidth>
          <TextField 
            fullWidth
            label="Имя"
            variant="filled"
            InputLabelProps={{
              shrink: true  
            }}
            sx={{display:'block',marginBottom: '10px'}}
          />
          <TextField 
            label="Email"
            variant="filled"
            fullWidth
            InputLabelProps={{
              shrink: true  
            }}
            sx={{display:'block',marginBottom: '10px'}}
          />
          <TextField 
            label="Пороль"
            variant="filled"
            fullWidth
            InputLabelProps={{
              shrink: true  
            }}
            sx={{display:'block',marginBottom: '20px',background:"silver"}}
          />
          <Button color="primary" variant="contained">
            Создать
          </Button>
        </FormControl>
      </DialogContainer>
    </Box>
  );
};
