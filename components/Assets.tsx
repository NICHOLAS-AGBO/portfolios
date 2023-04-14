import {useCallback, useEffect, useState} from "react";
import Image from "next/image";
import ui_1 from "@/img/ui_1.png";
import ui_2 from "@/img/ui_2.png";
import ui_3 from "@/img/ui_3.png";
import btn from "@/img/buttons.png";
import login_img from "@/img/login.png";
import bar from "@/img/slider.png";
import {Container, Grid, IconButton, Stack, Typography, useColorScheme as toggleTheme} from "@mui/joy";
import {DarkMode, LightMode} from "@mui/icons-material";
import {Box} from "@mui/material";
import style from "@/styles/Home.module.css";
import ANIME_BREAKPOINTS from "@/utils/constants";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ExpoScaleEase } from "gsap/dist/EasePack";
import gsap from "gsap/dist/gsap";


gsap.registerPlugin(ExpoScaleEase, ScrollTrigger);
const UI = [ui_1,ui_2,ui_3];

const Assets = () =>{
    const {setMode, mode, systemMode} = toggleTheme();
    const [motion,setMotion] = useState(false);




    //UI Animation timeline
    const tlUI = gsap.timeline({
        scrollTrigger:{
            trigger: "#uiCont",
            start: "20 center",
            end: "100%+=5%",
            endTrigger: "#contact",
            toggleActions: "play none restart none",
        },
    });

    // SCALE ANIMATION FOR SOME UI IMAGES
    const runBeat = useCallback(()=>{
        tlUI.fromTo(".beat",{
            duration: motion?0:.5,
            scale: .9,
        },{
            scale: 1,
            keyframes: [{scale:.9, duration: .5},{scale: 1, duration: .5}],
            stagger: {
                each: 2,
                ease: "bounce",
            },
            repeat: -1
        },"ui_bar+=1")
            .to(".theme_switch",{
                duration: 5,
                ease: "expoScale(0.5, 3, power2.out)",
                keyframes:[{rotate: -360},{rotate: 0}],
                repeat: -1
            },"end");


    },[motion, tlUI]);

    // ANIMATION FOR UI IMAGES
    useEffect(()=>{
        let screen:{[type:string]: boolean};

        const offset = [-10,0,-10];
        const mAnime = gsap.matchMedia("body")
            .add({
                reduceMotion: "(prefers-reduced-motion: reduce)",
                isScreen: "screen",
                isMobile: ANIME_BREAKPOINTS.isMobile
            },(ctx)=>{

                if (ctx.conditions) {
                    const {reducedMotion} = ctx.conditions;
                    screen = ctx.conditions;
                    setMotion(reducedMotion);

                    tlUI.addLabel("animeUI",0)
                        .from(".animeUI",{
                            autoAlpha: 0,
                            duration: reducedMotion?0:2,
                        });

                }


                // MOBILE UI
                document.querySelectorAll(".ui_")
                    .forEach((elem,i)=>{
                        tlUI.addLabel("ui"+i,1)
                            .fromTo(elem,{
                                yPercent: 10,
                                autoAlpha: 0
                            },{
                                yPercent: offset[i],
                                stagger: 1,
                                autoAlpha: 1,
                                duration: .3
                            });

                    });

                // UI BUTTON
                tlUI.addLabel("ui_btn")
                    .from(".ui_btn",{
                        autoAlpha: 0,
                        yPercent: 30,
                    },"ui2")

                    //LOGIN UI
                    .addLabel("ui_login")
                    .from(".ui_login",{
                        autoAlpha: 0,
                        xPercent: 20,
                    },"ui_btn")

                    //PROGRESSIVE BAR UI
                    .addLabel("ui_bar")
                    .from(".ui_bar",{
                        autoAlpha: 0,
                        stagger: .5
                    },"ui_login-=1")
                    .to(".ui_title",{
                        duration: 5,
                        ease: "slow( .1, -5)",
                        text:{
                            value: "UI/UX",
                            preserveSpaces: true,
                        },
                    },screen.isMobile?"animeUI-=3":"ui1-=3")

                    //Switch for Theme
                    .addLabel("end")
                    .to(".theme_switch",{
                        autoAlpha: 1,
                        onComplete: runBeat
                    },"ui3");

            });

        ScrollTrigger.refresh(true);


        return ()=>mAnime.revert();

    });


    return(
        <Container maxWidth="lg" id={"uiCont"} sx={{py: 16}}>
            <Grid container justifyContent="center" alignItems="center"
                  gap={2} rowGap={8} wrap={"wrap-reverse"} className="animeUI invisible">

                {/* ANIMATED IMAGES */}
                <Grid xs={12} sm={10} md={5.5} className={"uiImg"}
                      sx={{position: "relative"}}>
                    <Image width={536} height={1068} src={btn} alt={"ui_button image"}
                           className={"ui_btn invisible beat "+style.ui_btn} />
                    <Image width={553} height={639} src={login_img} alt={"ui_login image"}
                           className={"ui_login invisible beat "+style.ui_login} />
                    <Image width={794} height={213} src={bar} alt={"ui_progressive_bar image"}
                           className={"ui_bar invisible beat "+style.ui_bar} />

                    <IconButton onClick={()=>setMode((mode||systemMode)==="dark"?"light":"dark")}
                                className="theme_switch invisible" sx={{
                        backgroundColor: "body.main",
                        color: "secondary.main",
                        position: "absolute",
                        borderRadius: "50%",
                        outline: "2px solid var(--mui-joy-palette-primary)",
                        outlineOffset: 3,
                        top: -15,
                        right: "15%",
                        width: 38,
                        height: 38,
                        p: 1,
                        zIndex: 1,
                        opacity: 0
                    }}>
                        {(mode||systemMode)==="dark"?
                            <LightMode/>:<DarkMode/>}
                    </IconButton>

                    <Stack justifyContent="center" flexDirection={"row"} width={"100%"}>
                        {
                            UI.map((url,id)=>(
                                <Box component={"div"} key={id} maxWidth={"25%"}>
                                    <Image width={571} height={1188} src={url} alt={url+" image"} className="ui_ invisible" />
                                </Box>
                            ))
                        }

                    </Stack>


                </Grid>

                <Grid sm={10} md={6}>

                    <Typography className="ui_title" level="display2"
                                fontWeight={"sm"} sx={{textAlign: "center",}}>
                        UI/UX
                    </Typography>

                    <Typography>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde aut doloribus in
                        inventore alias, natus quas consequuntur necessitatibus similique
                        voluptatum aliquam, accusamus suscipit. Tempore dolorem sapiente, iste vel voluptatem odio
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde aut doloribus in
                        inventore alias, natus quas consequuntur necessitatibus similique
                        voluptatum aliquam, accusamus suscipit. Tempore dolorem sapiente, iste vel voluptatem odio
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde aut doloribus in
                        inventore alias, natus quas consequuntur necessitatibus similique
                        voluptatum aliquam, accusamus suscipit. Tempore dolorem sapiente, iste vel voluptatem odio
                    </Typography>
                </Grid>






            </Grid>








        </Container>
    );
}

export default Assets;