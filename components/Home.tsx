'use client';

import {Button, Grid, Text, useTheme} from "@nextui-org/react";
import style from "@/app/page.module.css";


const Home = () => {
    const {theme} = useTheme();
  return(
      <Grid.Container gap={2} css={{maxWidth: theme?.breakpoints.sm, margin: "0 auto", minHeight: "100vh"}}
                      as={"section"} justify={"center"} direction={"column"}>
<Grid xs={12}>
<Text h1 css={{
    textGradient: "45deg, $blue600 -20%, $pink600 50%",
    lineHeight: "1.1",
    padding: "$2 0",
    "@xs":{
        fontSize: "$7xl",
        padding: "$4 0",
    }
}} weight={"bold"}>
    Get awesome portfolios for your career!
</Text>
</Grid>
          <Grid xs={12}>
              <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris a interdum nibh. Vivamus non urna condimentum, pulvinar erat ut,
                  mattis dui. Vestibulum eu tellus eu odio posuere efficitur.
              </Text>
          </Grid>
          <Grid xs={12}>
                  <Button auto rounded ghost shadow size={"xl"} color={"primary"}
                          iconRight={<box-icon name='right-arrow-alt' size={'md'}
                                               color={theme?.colors.white.value}
                                               animation={"tada-hover"}></box-icon>}>
                      Explore more
                  </Button>
          </Grid>




      </Grid.Container>
  );
}

export default Home;