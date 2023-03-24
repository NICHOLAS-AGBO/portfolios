"use client";

import { cardLabel, stroked } from "@/utils/Styles";
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
    }});

    useEffect(()=>{
        const ctx = gsap.context(()=>{
            const mx = gsap.matchMedia("body");

            mx.add("(min-width: 900px)",(ct)=>{
                tlBox.addLabel("startMX", 1).from(gsap.utils.toArray(".sBox"),{
                    yPercent: 50,
                    autoAlpha: 0,
                    ease: "power3.inOut",  
                    scrollTrigger:{
                        start: "-100 top",
                        end: "+=100%",
                        trigger: "#sCont",
                        scrub: true
                    }
                })
            }).add("(max-width: 899px)",(ct)=>{
                tlBox.addLabel("endMX", 2).fromTo(gsap.utils.toArray(".sBox"),{
                    ease: "bounce.out",
                    duration: 3,
                    scale: 0.8,  
                    scrollTrigger:{
                        start: "200 top",
                        end: "+=100%",
                        trigger: "#sCont",
                        scrub: true
                    }
                },{
                    autoAlpha: 1,
                    scale: 1
                })
            })


});
        
window.addEventListener("resize",()=>ScrollTrigger.refresh(true));

        return ()=>ctx.revert();
    });


    return(
    <Container md css={{py: "$3xl"}} id="sCont">
    
<Text h2 size={"$5xl"} className={Title.className} css={{
    textAlign: "center",
    "@smMax":{
        fontSize: "$4xl",
    }
    }}>What to know about our services ?</Text>
<Spacer y={3}/>
<Grid.Container gap={3} justify="center" css={{py: "$5"}}>

<Grid css={{"@xsMax":{flexBasis: "100% !important", maxWidth: "95% !important"}, visibility: "hidden"}} 
xs={9} sm={5} md={3.5} className={"sBox"}>
    <Card css={stroked} isPressable className="strokeGrad">
<Card.Header>
    <Row gap={1} align="center">
        <Col span={3}>
    <Text as={"span"} size={"$3xl"} weight={"semibold"} css={cardLabel} className="strokeGrad">
        1
    </Text>
        </Col>
        <Col span={8}>
            <Text h3 size={"$3xl"} weight={"hairline"} as={"p"}>Awesome UI</Text>
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

<Grid css={{"@xsMax":{flexBasis: "100% !important", maxWidth: "95% !important"}, visibility: "hidden"}} 
xs={9} sm={5} md={3.5} className={"sBox"}>
    <Card css={stroked} isPressable className="strokeGrad">
<Card.Header>
    <Row gap={1} align="center">
        <Col span={3}>
    <Text as={"span"} size={"$3xl"} weight={"semibold"} css={cardLabel} className="strokeGrad">
        2
    </Text>
        </Col>
        <Col span={8}>
            <Text h3 size={"$3xl"} weight={"hairline"} as={"p"}>Free templates</Text>
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

<Grid css={{"@xsMax":{flexBasis: "100% !important", maxWidth: "95% !important"}, visibility: "hidden"}} 
xs={9} sm={5} md={3.5} className={"sBox"}>
    <Card css={stroked} isPressable className="strokeGrad">
<Card.Header>
    <Row gap={1} align="center">
        <Col span={3}>
    <Text as={"span"} size={"$3xl"} weight={"semibold"} css={cardLabel} className="strokeGrad">
        3
    </Text>
        </Col>
        <Col span={8}>
            <Text h3 size={"$3xl"} weight={"hairline"} as={"p"}>Dark theme</Text>
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

<Grid css={{"@xsMax":{flexBasis: "100% !important", maxWidth: "95% !important"}, visibility: "hidden"}} 
xs={9} sm={5} md={0} className={"sBox"}>
    <Card css={stroked} isPressable className="strokeGrad">
<Card.Header>
    <Row gap={1} align="center">
        <Col span={3}>
    <Text as={"span"} size={"$3xl"} weight={"semibold"} css={cardLabel} className="strokeGrad">
        4
    </Text>
        </Col>
        <Col span={8}>
            <Text h3 size={"$3xl"} weight={"hairline"} as={"p"}>Dark theme</Text>
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