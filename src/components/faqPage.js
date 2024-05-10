import axios from "axios";
import { useEffect } from "react";
import { NotificationManager } from "react-notifications";
import { useDispatch, useSelector } from "react-redux";
import { setData, setFaq } from "../redux/app.reducer";
import Wallet from "./wallet";
import { Box, Grid, Typography } from "@mui/material";


const FaqPage = () => {

    const token = useSelector((state) => state.user.token);
    const dispatch = useDispatch();
    const FAQ = useSelector((state) => state.app.faq);

    
    useEffect(() => {
        getFaq();
    }, []);

    const getFaq = async () => {

        const response = await axios({
            method: "GET",
            url: "https://sandbox.practical.me/api/faq",
            headers: { Authorization: `Bearer ${token}` }
        });

        dispatch(setFaq(response.data));

    };

    return (

        <Box>

            <Box sx={{ textAlign: 'center', fontFamily: 'cursive', marginTop: '20px' }}>
                <Typography variant="h4" sx={{ margin: '10px', lineHeight: '2' }}>FREQUENTLY ASKED QUESTIONS</Typography>

            </Box>


            <Box sx={{ display: "flex", justifyContent: "center", alignContent: "center", width: "100vw", height: "100vh", margin:"100px"}}>
            
            <Grid container>
                
                {FAQ.map((r) => (
                    <Grid item xs={12}>
                        <Box sx={{border: "1px solid lightgrey", padding:"3px", margin:"3px" }}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Typography>
                                        Question: {r.question}
                                    </Typography>
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