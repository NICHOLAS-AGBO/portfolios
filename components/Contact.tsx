"use client";

import { Title } from "./Services";
import { useTheme } from "@nextui-org/react";
import { Button, Container, Grid, Typography, useColorScheme } from "@mui/joy";

const Contact = ()=>{
    const {mode} = useColorScheme();


    return(
<Container id="contact" maxWidth={"md"} sx={{
    backgroundImage: mode==="dark"?"linear-gradient(rgba(0,0,0,.75),rgba(0,0,0,.95)) ,url('/img/black_man_on_laptop.png')"
    : "linear-gradient(rgba(255,255,255,.65),rgba(255,255,255.35)) ,url('/img/black_man_on_laptop.png')", 
    backgroundSize: "cover",
    backgroundPositionY: "100%"
}}>
<Grid container direction="column" gap={1} alignItems="center" justifyContent="center" sx={{
    height: "300px",
    border: "2px common.white solid",
    mx: "auto"
    }}>

<Grid>
<Typography level="h2" className={Title.className} sx={{
    textAlign: "center",
    cursor: "default",
    }}>Take your time to reach us</Typography>


</Grid>

<Grid>
    <Button size={"lg"} sx={{
        color: "$text",
        borderColor: "$text",
        "&:hover":{
            color: mode==="dark"?"common.black":"common.white",
            backgroundColor: mode==="dark"?"common.white":"common.black",
            boxShadow: 2
        }
    }}>Contact us</Button>
</Grid>



</Grid>



</Container>

    );
}


export default Contact;