'use client';


import {Navbar} from "@nextui-org/react";
import Image from "next/image";
import next13 from "@/public/thirteen.svg";
import nextjs from "@/public/next.svg";
import Link from "next/link";


const Header = ()=>(
    <Navbar variant={"sticky"}>
        <Navbar.Brand>
            <Link href={"/"}>
                <Image src={nextjs} alt={"nextjs_logo"} width={100}/>
                <Image src={next13} alt={"nextjs_v13"} width={30} title={"NEXTJS v13"}/>
            </Link>
        </Navbar.Brand>
        <Navbar.Content>
            <Navbar.Link>
                About us
            </Navbar.Link>
        </Navbar.Content>
    </Navbar>
);

export default Header;