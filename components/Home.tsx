'use client';

import {TextPlugin} from "gsap/TextPlugin";
import {useEffect, useRef} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Ubuntu } from "next/font/google";
import { SlowMo } from "gsap/EasePack";
import { Button, Container, Grid, Typography, useColorScheme } from "@mui/joy";
import { GitHub } from "@mui/icons-material";
import {gsap, random} from "gsap/src/gsap-core";



gsap.registerPlugin(TextPlugin, SlowMo);

const Title = Ubuntu({
    subsets: ['latin'],
    display: 'swap',
    weight: "700",
    preload: true
});

const Home = () => {
    const textP = useRef<any>(null);
    const {mode, systemMode} = useColorScheme();


    const tl = gsap.timeline({
        defaults:{
            duration: 2,
        }});
        
    const randColor = random(["var(--mui-joy-palette-secondary-main)", "var(--mui-joy-palette-primary-main)", "var(--mui-joy-palette-purple-500)"]);
    const randText = random(["portfolios", "designs"]);

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
                        backgroundImage: "linear-gradient(35deg, var(--mui-joy-palette-secondary-main) 50%, var(--mui-joy-palette-primary-main)", duration: 5},
                        {text: {value: "portfolios", preserveSpaces: true}, delay: 2,
                        ease: "slow(0.5, 0.8, true)",
                        backgroundImage: "linear-gradient(35deg, var(--mui-joy-palette-secondary-main) 50%, var(--mui-joy-palette-yellow-800) 70%", duration: 5},
                ],
                onComplete:()=>{
                    textP!.current.addEventListener("mouseover",()=>{
                        tl.addLabel("exp", 4).fromTo("#explore",{
                            rotate: -5,
                        },{rotate: 0, ease: "power1.inOut"});
                    });
                }
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
    <section style={{borderBottom: mode||systemMode==="dark"?"solid 1px rgba(255,255,255,.15)":"solid 1px lightgray"}}>
      <Container maxWidth={"md"}>
          <Grid container gap={2} sx={{
            minHeight: {xs: "85vh", sm: "90vh"},
            cursor: "default",
            py: 3,
            }} justifyContent={"center"} direction={"column"}>
              <Grid xs={12}>
                  <Typography level={"display1"} textAlign={"center"} className={Title.className} sx={{
                      fontSize: (theme)=>({xs: theme.typography.h1, sm: theme.typography.display1}),
                      fontWeight: 900
                  }}>
                      Get awesome <Typography ref={textP} id={"pText"} sx={{
                        WebkitBackgroundClip: "text",
                        background:(theme)=> `linear-gradient(${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        WebkitTextFillColor: "transparent"
                      }}></Typography> for your career !
                  </Typography>
              </Grid>
              <Grid xs={12}>
                  <Typography textAlign={"center"} mx={"auto"}
                              sx={{maxWidth: {md: 650}}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris a interdum nibh. Vivamus non urna condimentum,
                      mattis dui. Vestibulum eu tellus eu odio posuere efficitur.
                  </Typography>
              </Grid>

              <Grid display={"flex"} justifyContent={"center"} gap={2}>
                  <Button id={"explore"} size={"lg"} sx={{backgroundColor: "secondary.main"}}
                          endDecorator={<FontAwesomeIcon icon={faArrowRight}
                          onMouseOver={(e)=>{e.currentTarget.classList.add("fa-shake")}}
                          onMouseOut={(e)=>{e.currentTarget.classList.remove("fa-shake")}}
                          />}>
                      Explore more
                  </Button>
                  <Button color={"primary"} size={"lg"} endDecorator={<GitHub/>}
                          sx={{"&:hover":{ background: "$secondaryLight"},}}>
                      Github
                  </Button>
              </Grid>




          </Grid>
      </Container>
    </section>
  );
}

export default Home;