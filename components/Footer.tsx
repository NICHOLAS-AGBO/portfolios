"use client";

import { faFacebook, faInstagram, faLinkedin, faPinterest, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";
import {Box, Button, Container, Grid, Stack, Tooltip, Typography, useColorScheme} from "@mui/joy";
import colors from "@mui/joy/colors";

const Footer = ()=>{
const {mode} = useColorScheme();
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
        <Container as="footer" maxWidth={"lg"}
        sx={{mt: "$20",pt: "$8",
        borderTop: mode==="dark"?"solid 3px rgba(255,255,255,.15)":"solid 3px $secondaryLight",
        background: "$black", color: "$white"}}>
<Grid container gap={2}>

<Grid sx={{cursor: "default"}}>
    <Typography level={"h5"} sx={{
        color: "secondary"
    }}>Portfolio UI</Typography>
    <Stack flexDirection={"column"} component="ul">
<Box sx={{"&>a:hover":{textDecoration: "underline", color: "$primary !important"}, fontSize: "$sm", color: "$gray800"}}><Link style={{color: "inherit"}} href={"/"}>Home</Link></Box>
<Box sx={{"&>a:hover":{textDecoration: "underline", color: "$primary !important"}, fontSize: "$sm", color: "$gray800"}}><Link style={{color: "inherit"}} href={"/about"}>About us</Link></Box>
<Box sx={{"&>a:hover":{textDecoration: "underline", color: "$primary !important"}, fontSize: "$sm", color: "$gray800"}}><Link style={{color: "inherit"}} href={"/contact"}>Contact us</Link></Box>
<Box sx={{"&>a:hover":{textDecoration: "underline", color: "$primary !important"}, fontSize: "$sm", color: "$gray800"}}><Link style={{color: "inherit"}} href={"/contact"}>Privacy policy</Link></Box>
<Box sx={{"&>a:hover":{textDecoration: "underline", color: "$primary !important"}, fontSize: "$sm", color: "$gray800"}}><Link style={{color: "inherit"}} href={"/contact"}>Terms & Conditions</Link></Box>
    </Stack>
</Grid>

<Grid sx={{cursor: "default"}}>
    <Typography level={"h5"} sx={{
        color: colors.grey[500]
    }}>Explore</Typography>
    <Stack flexDirection={"column"} component="ul">
<Box sx={{"&>a:hover":{textDecoration: "underline", color: "$primary !important"}, fontSize: "$sm", color: "$gray800"}}><Link style={{color: "inherit"}} href={"/templates"}>Templates</Link></Box>
<Box sx={{"&>a:hover":{textDecoration: "underline", color: "$primary !important"}, fontSize: "$sm", color: "$gray800"}}><Link style={{color: "inherit"}} href={"/ui"}>UI design</Link></Box>
<Box sx={{"&>a:hover":{textDecoration: "underline", color: "$primary !important"}, fontSize: "$sm", color: "$gray800"}}><Link style={{color: "inherit"}} href={"/components"}>Components</Link></Box>
    </Stack>
</Grid>


<Grid sx={{cursor: "default"}}>
    <Typography level={"h5"} sx={{
        color: colors.grey[500]
    }}>More</Typography>
    <Stack flexDirection={"column"} component="ul">
<Box sx={{"&>a:hover":{textDecoration: "underline", color: "$primary !important"}, fontSize: "$sm", color: "$gray800"}}>
    <Tooltip color={"primary"} placement={"bottom"} title="Nicson Digital Concept">
        <Link style={{color: "inherit"}} href={"https://ndcconcept.com"} target="_blank" referrerPolicy="no-referrer">NDCconcept</Link></Tooltip></Box>
<Box sx={{"&>a:hover":{textDecoration: "underline", color: "$primary !important"}, fontSize: "$sm", color: "$gray800"}}><Link style={{color: "inherit"}} href={"https://aquila.com"} target="_blank" referrerPolicy="no-referrer">Aquila</Link>
</Box>
<Box sx={{"&>a:hover":{textDecoration: "underline", color: "$primary !important"}, fontSize: "$sm", color: "$gray800"}}>
<Tooltip color={"primary"} placement={"bottom"} title="Dika Dika">
    <Link style={{color: "inherit"}} href={"https://dsqr.com"} target="_blank" referrerPolicy="no-referrer">Dsqr</Link></Tooltip>
</Box>
    </Stack>
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
            }}><FontAwesomeIcon icon={faAnglesUp} size="xl"/></Button>
            
            }
        </Container>
        
<Stack justify="space-between" align="center" wrap="wrap" gap={3}
sx={{background: "linear-gradient(90deg, #000 -10%, #222222, #000 110%)", py: "$5", px: "$3", mx: 0}}>
<Typography level={"body2"}>&copy; Portfolio UI {new Date().getFullYear()}</Typography>

<Stack gap={1} sx={{width: "auto", px: "$5", "&>div a": {color: "$secondaryLight"}}}>
    <Box sx={{backgroundColor: "rgba(222,222,222,.25)", borderRadius: "$squared", p: "$1 $3", mx: "$2"}}>
    <Link href={"#"} target="_blank">
        <FontAwesomeIcon icon={faTwitter} size="sm"/>
    </Link>
    </Box>
    <Box sx={{backgroundColor: "rgba(222,222,222,.25)", borderRadius: "$squared", p: "$1 $3", mx: "$2"}}>
    <Link href={"#"} target="_blank">
        <FontAwesomeIcon icon={faLinkedin} size="sm"/>
    </Link>
    </Box>
    <Box sx={{backgroundColor: "rgba(222,222,222,.25)", borderRadius: "$squared", p: "$1 $3", mx: "$2"}}>
    <Link href={"#"} target="_blank">
        <FontAwesomeIcon icon={faInstagram} size="sm"/>
    </Link>
    </Box>
    <Box sx={{backgroundColor: "rgba(222,222,222,.25)", borderRadius: "$squared", p: "$1 $3", mx: "$2"}}>
    <Link href={"#"} target="_blank">
        <FontAwesomeIcon icon={faFacebook} size="sm"/>
    </Link>
    </Box>
    <Box sx={{backgroundColor: "rgba(222,222,222,.25)", borderRadius: "$squared", p: "$1 $3"}}>
    <Link href={"#"} target="_blank">
        <FontAwesomeIcon icon={faPinterest} size="sm"/>
    </Link>
    </Box>
</Stack>
</Stack>

</>
    );
}

export default Footer;