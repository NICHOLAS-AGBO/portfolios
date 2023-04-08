"use client";

import { cardLabel, stroked } from "@/utils/Styles";
import ANIME_BREAKPOINTS from "@/utils/constants";
import { Container, Grid, Typography } from "@mui/joy";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Ubuntu } from "next/font/google";
import { useEffect } from "react";



gsap.registerPlugin(ScrollTrigger);

export const Title = Ubuntu({
    subsets: ['latin'], 
    display: 'swap', 
    weight: "300", 
    preload: true, 
    variable: "--fsUbuntu700"
});


const Services = ()=>{
    const tlBox = gsap.timeline({defaults:{
        stagger: 1,
        autoAlpha: 0,
    }});

    useEffect(()=>{
            const mx = gsap.matchMedia("body");

            mx.add(ANIME_BREAKPOINTS,(ctx)=>{
                if (ctx.conditions) {
                const {isDesktop,isMobile,reduceMotion} = ctx.conditions;

                tlBox.addLabel("box")
                .from(gsap.utils.toArray(".sBox"),{
                        rotateX: isDesktop?-100:0,
                        ease: isMobile?"bounce.out":"power3.inOut",
                        duration: reduceMotion?0:isMobile?3:1,
                        scale: isDesktop?1:0.8,  
                    scrollTrigger:{
                        start: isDesktop?"-50 top":"100 top",
                        end: "100%+=100px",
                        trigger: "#sCont",
                        once: isDesktop,
                    }
                });
                
                
                }

            });

            ScrollTrigger.refresh(true);

        return ()=>mx.revert();
    });


    return(
    <Container maxWidth={"md"} sx={{py: 3}} id="sCont">
    
<Typography level="h2" className={Title.className} sx={{
    textAlign: "center",
    }}>What to know about our services ?</Typography>
<Grid container gap={3} justifyContent="center" sx={{py: 5}}>

<Grid sx={{visibility: "hidden"}} xs={9} sm={5} md={3.5} className={"sBox"}>
    {/* <Card sx={stroked} isPressable className="strokeGrad">
<Card.Header>
    <Row gap={1} align="center">
        <Col span={3}>
    <Typography as={"span"} size={"$2xl"} weight={"semibold"} sx={cardLabel} className="strokeGrad">
        1
    </Typography>
        </Col>
        <Col span={8}>
            <Typography h3 size={"$3xl"} sx={{"@xsMax":{fontSize: "$2xl"}}} weight={"hairline"} as={"p"}>Awesome UI</Typography>
        </Col>
    </Row>
</Card.Header>
<Card.Divider/>
<Card.Body>
    <Typography size={"$lg"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat 
        quisquam quidem quos sit mollitia, fugiat expedita repellendus? Reprehenderit 
        eius, ullam illum itaque quos impedit voluptates amet tempore consectetur molestiae hic.
    </Typography>
</Card.Body>
    </Card> */}

</Grid>

</Grid>

    </Container>
    );
}

export default Services;