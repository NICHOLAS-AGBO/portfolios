"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
    Box,
    Button,
    Container,
    Grid,
    IconButton,
    List, ListItem,
    Stack,
    styled,
    Tooltip,
    Typography,
    useColorScheme
} from "@mui/joy";
import colors from "@mui/joy/colors";
import {Facebook, Instagram, KeyboardDoubleArrowUp, LinkedIn, Pinterest, Twitter} from "@mui/icons-material";


const FooterLink = styled(Link)(({theme})=>({
    color: "inherit",
    fontFamily: theme.fontFamily.body,
    textDecoration: "none",
    ...theme.typography.body2,
    fontWeight: 400,
    "&:hover":{
        textDecoration: "underline",
    }
}))


const Footer = ()=>{
const {mode,systemMode} = useColorScheme();
const [show,setShow] = useState(false);

const moveUP = ()=> scrollTo({top: 0, behavior: "smooth"});

useEffect(()=>{
    addEventListener("scroll",()=>{
        if (scrollY>800) setShow(true); 
        else setShow(false)
    })
});

  return(
<>
        <Container component="footer" maxWidth={false}
        sx={{mt: 20, py: 8,
        borderTop: mode||systemMode==="dark"?"solid 3px rgba(255,255,255,.15)":"solid 3px var(--mui-joy-palette.primary-main)",
        background: "#000", color: "common.white"}}>
<Grid container gap={3}>

<Grid sx={{cursor: "default"}}>
    <Typography
        id="company"
        level="body1"
        fontWeight="lg"
        pl={1}
        sx={{color: "secondary.main"}}
    >
        Portfolio UI
    </Typography>
    <List aria-labelledby="company" size={"sm"}>
        <ListItem><FooterLink href={"/"}>Home</FooterLink></ListItem>
        <ListItem><FooterLink href={"/about"}>About us</FooterLink></ListItem>
        <ListItem><FooterLink href={"/contact"}>Contact us</FooterLink></ListItem>
        <ListItem><FooterLink href={"/contact"}>Privacy policy</FooterLink></ListItem>
        <ListItem><FooterLink href={"/contact"}>Terms & Conditions</FooterLink></ListItem>
    </List>
</Grid>

    <Grid sx={{cursor: "default"}}>
    <Typography
        id="explore"
        level="body1"
        fontWeight="lg"
        pl={1}
        sx={{color: colors.grey[500]}}
    >
        Explore
    </Typography>
    <List aria-labelledby="explore" size={"sm"}>
        <ListItem><FooterLink href={"/templates"}>Templates</FooterLink></ListItem>
        <ListItem><FooterLink href={"/ui"}>UI design</FooterLink></ListItem>
        <ListItem><FooterLink href={"/components"}>Components</FooterLink></ListItem>
        <ListItem><FooterLink href={"/contact"}>Privacy policy</FooterLink></ListItem>
        <ListItem><FooterLink href={"/contact"}>Terms & Conditions</FooterLink></ListItem>
    </List>
</Grid>

    <Grid sx={{cursor: "default"}}>
    <Typography
        id="more"
        level="body1"
        fontWeight="lg"
        pl={1}
        sx={{color: colors.grey[500]}}
    >
        More
    </Typography>
    <List aria-labelledby="more" size={"sm"}>
        <ListItem><Tooltip color={"primary"} placement={"bottom"} title="Nicson Digital Concept">
            <FooterLink href={"https://ndcconcept.com"} target="_blank" referrerPolicy="no-referrer">NDCconcept</FooterLink></Tooltip></ListItem>
        <ListItem><FooterLink href={"https://aquila.com"} target="_blank" referrerPolicy="no-referrer">Aquila</FooterLink></ListItem>
        <ListItem><Tooltip color={"primary"} placement={"bottom"} title="Dika Dika">
            <FooterLink href={"https://dsqr.com"} target="_blank" referrerPolicy="no-referrer">Dsqr</FooterLink></Tooltip></ListItem>
    </List>
</Grid>



</Grid>


            {
                show&&
                    
            <Button onClick={moveUP} color={"primary"} sx={{
                width: 40,
                height: 40,
                p: "$5",
                borderRadius: "$squared",
                border: "solid 2px white",
                shadow: "$xl",
                position: "fixed",
                zIndex: "$10",
                bottom: 60,
                right: 20,
                color: "$text"
            }}><KeyboardDoubleArrowUp/></Button>
            
            }
        </Container>
        
<Stack justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={2} flexDirection={"row"}
sx={{background: "linear-gradient(90deg, #000 -10%, #222222, #000 110%)", p: 2, cursor: "default"}}>
<Typography level={"body2"} sx={{color: colors.grey[500]}}>&copy; Portfolio UI {new Date().getFullYear()}</Typography>

<Stack flexDirection={"row"} gap={1} sx={{width: "auto"}}>
    <IconButton size={"sm"} sx={{backgroundColor: "rgba(222,222,222,.25)","svg":{color: "secondary.main"}, border: "1px solid var(--mui-joy-palette-secondary-main)", pt: .5}}>
    <Link href={"#"} target="_blank">
        <Twitter/>
    </Link>
    </IconButton>
    <IconButton size={"sm"} sx={{backgroundColor: "rgba(222,222,222,.25)","svg":{color: "secondary.main"}, border: "1px solid var(--mui-joy-palette-secondary-main)", pt: .5}}>
    <Link href={"#"} target="_blank">
        <LinkedIn/>
    </Link>
    </IconButton>
    <IconButton size={"sm"} sx={{backgroundColor: "rgba(222,222,222,.25)","svg":{color: "secondary.main"}, border: "1px solid var(--mui-joy-palette-secondary-main)", pt: .5}}>
    <Link href={"#"} target="_blank">
        <Instagram/>
    </Link>
    </IconButton>
    <IconButton size={"sm"} sx={{backgroundColor: "rgba(222,222,222,.25)","svg":{color: "secondary.main"}, border: "1px solid var(--mui-joy-palette-secondary-main)", pt: .5}}>
    <Link href={"#"} target="_blank">
        <Facebook/>
    </Link>
    </IconButton>
    <IconButton size={"sm"} sx={{backgroundColor: "rgba(222,222,222,.25)","svg":{color: "secondary.main"}, border: "1px solid var(--mui-joy-palette-secondary-main)", pt: .5}}>
    <Link href={"#"} target="_blank">
        <Pinterest/>
    </Link>
    </IconButton>
</Stack>
</Stack>

</>
    );
}

export default Footer;