import { Button } from "@mantine/core"
import { Box, Grid, Paper, Stack, TextField } from "@mui/material"
import { Typography } from "@mui/material"
import theater from "./pictures/theater.jpg"
import Dialog from '@mui/material/Dialog';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Start = () => {
    const [phone, setPhone] = useState(null)
    const [email, setEmail] = useState(null)
    const [open, setOpen] = React.useState(false)
    const navigate = useNavigate();
    //Methods to handle Log in Dialog
    const handleClose = () => {
        setOpen(false);
    };
    const handleSignin = () => {
        setOpen(true);
    }
    //accept credentials and navigate to home page
    const acceptPhone = (value) => {
        setPhone(value)
    }
    const acceptEmail = (value) => {
        setEmail(value)
    }
    const Proceed = () => {
        console.log("Phone: ", phone);
        console.log("Email: ", email);
        console.log("Logged In");
        navigate("/home");
    }

    //An opening Look
    return (
        <Box sx={{ p: 1, backgroundImage: `url(${theater})`, height: "100vh", backgroundSize: "cover", backgroundAttachment: "fixed" }}>
            <Paper sx={{ p: 5, maxWidth: 600, margin: 'auto', marginTop: 20 }} elevation={15} >
                <Stack spacing={3}>
                    <Typography sx={{ fontFamily: "SemiBold", fontSize: 50 }}>Want to explore Movies?</Typography>
                    <Typography sx={{ fontFamily: "Light", fontSize: 30 }}>Book yo tix, grab a bite, get going!</Typography>
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 27 }}>
                        <Grid item fullwidth xs={6}>
                            <Button variant="gradient" gradient={{ from: 'red', to: 'grape', deg: 103 }} radius="xl" onClick={() => handleSignin()}>Sign in</Button>
                        </Grid>
                    </Grid>
                </Stack>
            </Paper>


            {/* dialog box contents */}
            <Dialog
                open={open}
                onClose={handleClose}>

                <Paper sx={{ p: 5, margin: 'auto'}} elevation={15} >
                    <Stack spacing={3}>
                        <TextField id="outlined-basic" label="Phone" variant="outlined" onChange={(event) => acceptPhone(event.target.value)} />
                        <Typography sx={{ textAlign: 'center', fontFamily: 'SemiBold' }}>or</Typography>
                        <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(event) => acceptEmail(event.target.value)} />
                        <Button variant="gradient" gradient={{ from: 'red', to: 'grape', deg: 103 }} radius="xl" onClick={()=>Proceed()}>Proceed</Button>
                    </Stack>
                </Paper>
            </Dialog>
        </Box>
    )
}
