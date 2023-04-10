"use client";

import React, {useEffect} from "react";
import {Button, Container, Stack, Typography, useColorScheme} from "@mui/joy";
import {TextPlugin} from "gsap/TextPlugin";
import { SlowMo } from "gsap/EasePack";
import gsap from "gsap";
import {ArrowForward, GitHub} from "@mui/icons-material";


gsap.registerPlugin(TextPlugin, SlowMo);


const Home:React.FC = ()=>{
    const textP = React.useRef<any>(null);
    const {mode, systemMode} = useColorScheme();
    const tl = gsap.timeline({
        defaults:{
            duration: 2,
        }});

    const randColor = gsap!.utils.random(["var(--mui-joy-palette-secondary-main)", "var(--mui-joy-palette-primary-main)", "var(--mui-joy-palette-purple-500)"]);
    const randText = gsap!.utils.random(["portfolios", "designs"]);

    useEffect(() => {

        const anime = gsap.context(()=>{
            tl.addLabel("start",1)
                .fromTo(textP!.current,{
                    duration: 5,
                    text: {
                        value: randText,
                        preserveSpaces: true
                    },
                    ease: "power1.inOut"
                },{
                    repeat: -1,
                    backgroundImage: "linear-gradient(35deg, var(--mui-joy-palette-secondary-main) 50%, var(--mui-joy-palette-primary-main)",
                    keyframes: [
                        {text: {value: "designs", preserveSpaces: true},
                            ease: "power3.in",
                            backgroundImage: "linear-gradient(35deg, var(--mui-joy-palette-secondary-main) 50%, var(--mui-joy-palette-primary-light)", duration: 5},
                        {text: {value: "portfolios", preserveSpaces: true}, delay: 2,
                            ease: "slow(0.5, 0.8, true)",
                            backgroundImage: "linear-gradient(35deg, var(--mui-joy-palette-secondary-main) 50%, var(--mui-joy-palette-secondary-dark) 70%", duration: 5},
                    ]
                })
                .addLabel("line",2)
                .set(textP!.current,{
                    textDecoration: `${randColor} wavy underline`,
                    keyframes: [
                        {textDecoration: `var(--mui-joy-palette-secondary-main) wavy underline`, duration: .5},
                        {textDecoration: `var(--mui-joy-palette-primary-main) wavy underline`, duration: .5, delay: 1},
                    ]
                },"grad+=1");



        });

        return () => anime.revert();

    }, [mode]);


    return(
        <Container component={"section"} maxWidth={false}
                   sx={{borderBottom: mode||systemMode==="dark"?"solid 1px rgba(255,255,255,.15)":"solid 1px lightgray"}}>
            <Stack textAlign={"center"} justifyContent={"center"} py={5} mx={"auto"} gap={3} minHeight={{xs: "90vh", md: "85vh"}}
                   maxWidth={900}>

                <Typography level={"display1"}>
                    Get awesome <Typography ref={textP} id={"pText"} sx={{
                        backgroundClip: "text",
                        backgroundImage: '-webkit-linear-gradient(-35deg ,var(--mui-joy-palette-primary-main),var(--mui-joy-palette-secondary-main))',
                        WebkitTextFillColor: "transparent"
                    }}>portfolios</Typography> for your projects.
                </Typography>
                <Typography textAlign={"center"} mx={"auto"}
                            sx={{maxWidth: {md: 650}}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris a interdum nibh. Vivamus non urna condimentum,
                    mattis dui. Vestibulum eu tellus eu odio posuere efficitur.
                </Typography>
                <Stack flexDirection={"row"} justifyContent={"center"} gap={3}>
                    <Button id={"explore"} size={"lg"}
                            sx={{backgroundColor: "secondary.main", "&:hover":{ backgroundColor: "secondary.dark"}}}
                            endDecorator={<ArrowForward/>}>
                        Explore
                    </Button>
                    <Button color={"primary"} size={"lg"}
                            endDecorator={<GitHub/>}
                            sx={{"&:hover":{ background: "secondary.main"},}}>
                        Github
                    </Button>
                </Stack>

            </Stack>
        </Container>
    );
}

export default Home;