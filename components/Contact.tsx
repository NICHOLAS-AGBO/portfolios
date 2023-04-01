"use client";

import { Button, Container, Grid, Text } from "@nextui-org/react";
import { Title } from "./Services";
import { useTheme } from "@nextui-org/react";

const Contact = ()=>{
    const {isDark} = useTheme();


    return(
<Container id="contact" lg css={{
    p: "$xl", my: "$5",
    backgroundImage: isDark?"linear-gradient(rgba(0,0,0,.75),rgba(0,0,0,.95)) ,url('/img/black_man_on_laptop.png')"
    : "linear-gradient(rgba(255,255,255,.65),rgba(255,255,255.35)) ,url('/img/black_man_on_laptop.png')", 
    backgroundSize: "cover",
    backgroundPositionY: "100%"
}}>
<Grid.Container direction="column" gap={1} alignItems="center" justify="center" css={{
    height: "300px",
    border: "2px $white solid",
    // maxWidth: "96%",
    mx: "auto"
    }}>

<Grid>
<Text h2 size={"$5xl"} className={Title.className} css={{
    textAlign: "center",
    color: "$text",
    cursor: "default",
    "@smMax":{
        fontSize: "$3xl",
        px: "$1"
    }
    }}>Take your time to reach us</Text>


</Grid>

<Grid>
    <Button ghost rounded auto size={"xl"} css={{
        color: "$text",
        borderColor: "$text",
        "&:hover":{
            color: isDark?"$black":"$white",
            backgroundColor: isDark?"$white":"$black",
            shadow: "$lg",
        }
    }}>Contact us</Button>
</Grid>



</Grid.Container>



</Container>

    );
}


export default Contact;