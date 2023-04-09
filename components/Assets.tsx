"use client";


import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import ui_1 from "@/public/img/ui_1.png";
import ui_2 from "@/public/img/ui_2.png";
import ui_3 from "@/public/img/ui_3.png";
import btn from "@/public/img/buttons.png";
import login_img from "@/public/img/login.png";
import bar from "@/public/img/slider.png";
import ANIME_BREAKPOINTS from "@/utils/constants";
import { ExpoScaleEase } from "gsap/EasePack";
import {Container, Grid, IconButton, Stack, Typography, useColorScheme as toggleTheme} from "@mui/joy";
import {DarkMode, LightMode} from "@mui/icons-material";
import {Box} from "@mui/material";

gsap.registerPlugin(ExpoScaleEase, ScrollTrigger);

const UI = [ui_1,ui_2,ui_3];


// move the sprite to the center of the screen
const Assets =()=>{
    

const {setMode, mode, systemMode} = toggleTheme();
const [motion,setMotion] = useState(false);

// SCALE ANIMATION FOR SOME UI IMAGES
const runBeat = useCallback(()=>{
    tlUI.fromTo(".ui_btn,.ui_login,.ui_bar",{
        duration: motion?0:.5,
        scale: .9,
    },{
        scale: 1,
        repeat: -1,
        keyframes: [{scale:.9, duration: .5},{scale: 1, duration: .5}],
        stagger: {
            each: 2,
            ease: "bounce",
        }
    },"ui_bar+=1")
    .to(".theme_switch",{
        duration: 1,
        repeat: -1,
        ease: "expoScale(0.5, 3, power2.inOut)",
        keyframes:[{rotate:0},{rotate: 360}]
    },"end");


},[motion]);


//UI Animation timeline
const tlUI = gsap.timeline({
    autoRemoveChildren: true, 
    scrollTrigger:{
        trigger: "#uiCont",
        start: "20 center",
        end: "100%+=5%",
        endTrigger: "#contact",
        toggleActions: "play none restart none",
    },
    onComplete: runBeat,
});


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
.set(".ui_btn",{
    position: "absolute",
    top: 60,
    left: 25,
    zIndex: 1,
    width: "15%",
    height: "auto"
},"ui3-=3")

//LOGIN UI 
.addLabel("ui_login")
.from(".ui_login",{
autoAlpha: 0,
xPercent: 20,
},"ui_btn")
.set(".ui_login",{
    position: "absolute",
    bottom: 5,
    right: 25,
    zIndex: 1,
    width: "20%",
    height: "auto"
},"ui3-=3")

//PROGRESSIVE BAR UI 
.addLabel("ui_bar")
.from(".ui_bar",{
autoAlpha: 0,
stagger: .5
},"ui_login-=1")
.set(".ui_bar",{
    position: "absolute",
    top: -15,
    left: "37%",
    right: "50%",
    zIndex: 1,
    width: "26%",
    height: "auto"
},"ui3-=3")
.to(".ui_title",{
    duration: 5,
    ease: "slow( .1, -5)",
    text:{
        value: "UI/UX",
        preserveSpaces: true,
    },
},screen.isMobile?"animeUI-=3":"ui1-=3")
.addLabel("end")
.to(".theme_switch",{
    autoAlpha: 1
},"ui3");

});

ScrollTrigger.refresh(true);


return ()=>mAnime.revert();
    
});



    return(

    <Container maxWidth="lg" id={"uiCont"} sx={{py: 3}}>
<Grid container justifyContent="center" alignItems="center" gap={2} 
    sx={{flexWrap: "wrap-reverse"}} className="animeUI invisible">

{/* ANIMATED IMAGES */}
<Grid xs={12} className={"uiImg"} sm sx={{position: "relative"}}>
<Image src={btn} alt={"ui_button image"} className="ui_btn invisible" />
<Image src={login_img} alt={"ui_login image"} className="ui_login invisible" />
<Image src={bar} alt={"ui_progressive_bar image"} className="ui_bar invisible" />

<IconButton onClick={()=>setMode(mode?"light":"dark")}
            className="theme_switch" sx={{
    background: "common.white",
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
    visibility: "hidden"
}}>
    {mode||systemMode==="dark"?
    <LightMode/>:<DarkMode/>}
</IconButton>

<Stack justifyContent="center" flexDirection={"row"}>
    {
    UI.map((url,id)=>(
<Box key={id} maxWidth={"25%"}>
<Image src={url} alt={url+" image"} className="ui_ invisible" />
</Box>
    ))
}

</Stack>


</Grid>

<Grid xs={12} sm={5} md={6} sx={{display: "block !important"}}>
    
<Typography className="ui_title" level="display2" fontWeight={"sm"} sx={{
    textAlign: "center",
    }}></Typography>

<Typography level={"subtitle1"}>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde aut doloribus in 
inventore alias, natus quas consequuntur necessitatibus similique 
voluptatum aliquam, accusamus suscipit. Tempore dolorem sapiente, iste vel voluptatem odio!
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde aut doloribus in 
inventore alias, natus quas consequuntur necessitatibus similique 
voluptatum aliquam, accusamus suscipit. Tempore dolorem sapiente, iste vel voluptatem odio!
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde aut doloribus in 
inventore alias, natus quas consequuntur necessitatibus similique 
voluptatum aliquam, accusamus suscipit. Tempore dolorem sapiente, iste vel voluptatem odio!
</Typography>
</Grid>






</Grid>





    </Container>
    );
};

export default Assets;