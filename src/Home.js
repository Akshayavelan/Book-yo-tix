import { Box, Button, Card, CardContent, CardMedia, Grid, Input, InputAdornment, Menu, MenuItem, Stack, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import { Data } from "./Data"
import { Ads } from "./Ads";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from "react";
import { Divider, Drawer } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";

export const Home = () => {
    const [search, setSearch] = useState("")
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open1 = Boolean(anchorEl)
    const [opened, { open, close }] = useDisclosure(false)
    const [filteredMovies, setFilteredMovies] = useState(Data)
    const [isSubmitted, setisSubmitted] = useState(false)
    const navigate = useNavigate()

    // did not Work, affecting the grid structure when invoked
    // const handleDrawer = () => {
    //     return (
    //         <Box sx={{ width: "30%", height: "50vh" }}>
    //             <Paper elevation={3}>
    //                 <Drawer opened={opened} onClose={close} title="Hey!">
    //                     <Stack spacing={2}>
    //                         <Typography>FAQ's</Typography>
    //                         <Typography>Contact Support</Typography>
    //                         <Divider />
    //                     </Stack>
    //                 </Drawer>
    //             </Paper>
    //         </Box>
    //     )
    // }
    //book tickets
    //error in navigation
    // const click = (imageid) => {
    //     navigate(`/movie/${imageid}`)
    // }
    const click = (imageid) => {
        navigate(`/movie`, { state: { imageid } }) //passing image id to movie
    }

    //What happens when the user search something??
    const handleSearch = (value) => {
        setSearch(value)
        if (!value) {
            setFilteredMovies(Data)
        }
        else {
            const result = Data.filter(elem => elem.title.toLowerCase().includes(value.toLowerCase()))
            setFilteredMovies(result)
        }
    }

    const AcountClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const AccountClose = () => {
        setAnchorEl(null);
    };


    //To make the swipe ressponsive on all screens for movies
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2,
            swipeable: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
        }
    };
    //To make the swipe ressponsive on all screens for ads
    const responsive1 = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 2,
            swipeable: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
        }
    };

    const searchResults = () => filteredMovies.map(elem => {
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
                            onClick={() => click(elem.imageid)}
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

    const Movies = () => Data.map(elem => {
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
                            onClick={() => click(elem.imageid)}
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

    const Adverstisement = () => Ads.map(e => {
        return (
            <Card height="auto"
                sx={{
                    transition: "transform 0.3s ease-in-out",
                    p: 1,
                    borderRadius: "20px"
                }}
            >
                <CardMedia
                    height="auto"
                    width="auto"
                    image={e.image}
                    component="img"
                />
            </Card>
        )
    })
    //Home, all Movies
    const displayHome = () => {
        return (
            <Box sx={{ maxWidth: "90%", height: "100vh", margin: "auto", p: 1 }}>
                <Grid container spacing={5} justifyContent="space-evenly" alignItems="center" direction="row">
                    <Grid item xs="auto">
                        <MenuIcon sx={{ fontSize: "60px", p: 2, textAlign: "center", cursor: "pointer" }} onClick={open} />
                    </Grid>

                    <Grid item xs="auto">
                        <Typography sx={{ fontFamily: "Italic", fontSize: "25px", cursor: "pointer" }} onClick={() => displayHome()}>Book yo tix</Typography>
                    </Grid>
                    <Grid item xs="8">
                        <Input
                            placeholder="Search for your favourite Movies and Events"
                            value={search}
                            onChangeCapture={(event) => { handleSearch(event.target.value) }}
                            sx={{ ml: 1, flex: 1, width: '100%', cursor: "pointer" }}
                            startAdornment={
                                <InputAdornment position="start">
                                    <Button onClick={() => setisSubmitted(true)}>
                                        <SearchIcon />
                                    </Button>
                                </InputAdornment>
                            }
                        />
                    </Grid>
                    <Grid item xs="auto">
                        <LogoutIcon sx={{ fontSize: "60px", p: 2 }} onClick={AcountClick} />
                    </Grid>
                </Grid>
                <Typography sx={{ fontFamily: "Bold", fontSize: 20, margin: "auto", p: 2 }}>
                    Recommended Movies
                </Typography>
                <Carousel
                    swipeable={true}
                    draggable={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={false}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    customTransition="transform 300ms ease-in-out"
                    transitionDuration={300}
                    minimumTouchDrag={10}
                >
                    {Movies()}
                </Carousel>
                <Typography sx={{ fontFamily: "Bold", fontSize: 20, margin: "auto", p: 2 }}>
                    Events near you
                </Typography>
                <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    responsive={responsive1}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlaySpeed={300}
                    keyBoardControl={true}
                    customTransition="transform 300ms ease-in-out"
                    transitionDuration={300}
                    minimumTouchDrag={10}
                >
                    {Adverstisement()}
                </Carousel>
            </Box>
        )
    }
    //Display Search Results
    const displaySearchResults = () => {
        return (
            <Box sx={{ maxWidth: "90%", height: "100vh", margin: "auto", p: 1 }}>
                <Grid container spacing={2} justifyContent="space-evenly" alignItems="center" direction="row">
                    <Grid item xs="auto">
                        <MenuIcon sx={{ fontSize: "60px", p: 2, textAlign: "center", cursor: "pointer" }} onClick={open} />
                    </Grid>
                    <Grid item xs="auto">
                        <Typography sx={{ fontFamily: "Italic", fontSize: "25px", cursor: "pointer" }}>Book yo tix</Typography>
                    </Grid>
                    <Grid item xs="8">
                    <Input
                            placeholder="Search for your favourite Movies and Events"
                            value={search}
                            onChangeCapture={(event) => { handleSearch(event.target.value) }}
                            sx={{ ml: 1, flex: 1, width: '100%', cursor: "pointer" }}
                            startAdornment={
                                <InputAdornment position="start">
                                    <Button onClick={() => setisSubmitted(true)}>
                                        <SearchIcon />
                                    </Button>
                                </InputAdornment>
                            }
                        />
                    </Grid>    
                    <Grid item xs="auto">
                        <LogoutIcon sx={{ fontSize: "60px", p: 2 }} onClick={AcountClick} />
                    </Grid>
                </Grid>
                <Carousel
                    swipeable={true}
                    draggable={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={false}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    customTransition="transform 300ms ease-in-out"
                    transitionDuration={300}
                    minimumTouchDrag={10}
                >
                    {searchResults()}
                </Carousel>


                <Typography sx={{ fontFamily: "Bold", fontSize: 20, margin: "auto", p: 2 }}>
                    Events near you
                </Typography>
                <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    responsive={responsive1}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlaySpeed={300}
                    keyBoardControl={true}
                    customTransition="transform 300ms ease-in-out"
                    transitionDuration={300}
                    minimumTouchDrag={10}
                >
                    {Adverstisement()}
                </Carousel>
            </Box>
        )
    }
    return (
        <React.Fragment>
            <Drawer opened={opened} onClose={close} title="Hey!">
                <Stack spacing={2}>
                    <Divider />
                    <Typography>Profile</Typography>
                    <Typography>FAQ's</Typography>
                    <Typography>Contact Support</Typography>
                </Stack>
            </Drawer>
            <Menu
                anchorEl={anchorEl}
                open={open1}
                onClose={AccountClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem onClick={()=>navigate("/")}>Logout</MenuItem>
            </Menu>
            {!isSubmitted ? displayHome() : displaySearchResults()}
        </React.Fragment >
    )

}


