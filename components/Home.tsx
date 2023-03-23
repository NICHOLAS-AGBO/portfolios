'use client';

import {Button, Container, Grid, Spacer, Text, useTheme} from "@nextui-org/react";
import gsap from "gsap";
import {TextPlugin} from "gsap/TextPlugin";
import {useEffect, useRef} from "react";


gsap.registerPlugin(TextPlugin);

const Home = () => {
    const textP = useRef<any>(null);
    const {theme,isDark} = useTheme();

    const tl = gsap.timeline({
        defaults:{
            stagger: .5,
            duration: 3,
        }});
    const rand = gsap.utils.random(["var(--nextui-colors-secondaryLight)", "var(--nextui-colors-primaryLight)", "var(--nextui-colors-green500)"]);

    useEffect(() => {
        console.log(rand)
        const anime = gsap.context(()=>{

            tl.addLabel("start",1)
                .to(textP!.current,{
                    text: {
                        value: "portfolios",
                        preserveSpaces: true
                    },
                }).addLabel("grad",2)
                .from(textP!.current,{
                    duration: 5,
                    backgroundImage: "linear-gradient(35deg, var(--nextui-colors-secondaryLight) 50%, var(--nextui-colors-primaryLight)",
                    ease: "slow",
                    onComplete:()=>{
                        textP!.current.addEventListener("mouseover",()=>{
                            tl.fromTo("#explore",{
                                scale: .9,
                            },{scale: 1});
                        })
                    }
                },"-=2")
                .addLabel("line",3)
                .set(textP!.current,{
                    textDecoration: `${rand} wavy underline`,
                },"grad+=1");
        });

        return () => anime.revert();

    }, [isDark]);


  return(
      <Container as={"section"} sm>
          <Grid.Container gap={2} css={{minHeight: "90vh"}} justify={"center"} direction={"column"}>
              <Grid xs={12}>
                  <Text h1 css={{
                      lineHeight: 1.1,
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
                          color={"gradient"} iconRight={<box-icon type={"solid"} name='right-arrow-alt' size={'md'}
                                                                  color={theme?.colors.text.value}
                                                                  animation={"tada-hover"}></box-icon>}>
                      Explore more
                  </Button>
                  <Button ghost rounded auto size={"xl"}
                          color={"gradient"}
                          css={{"&:hover":{ background: "$secondaryLight"},}}
                          icon={<box-icon type={"logo"} name={"github"} size={"md"}
                                          color={theme?.colors.text.value}></box-icon>}>
                      Github
                  </Button>
              </Grid>




          </Grid.Container>
      </Container>
  );
}

export default Home;