import axios from "axios";
import { useEffect, useState } from "react";
import { NotificationManager } from "react-notifications";
import { useDispatch, useSelector } from "react-redux";
import { setData, setFaq } from "../redux/app.reducer";
import Wallet from "./wallet";
import { AppBar, Box, Button, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";


const FaqPage = () => {
    const navigate = useNavigate();

    const token = useSelector((state) => state.user.token);
    const dispatch = useDispatch();
    // const FAQ = useSelector((state) => state.app.faq);
    const [faq, setFaq] = useState(null)
    

    const redirectToFAQ = () => {   
        navigate("/faq")
    };

    const redirectToHome = () => {
        navigate("/")
    };

    const logout = () => {
       navigate("/login")
    }

    
    useEffect(() => {
        getFaq();
    }, []);

    const getFaq = async () => {



        const response = await axios({
            method: "GET",
            url: "https://sandbox.practical.me/api/faq",
            //headers: { Authorization: `Bearer ${token}` }
        });
        setFaq(response.data.data);
        
       
        //dispatch(setFaq(response.data));
        console.log({faq})

    };
    if(!faq) return;

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

            <Box sx={{ textAlign: 'center', fontFamily: 'cursive', marginTop: '20px' }}>
                <Typography variant="h4" sx={{ margin: '10px', lineHeight: '2' }}>FREQUENTLY ASKED QUESTIONS</Typography>

            </Box>


            <Box sx={{ display: "flex", justifyContent: "center", alignContent: "center", width: "100vw", height: "100vh", margin:"100px"}}>
            
            <Grid container>
                
                {faq.map((r) => (
                    <Grid item xs={12}>
                        <Box sx={{border: "1px solid lightgrey", padding:"3px", margin:"15px" }}>
                            <Grid container>
                                <Grid item xs={12}>

                                    <Typography>
                                        Question#{r.id}: {r.question}
                                    </Typography>
                                    <br/>
                                    <Typography>
                                        Answer: {r.answer}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                ))}
            </Grid>
                </Box>
        </Box>
  
    )

}

export default FaqPage;