"use client";

import { Container, Grid, Loading, useTheme } from "@nextui-org/react";
import Image from "next/image";
import vercel from "@/public/vercel.svg";


const Load = ()=>{
    const {theme, isDark} = useTheme();
    return (
        <Container fluid 
        css={{
        minHeight: "100vh", 
        background: "$background", 
        position: "fixed", 
        top: "$0",
        left: "$0",
        zIndex: "$max"
        }}>
    <Grid.Container css={{minHeight: "inherit"}} gap={1} justify="center" alignItems="center">
    <Grid>
        <Image src={vercel} alt="vercel logo" width={150}/>
    </Grid>
    <Grid>
    <Loading size="lg" color={"secondary"} />
    </Grid>
    </Grid.Container>
        </Container>
    )
}

export default Load;