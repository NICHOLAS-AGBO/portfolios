import {useEffect, useRef} from "react";
import {Button, Container, Stack, Typography, useColorScheme} from "@mui/joy";
import gsap from "gsap";
import {ArrowForward, GitHub} from "@mui/icons-material";
import {Ubuntu_Condensed} from "next/font/google";
import TextPlugin from "gsap/dist/TextPlugin";
import {SlowMo} from "gsap/dist/EasePack";
import {Power4} from "gsap/dist/gsap";


gsap.registerPlugin(TextPlugin, SlowMo);

const CoverPage = () => {
    const textP = useRef<any>(null);
    const {mode,systemMode} = useColorScheme();


    const randText = gsap!.utils.random(["portfolios", "designs"]);

    useEffect(() => {
        const tl = gsap.timeline({
            defaults:{
                duration: 2,
            }});

        const anime = gsap.context(()=>{
            tl.addLabel("start",1)
                .from('.textScale', {scale: .7, y: -50, autoAlpha: 0.2, duration: 3, ease: Power4.easeInOut})
                .addLabel('typing', 2)
                .fromTo(textP!.current,{
                    duration: 3,
                    text: {
                        value: randText,
                        preserveSpaces: true
                    },
                    ease: "power1.inOut"
                },{
                    repeat: -1,
                    repeatDelay: 5,
                    backgroundImage: "linear-gradient(35deg, var(--mui-joy-palette-secondary-main) 50%, var(--mui-joy-palette-primary-main)",
                    keyframes: [
                        {text: {value: "designs", preserveSpaces: true},
                            ease: "power3.in",
                            backgroundImage: "linear-gradient(35deg, var(--mui-joy-palette-secondary-main) 50%, var(--mui-joy-palette-primary-light)", duration: 5},
                        {text: {value: "portfolios", preserveSpaces: true}, delay: 3,
                            ease: "slow(0.5, 0.8, true)",
                            backgroundImage: "linear-gradient(35deg, var(--mui-joy-palette-secondary-main) 50%, var(--mui-joy-palette-secondary-dark) 70%", duration: 5},
                    ]
                },'typing+=1');



        });

        return () => anime.revert();

    }, [mode, systemMode]);

    return(
      <Container maxWidth={false}
                 sx={{borderBottom: (mode||systemMode)==="dark"?"solid 1px rgba(255,255,255,.15)":"solid 1px lightgray"}}>
          <Stack textAlign={"center"} justifyContent={"center"} py={5} mx={"auto"} gap={3} minHeight={{xs: "90vh", md: "85vh"}}
                 maxWidth={900}>

              <Typography level={"display1"} sx={{
                  typography: {xs: "display2", md: "display1"}
              }} fontWeight={900} className={"textScale"}>
                  Get awesome <Typography ref={textP} id={"pText"} sx={{
                  backgroundClip: "text",
                  backgroundImage: '-webkit-linear-gradient(-35deg ,var(--mui-joy-palette-primary-main),var(--mui-joy-palette-secondary-main))',
                  WebkitTextFillColor: "transparent"
              }}>portfolios</Typography> for your projects.
              </Typography>
              <Typography textAlign={"center"} mx={"auto"}
                          sx={{maxWidth: {sm: 550, md: 650}}}>
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
  )
}

export default CoverPage;