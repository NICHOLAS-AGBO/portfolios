"use client";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Container, Grid, Text, styled } from "@nextui-org/react";
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin";
import * as PIXI from "pixi.js";
import Link from "next/link";
import { useEffect } from "react";

gsap.registerPlugin(PixiPlugin);
PixiPlugin.registerPIXI(PIXI);

const app = new PIXI.Application({autoStart: true, width: 200, height: 200})
const laptop = PIXI.Sprite.from("/img/laptop.png",{width: 50, height: 50, pixiIdPrefix: "nick"});
app.stage.addChild(laptop);

console.log(laptop);


const Assets =()=>{
const ULink = styled(Link,{
    css:{
        color: "$text",
        display: "flex",
        gap: "$3"
    }
});

useEffect(()=>{
const animeImg = document.querySelector("#animeImg");
const view:any = app.view;

animeImg!.appendChild(view);



    
})



    return(
    <Container md css={{"@xsMax":{px: "$3"}}}>
<Grid.Container justify="center" gap={3}>

{/* ANIMATED IMAGES */}
<Grid xs={0} sm id="animeImg">
    




</Grid>

<Grid xs={0} sm={9} md={5.5}>
<Text size={"$lg"}>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde aut doloribus in 
inventore alias, natus quas consequuntur necessitatibus similique 
voluptatum aliquam, accusamus suscipit. Tempore dolorem sapiente, iste vel voluptatem odio!
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde aut doloribus in 
inventore alias, natus quas consequuntur necessitatibus similique 
voluptatum aliquam, accusamus suscipit. Tempore dolorem sapiente, iste vel voluptatem odio!
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde aut doloribus in 
inventore alias, natus quas consequuntur necessitatibus similique 
voluptatum aliquam, accusamus suscipit. Tempore dolorem sapiente, iste vel voluptatem odio!
</Text>
</Grid>

<Grid xs={12} sm={0}>
<Card isHoverable>
<Card.Body>
<Text size={"$lg"}>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde aut doloribus in 
inventore alias, natus quas consequuntur necessitatibus similique 
voluptatum aliquam, accusamus suscipit. Tempore dolorem sapiente, iste vel voluptatem odio!
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde aut doloribus in 
inventore alias, natus quas consequuntur necessitatibus similique 
voluptatum aliquam, accusamus suscipit. Tempore dolorem sapiente, iste vel voluptatem odio!
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde aut doloribus in 
inventore alias, natus quas consequuntur necessitatibus similique 
voluptatum aliquam, accusamus suscipit. Tempore dolorem sapiente, iste vel voluptatem odio!
</Text>
</Card.Body>
<Card.Divider/>
<Card.Footer isBlurred>
<ULink href={"#"} referrerPolicy="no-referrer">
View more <FontAwesomeIcon icon={faArrowRight} size="lg"/>
</ULink>
</Card.Footer>
</Card>
</Grid>





</Grid.Container>





    </Container>
    );
};

export default Assets;