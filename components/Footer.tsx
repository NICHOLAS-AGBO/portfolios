"use client";

import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container, Tooltip, useTheme } from "@nextui-org/react";
import { useEffect, useState } from "react";

const Footer = ()=>{
const {isDark} = useTheme();
const [show,setShow] = useState(false);

const moveUP = ()=> scrollTo({top: 0, behavior: "smooth"});

useEffect(()=>{
    addEventListener("scroll",()=>{
        if (scrollY>800) setShow(true); 
        else setShow(false)
    })
});

  return(

        <Container as="footer" lg 
        css={{minHeight: 500, mt: "$10", 
        borderTop: isDark?"solid 3px rgba(255,255,255,.15)":"solid 1px lightgray", 
        background: "$black", color: "$white"}}>
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
                bottom: 50,
                right: 20,
                // backgroundColor: "$secondaryLight",
                color: "$text"
            }}><FontAwesomeIcon icon={faAnglesUp} size="xl"/></Button>
            
            }
        </Container>

    );
}

export default Footer;