import { Box, Typography } from "@mui/material";
import Login from "./login";



const AuthPage = () => {
    
    return (
        <Box>
            <Typography variant="h3" sx={{textAlign:"center", marginTop:"50px"}}>Auth Page</Typography>
            <Box sx={ {
                display: "flex" , 
                height: "100vh" , 
                width: "100vw",
                justifyContent: "center",
                alignItems: "center",
                }} >
                <Box sx={{ margin:"5px", padding:"10px"}}>
                    <Login/>
                </Box>
                
            </Box>
        </Box>
            )
}

export default AuthPage;