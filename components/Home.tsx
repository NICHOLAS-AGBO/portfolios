'use client';

import {Button, Container, Grid, Spacer, Text, useTheme} from "@nextui-org/react";
import gsap from "gsap";
import {TextPlugin} from "gsap/TextPlugin";
import {useEffect, useRef} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Ubuntu } from "next/font/google";
import { Bounce } from "gsap/all";


gsap.registerPlugin(TextPlugin);

const Title = Ubuntu({
    subsets: ['latin'], 
    display: 'swap', 
    weight: "700", 
    preload: true, 
    variable: "--fsUbuntu700"
});

const Home = () => {
    const textP = useRef<any>(null);
    const {theme,isDark} = useTheme();


    const tl = gsap.timeline({
        defaults:{
            duration: 2,
        }});
        
    const randColor = gsap.utils.random(["var(--nextui-colors-secondaryLight)", "var(--nextui-colors-primaryLight)", "var(--nextui-colors-purple500)"]);
    const randText = gsap.utils.random(["portfolios", "UI design"]);

    useEffect(() => {

        const anime = gsap.context(()=>{
            tl.addLabel("start",1)
                .to(textP!.current,{
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
                            tl.addLabel("exp", 4).fromTo("#explore",{ 
                                rotate: -5,
                            },{rotate: 0, ease: Bounce.easeIn});
                        });
                    }
                },"-=2").addLabel("line",3)
                .set(textP!.current,{
                    textDecoration: `${randColor} wavy underline`,
                },"grad+=1");

                

            });

        return () => anime.revert();

    }, [isDark]);


  return(
    <section style={{borderBottom: isDark?"solid 1px rgba(255,255,255,.15)":"solid 1px lightgray"}}>
      <Container sm>
          <Grid.Container gap={1} css={{
            minHeight: "85vh",
            cursor: "default",
            py: "$xl",
            "@smMax":{
            minHeight: "90vh"
          }}} justify={"center"} direction={"column"}>
              <Grid xs={12}>
                  <Text h1 className={Title.className} css={{
                      lineHeight: 1.2,
                      paddingTop: "$1",
                      paddingBottom: "$1",
                      "@xs":{
                          fontSize: "$7xl",
                          paddingTop: "$4",
                          paddingBottom: "$4",
                      }
                  }}>
                      Get awesome <Text ref={textP} id={"pText"} as={"span"} 
                      onMouseOver={()=>tl.play(2)} css={{textGradient: "45deg, $primaryLight 20%, $secondaryLight 50%"}}></Text> for your career !
                  </Text>
              </Grid>
              <Grid xs={12}>
                  <Text size={"$lg"}>
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
                  py: "$xl",
                  "@xsMax":{
                      "&>button":{
                          flexGrow: 1
                      }
                  }
              }}>
                  <Button auto rounded shadow={isDark} size={"xl"} id={"explore"}
                          color={"gradient"} iconRight={<FontAwesomeIcon icon={faArrowRight} 
                          onMouseOver={(e)=>{e.currentTarget.classList.add("fa-shake")}}
                          onMouseOut={(e)=>{e.currentTarget.classList.remove("fa-shake")}}
                          />}>
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
    </section>
  );
}

export default Home;