"use client";

import { cardLabel, stroked } from "@/utils/Styles";
import ANIME_BREAKPOINTS from "@/utils/constants";
import { Card, Col, Container, Grid, Row, Spacer, Text, useTheme } from "@nextui-org/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Ubuntu } from "next/font/google";
import { useEffect } from "react";



gsap.registerPlugin(ScrollTrigger);

const Title = Ubuntu({
    subsets: ['latin'], 
    display: 'swap', 
    weight: "300", 
    preload: true, 
    variable: "--fsUbuntu700"
});


const Services = ()=>{
    const {isDark} = useTheme();
    const tlBox = gsap.timeline({defaults:{
        stagger: 1,
        autoAlpha: 0,
    }});

    useEffect(()=>{
            const mx = gsap.matchMedia("body");

            mx.add(ANIME_BREAKPOINTS,(ctx)=>{
                if (ctx.conditions) {
                const {isDesktop,isMobile,reduceMotion} = ctx.conditions;

                tlBox.addLabel("box").from(gsap.utils.toArray(".sBox"),{
                        yPercent: isDesktop?30:0, 
                        ease: isMobile?"bounce.out":"power3.inOut",
                        duration: reduceMotion?0:isMobile?3:1,
                        scale: isDesktop?1:0.8,  
                    scrollTrigger:{
                        start: isDesktop?"-50 top":"100 top",
                        end: "+=100%",
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
    <Container md css={{py: "$3xl", "@xsMax":{px: "$3"}}} id="sCont">
    
<Text h2 size={"$5xl"} className={Title.className} css={{
    textAlign: "center",
    "@smMax":{
        fontSize: "$3xl",
        px: "$1"
    }
    }}>What to know about our services ?</Text>
<Spacer y={3}/>
<Grid.Container gap={3} justify="center" css={{py: "$5"}}>

<Grid css={{"@xsMax":{flexBasis: "100% !important", maxWidth: "100% !important"}, visibility: "hidden"}} 
xs={9} sm={5} md={3.5} className={"sBox"}>
    <Card css={stroked} isPressable className="strokeGrad">
<Card.Header>
    <Row gap={1} align="center">
        <Col span={3}>
    <Text as={"span"} size={"$2xl"} weight={"semibold"} css={cardLabel} className="strokeGrad">
        1
    </Text>
        </Col>
        <Col span={8}>
            <Text h3 size={"$3xl"} css={{"@xsMax":{fontSize: "$2xl"}}} weight={"hairline"} as={"p"}>Awesome UI</Text>
        </Col>
    </Row>
</Card.Header>
<Card.Divider/>
<Card.Body>
    <Text size={"$lg"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat 
        quisquam quidem quos sit mollitia, fugiat expedita repellendus? Reprehenderit 
        eius, ullam illum itaque quos impedit voluptates amet tempore consectetur molestiae hic.
    </Text>
</Card.Body>
    </Card>
</Grid>

<Grid css={{"@xsMax":{flexBasis: "100% !important", maxWidth: "100% !important"}, visibility: "hidden"}} 
xs={9} sm={5} md={3.5} className={"sBox"}>
    <Card css={stroked} isPressable className="strokeGrad">
<Card.Header>
    <Row gap={1} align="center">
        <Col span={3}>
    <Text as={"span"} size={"$2xl"} weight={"semibold"} css={cardLabel} className="strokeGrad">
        2
    </Text>
        </Col>
        <Col span={8}>
            <Text h3 size={"$3xl"} css={{"@xsMax":{fontSize: "$2xl"}}} weight={"hairline"} as={"p"}>Free templates</Text>
        </Col>
    </Row>
</Card.Header>
<Card.Divider/>
<Card.Body>
    <Text size={"$lg"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat 
        quisquam quidem quos sit mollitia, fugiat expedita repellendus? Reprehenderit 
        eius, ullam illum itaque quos impedit voluptates amet tempore consectetur molestiae hic.
    </Text>
</Card.Body>
    </Card>
</Grid>

<Grid css={{"@xsMax":{flexBasis: "100% !important", maxWidth: "100% !important"}, visibility: "hidden"}} 
xs={9} sm={5} md={3.5} className={"sBox"}>
    <Card css={stroked} isPressable className="strokeGrad">
<Card.Header>
    <Row gap={1} align="center">
        <Col span={3}>
    <Text as={"span"} size={"$2xl"} weight={"semibold"} css={cardLabel} className="strokeGrad">
        3
    </Text>
        </Col>
        <Col span={8}>
            <Text h3 size={"$3xl"} css={{"@xsMax":{fontSize: "$2xl"}}} weight={"hairline"} as={"p"}>Dark theme</Text>
        </Col>
    </Row>
</Card.Header>
<Card.Divider/>
<Card.Body>
    <Text size={"$lg"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat 
        quisquam quidem quos sit mollitia, fugiat expedita repellendus? Reprehenderit 
        eius, ullam illum itaque quos impedit voluptates amet tempore consectetur molestiae hic.
    </Text>
</Card.Body>
    </Card>
</Grid>

<Grid css={{"@xsMax":{flexBasis: "100% !important", maxWidth: "100% !important"}, visibility: "hidden"}} 
xs={9} sm={5} md={0} className={"sBox"}>
    <Card css={stroked} isPressable className="strokeGrad">
<Card.Header>
    <Row gap={1} align="center">
        <Col span={3}>
    <Text as={"span"} size={"$2xl"} weight={"semibold"} css={cardLabel} className="strokeGrad">
        4
    </Text>
        </Col>
        <Col span={8}>
            <Text h3 size={"$3xl"} css={{"@xsMax":{fontSize: "$2xl"}}} weight={"hairline"} as={"p"}>Dark theme</Text>
        </Col>
    </Row>
</Card.Header>
<Card.Divider/>
<Card.Body>
    <Text size={"$lg"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat 
        quisquam quidem quos sit mollitia, fugiat expedita repellendus? Reprehenderit 
        eius, ullam illum itaque quos impedit voluptates amet tempore consectetur molestiae hic.
    </Text>
</Card.Body>
    </Card>
</Grid>

</Grid.Container>

    </Container>
    );
}

export default Services;