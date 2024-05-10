import axios from "axios";
import { useEffect } from "react";
import { NotificationManager } from "react-notifications";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../redux/app.reducer";
import Wallet from "./wallet";
import { AppBar, Box, Button, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import FaqPage from "./faqPage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const UserPage = () => {

    const navigate = useNavigate();


    // const [data, setData] = useState(null)
    const token = useSelector((state) => state.user.token);


    const redirectToFAQ = () => {   
        navigate("/faq")
    };

    const redirectToHome = () => {
        navigate("/")
    };

    const logout = () => {
        navigate("/login")
    }

    const dispatch = useDispatch();
    const data = useSelector((state) => state.app.data);
   
    console.log(data)
    

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {



        const response = await axios({
            method: "GET",
            url: "https://sandbox.practical.me/api/user/profile",
            headers: { Authorization: `Bearer ${token}` }
        });
        // setData(response.data.data);
        dispatch(setData(response.data.data));

    };
    
    if(!data)return;

    return (

        <Box>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        USER PAGE
                    </Typography>
                    <Button onClick={redirectToHome} color="inherit">Home</Button>
                    <Button onClick={redirectToFAQ} color="inherit">FAQ</Button>
                    <Button onClick={logout} color="inherit">Logout</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box>
                <Box sx={{ textAlign: 'center', fontFamily: 'cursive', marginTop: '20px' }}>
                    <Typography variant="h4" sx={{ margin: '10px', lineHeight: '2' }}>{data.first_name} {data.sur_name}</Typography>
                    <Typography variant="h6" sx={{ margin: '10px', lineHeight: '2' }}>{data.email}</Typography>
                </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignContent: "center", width: "100vw", height: "100vh", margin:"100px"}}>
            
            <Grid container>

            
                    {data.wallet?.map((r) => (
                        <Grid item xs={12}>
                            <Wallet data={r}/>
                        </Grid>
                    ))}
            </Grid>
                </Box>
        </Box>
    )

}

export default UserPage;