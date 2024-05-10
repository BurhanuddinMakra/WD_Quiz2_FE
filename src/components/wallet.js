import { Box, Grid, Typography } from "@mui/material";


const wallet = ({data}) => {
    return (
        <Box sx={{border: "1px solid lightgrey", padding:"3px", margin:"3px" }}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography>
                        wallet_id: {data.wallet_id}
                    </Typography>
                    <Typography>
                        wallet_id: {data.amount}
                    </Typography>
                    <Typography>
                        wallet_id: {data.description}
                    </Typography>
                </Grid>

            </Grid>
        </Box>
    )
}

export default wallet;