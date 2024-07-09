import { Box, Card, CardContent, CardMedia, Grid, Paper, Stack, Typography } from "@mui/material"
import { Data } from "./Data"
import { useState } from "react"

export const BookTickets = () => {
    const [findMovie, setFindMovie] = useState(Data)
    const handlefind = (imageid) => {
        const clickedMovie =  Data.find(elem => elem.imageid === imageid)
        setFindMovie(clickedMovie)
    }
    const displayFind = () => findMovie.map(elem => {
        return (
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs="auto">
                    <Card height="auto" 
                        sx={{
                            "&:hover": {
                                transform: "scale(1.1)",
                            },
                            transition: "transform 0.3s ease-in-out",
                        }}
                    >
                        <CardMedia
                            height="400"
                            image={elem.image}
                            component="img"
                        />

                        <CardContent>
                            <Typography sx={{ fontFamily: "SemiBold", fontSize: "50" }}>{elem.title}</Typography>
                            <Typography sx={{ fontFamily: "Light", fontSize: "50" }}>{elem.description}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        )
    })
    return (
        <Box sx={{ height: "100vh", p: 1 }}>
            <Paper sx={{ p: 5, maxWidth: 600, margin: 'auto', marginTop: 20 }} elevation={15} >
                <Stack>
                    {displayFind()}
                </Stack>
            </Paper>
        </Box>
    )
}
