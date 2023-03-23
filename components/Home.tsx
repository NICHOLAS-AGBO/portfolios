'use client';

import {Button, Container, Grid, Spacer, Text, useTheme} from "@nextui-org/react";
import gsap from "gsap";
import {TextPlugin} from "gsap/TextPlugin";
import {PixiPlugin} from "gsap/PixiPlugin";
import {useEffect, useRef} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import * as PIXI from "pixi.js";


gsap.registerPlugin(TextPlugin, PixiPlugin);
PixiPlugin.registerPIXI(PIXI);


const Home = () => {
    const textP = useRef<any>(null);
    const {theme,isDark} = useTheme();
    const tl = gsap.timeline({
        defaults:{
            stagger: .5,
            duration: 2,
        }});
        
    const randColor = gsap.utils.random(["var(--nextui-colors-secondaryLight)", "var(--nextui-colors-primaryLight)", "var(--nextui-colors-green500)"]);
    const randText = gsap.utils.random(["portfolios", "UI", "designs"]);

    useEffect(() => {
        
        const anime = gsap.context(()=>{

            tl.addLabel("start",1)
                .to(textP!.current,{
                    repeat: 1,
                    text: {
                        value: randText,
                        preserveSpaces: true
                    },
                }).addLabel("grad",2)
                .from(textP!.current,{
                    duration: 5,
                    backgroundImage: "linear-gradient(35deg, var(--nextui-colors-secondaryLight) 50%, var(--nextui-colors-primaryLight)",
                    ease: "slow",
                    onComplete:()=>{
                        textP!.current.addEventListener("mouseover",()=>{
                            tl.fromTo("#explore",{ scale: .8,},{scale: 1});
                        })
                    }
                },"-=2")
                .addLabel("line",3)
                .set(textP!.current,{
                    textDecoration: `${randColor} wavy underline`,
                },"grad+=1");

                gsap.fromTo("body",{
                    repeat: 3,
                },{})

        });

        return () => anime.revert();

    }, [isDark]);


  return(
      <Container as={"section"} sm>
          <Grid.Container gap={2} css={{minHeight: "90vh"}} justify={"center"} direction={"column"}>
              <Grid xs={12}>
                  <Text h1 css={{
                      lineHeight: 1.2,
                      paddingTop: "$2",
                      paddingBottom: "$2",
                      "@xs":{
                          fontSize: "$7xl",
                          paddingTop: "$4",
                          paddingBottom: "$4",
                      }
                  }} weight={"bold"}>
                      Get awesome <Text ref={textP} id={"pText"} as={"span"} onMouseOver={()=>tl.play(2)}
                                        css={{textGradient: "45deg, $primaryLight 20%, $secondaryLight 50%"}}></Text> for your career !
                  </Text>
              </Grid>
              <Grid xs={12}>
                  <Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris a interdum nibh. Vivamus non urna condimentum, pulvinar erat ut,
                      mattis dui. Vestibulum eu tellus eu odio posuere efficitur.
                  </Text>
              </Grid>

              <Grid css={{
                  d: "flex",
                  alignItems: "center",
                  gap: "$lg",
                  flexWrap: "wrap",
                  "@xsMax":{
                      "&>button":{
                          flexGrow: 1
                      }
                  }
              }}>
                  <Button auto rounded shadow={isDark} size={"xl"} id={"explore"}
                          color={"gradient"} iconRight={<FontAwesomeIcon icon={faArrowRight} className="fa-rotate"/>}>
                      Explore more
                  </Button>
                  <Button ghost rounded auto size={"xl"}
                          color={"gradient"}
                          css={{"&:hover":{ background: "$secondaryLight"},}}
                          icon={<FontAwesomeIcon icon={faGithub} size={"lg"}/>}>
                      Github
                  </Button>
              </Grid>




          </Grid.Container>
      </Container>
  );
}

export default Home;