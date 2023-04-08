'use client';


import Image from "next/image";
import next13 from "@/public/thirteen.svg";
import nextjs from "@/public/next.svg";
import Link from "next/link";
import { Stack } from "@mui/joy";
import {AppBar, Toolbar} from "@mui/material";


const Header = ()=>(
   <>
       <AppBar enableColorOnDark position="sticky">
           <Toolbar>
               <Link href={"/"}>
                   <Image src={nextjs} alt={"nextjs_logo"} width={100}/>
                   <Image src={next13} alt={"nextjs_v13"} width={30} title={"NEXTJS v13"}/>
               </Link>
               <Stack flexGrow={1} flexDirection={"row"} alignItems={"center"} justifyContent={"flex-end"} gap={1} sx={{"&>a:hover": {textDecoration: "underline"}}}>
                   <Link href={"/portfolios"} style={{color: "inherit"}}>
                       Portfolios
                   </Link>
                   <Link href={"/roadmap"} style={{color: "inherit"}}>
                       Roadmap
                   </Link>
                   <Link href={"/about"} style={{color: "inherit"}}>
                       About us
                   </Link>
               </Stack>

           </Toolbar>
       </AppBar>
   </>
);

export default Header;