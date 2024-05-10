import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, TextFieldClassKey, Typography } from "@mui/material";
import { useFormik } from "formik";
import axios from "axios";
import { NotificationManager } from "react-notifications";
import { useDispatch } from "react-redux";
import { login } from "../redux/user.reducer";



const Login = () => {

    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
          email: 'jivynosyfu@mailinator.com',
          password: 'Pa$$w0rd!',
          social_auth_type: 'normal'
        },
        onSubmit:async (values) => {
            const formData = new FormData();
            formData.append("email", values.email);
            formData.append("password", values.password);
            formData.append("social_auth_type", "normal");
            const reponse = await axios.post("https://sandbox.practical.me/api/login", formData )
            if (reponse.status === 200) {
                NotificationManager.success(reponse.data.msg);
                dispatch(login(reponse.data.data.auth_token));
            }else{
                NotificationManager.error(reponse.data.msg);
            }
        },
        });


    return (
        <Box sx={ {border:"dashed lightgrey", padding: "25px" }}>
            <Typography variant="h4" sx={{margin:"10px" }}>Login</Typography>
            <form onSubmit={formik.handleSubmit} style={{display: "flex", flexDirection: "column"}}>
            <TextField sx={{margin:"20px"}} onChange={formik.handleChange} value={formik.values.email} name = "email" label="Email" variant="outlined" />
            <TextField sx={{margin:"20px"}} onChange={formik.handleChange} value={formik.values.password} name = "password" type="password" label="Password" variant="outlined" />
            <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Social Auth type</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >
                <FormControlLabel value="google" control={<Radio />} label="google" />
                <FormControlLabel value="normal" control={<Radio />} label="normal" />
                <FormControlLabel value="facebook" control={<Radio />} label="facebook" />
                
            </RadioGroup>
            </FormControl>
            <Button sx={{margin:"20px"}} type="submit" variant="contained">Login</Button>
            </form>
        </Box>
    )
}

export default Login;