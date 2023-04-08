"use client";

import Image from "next/image";
import vercel from "@/public/vercel.svg";
import {CircularProgress, Container, Grid, Box} from "@mui/joy";


const Load = ()=>{
    return (
        <Container maxWidth={false}
        sx={{
        minHeight: "100vh", 
        position: "fixed", 
        top: 0,
        left: 0,
        zIndex: (theme)=>theme.zIndex.modal+100
        }}>
    <Grid container sx={{minHeight: "inherit"}} gap={1} justifyContent="center" alignItems="center">
    <Grid>
    <CircularProgress size="lg" color="primary" thickness={3}>
        <Box p={2}>
            <Image src={vercel} alt="vercel logo" width={100}/>
        </Box>
    </CircularProgress>
    </Grid>
    </Grid>
        </Container>
    )
}

export default Load;