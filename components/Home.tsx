'use client';

import {Button, Grid, Spacer, Text, useTheme} from "@nextui-org/react";
import gsap from "gsap";
import {TextPlugin} from "gsap/TextPlugin";


gsap.registerPlugin(TextPlugin);

const Home = () => {
    const {theme,isDark} = useTheme();

    const tl = gsap.timeline({
        defaults:{
        delay: .5,
            stagger: .4,
            ease: "power4.in",
            repeat: 1
        }});

    tl.to("#pText",{
        duration: 5,
        text: {
            value: "portfolios"
        }
    })

  return(
      <Grid.Container gap={2} css={{maxWidth: theme?.breakpoints.sm, margin: "0 auto", minHeight: "90vh"}}
                      as={"section"} justify={"center"} direction={"column"}>
<Grid xs={12}>
<Text h1 css={{
    lineHeight: 1.1,
    padding: "$2 0",
    "@xs":{
        fontSize: "$7xl",
        padding: "$4 0",
    }
}} weight={"bold"}>
    Get awesome&nbsp;
    <Text id={"pText"} as={"span"} css={{textGradient: "45deg, $primaryLight 20%, $secondaryLight 50%"}}></Text>
    &nbsp; for your career!
</Text>
</Grid>
          <Grid xs={12}>
              <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris a interdum nibh. Vivamus non urna condimentum, pulvinar erat ut,
                  mattis dui. Vestibulum eu tellus eu odio posuere efficitur.
              </Text>
          </Grid>

          <Grid>

              <Grid.Container gap={1} wrap={"nowrap"} alignItems={"center"}>
                  <Button auto rounded shadow={isDark} size={"xl"}
                          css={{
                              "@smMax": {
                                  fontSize: "$lg"
                              }
                          }}
                          color={"gradient"} iconRight={<box-icon type={"solid"} name='right-arrow-alt' size={'md'}
                                                                  color={theme?.colors.text.value}
                                                                  animation={"tada-hover"}></box-icon>}>
                      Explore more
                  </Button>
                  <Button ghost rounded auto size={"xl"}
                          color={"gradient"}
                          css={{
                              "&:hover":{ background: "$secondaryLight"},
                              "@xs": {
                                  fontSize: "7pt"
                              }
                          }}
                          icon={<box-icon type={"logo"} name={"github"} size={"md"}
                                          color={isDark?theme?.colors.text.value:theme?.colors.primaryLight.value}></box-icon>}>
                      Github
                  </Button>
              </Grid.Container>
          </Grid>




      </Grid.Container>
  );
}

export default Home;