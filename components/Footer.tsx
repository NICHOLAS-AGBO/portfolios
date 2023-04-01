"use client";

import { faFacebook, faInstagram, faLinkedin, faPinterest, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Container, Grid, Row, Text, Tooltip, useTheme } from "@nextui-org/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Footer = ()=>{
const {isDark,theme} = useTheme();
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
        <Container as="footer" lg 
        css={{mt: "$20",pt: "$8", 
        borderTop: isDark?"solid 3px rgba(255,255,255,.15)":"solid 3px $secondaryLight", 
        background: "$black", color: "$white"}}>
<Grid.Container gap={3} wrap="wrap" css={{maxW: `${theme?.breakpoints.md}`}}>

<Grid css={{cursor: "default"}}>
    <Text h5 css={{
        color: "$secondaryLight"
    }}>Portfolio UI</Text>
    <Row css={{flexDirection: "column"}} as="ul">
<Col as="li" css={{"&>a:hover":{textDecoration: "underline", color: "$primary !important"}, fontSize: "$sm", color: "$gray800"}}><Link style={{color: "inherit"}} href={"/"}>Home</Link></Col>
<Col as="li" css={{"&>a:hover":{textDecoration: "underline", color: "$primary !important"}, fontSize: "$sm", color: "$gray800"}}><Link style={{color: "inherit"}} href={"/about"}>About us</Link></Col>
<Col as="li" css={{"&>a:hover":{textDecoration: "underline", color: "$primary !important"}, fontSize: "$sm", color: "$gray800"}}><Link style={{color: "inherit"}} href={"/contact"}>Contact us</Link></Col>
<Col as="li" css={{"&>a:hover":{textDecoration: "underline", color: "$primary !important"}, fontSize: "$sm", color: "$gray800"}}><Link style={{color: "inherit"}} href={"/contact"}>Privacy policy</Link></Col>
<Col as="li" css={{"&>a:hover":{textDecoration: "underline", color: "$primary !important"}, fontSize: "$sm", color: "$gray800"}}><Link style={{color: "inherit"}} href={"/contact"}>Terms & Conditions</Link></Col>
    </Row>
</Grid>

<Grid css={{cursor: "default"}}>
    <Text h5 css={{
        color: "$gray500"
    }}>Explore</Text>
    <Row css={{flexDirection: "column"}} as="ul">
<Col as="li" css={{"&>a:hover":{textDecoration: "underline", color: "$primary !important"}, fontSize: "$sm", color: "$gray800"}}><Link style={{color: "inherit"}} href={"/templates"}>Templates</Link></Col>
<Col as="li" css={{"&>a:hover":{textDecoration: "underline", color: "$primary !important"}, fontSize: "$sm", color: "$gray800"}}><Link style={{color: "inherit"}} href={"/ui"}>UI design</Link></Col>
<Col as="li" css={{"&>a:hover":{textDecoration: "underline", color: "$primary !important"}, fontSize: "$sm", color: "$gray800"}}><Link style={{color: "inherit"}} href={"/components"}>Components</Link></Col>
    </Row>
</Grid>


<Grid css={{cursor: "default"}}>
    <Text h5 css={{
        color: "$gray500"
    }}>More</Text>
    <Row css={{flexDirection: "column"}} as="ul">
<Col as="li" css={{"&>a:hover":{textDecoration: "underline", color: "$primary !important"}, fontSize: "$sm", color: "$gray800"}}>
    <Tooltip animated={false} color={"secondary"} shadow placement="bottom" content="Nicson Digital Concept"><Link style={{color: "inherit"}} href={"https://ndcconcept.com"} target="_blank" referrerPolicy="no-referrer">NDCconcept</Link></Tooltip></Col>
<Col as="li" css={{"&>a:hover":{textDecoration: "underline", color: "$primary !important"}, fontSize: "$sm", color: "$gray800"}}><Link style={{color: "inherit"}} href={"https://aquila.com"} target="_blank" referrerPolicy="no-referrer">Aquila</Link>
</Col>
<Col as="li" css={{"&>a:hover":{textDecoration: "underline", color: "$primary !important"}, fontSize: "$sm", color: "$gray800"}}>
<Tooltip animated={false} color={"secondary"} shadow placement="bottom" content="Dika Dika"><Link style={{color: "inherit"}} href={"https://dsqr.com"} target="_blank" referrerPolicy="no-referrer">Dsqr</Link></Tooltip>
</Col>
    </Row>
</Grid>

</Grid.Container>


            {
                show&&
                    
            <Button onPress={moveUP} auto color={"secondary"} css={{
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
        
<Row justify="space-between" align="center" wrap="wrap" gap={3}
css={{background: "linear-gradient(90deg, #000 -10%, #222222, #000 110%)", py: "$5", px: "$3", mx: 0}}>
<Text size={"$sm"}>&copy; Portfolio UI {new Date().getFullYear()}</Text>

<Row gap={1} css={{width: "auto", px: "$5", "&>div a": {color: "$secondaryLight"}}}>
    <Col css={{backgroundColor: "rgba(222,222,222,.25)", borderRadius: "$squared", p: "$1 $3", mx: "$2"}}>
    <Link href={"#"} target="_blank">
        <FontAwesomeIcon icon={faTwitter} size="sm"/>
    </Link>
    </Col>
    <Col css={{backgroundColor: "rgba(222,222,222,.25)", borderRadius: "$squared", p: "$1 $3", mx: "$2"}}>
    <Link href={"#"} target="_blank">
        <FontAwesomeIcon icon={faLinkedin} size="sm"/>
    </Link>
    </Col>
    <Col css={{backgroundColor: "rgba(222,222,222,.25)", borderRadius: "$squared", p: "$1 $3", mx: "$2"}}>
    <Link href={"#"} target="_blank">
        <FontAwesomeIcon icon={faInstagram} size="sm"/>
    </Link>
    </Col>
    <Col css={{backgroundColor: "rgba(222,222,222,.25)", borderRadius: "$squared", p: "$1 $3", mx: "$2"}}>
    <Link href={"#"} target="_blank">
        <FontAwesomeIcon icon={faFacebook} size="sm"/>
    </Link>
    </Col>
    <Col css={{backgroundColor: "rgba(222,222,222,.25)", borderRadius: "$squared", p: "$1 $3"}}>
    <Link href={"#"} target="_blank">
        <FontAwesomeIcon icon={faPinterest} size="sm"/>
    </Link>
    </Col>
</Row>
</Row>

</>
    );
}

export default Footer;