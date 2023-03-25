import { CSS } from "@nextui-org/react";


const stroked:CSS = {    
    backgroundColor: "rgba(222,222,222,.15)",
    "&:after":{
        content: "",
        width: "100%",
        height: "100%",
        filter: "blur(60px)",
        backgroundImage: "linear-gradient(rgba(222,222,222,.15), rgba(222,222,222,.15)),"+
        "radial-gradient(circle at 30% 30%,rgba(255,0,0, .35),transparent), radial-gradient(circle at 70%,$yellow500,transparent), radial-gradient(circle at 90%, var(--nextui-colors-primaryLight) 40%,transparent)",
        position: "absolute",
        left: "0",
        top: "0",
        borderImage: "linear-gradient(red,yellow) 30",
        borderImageWidth: "5px",
        zIndex: "-1",
    },
    overflow: "hidden",
    position: "relative",
    color: "var(--nextui-colors-text)",
    borderRadius: "$lg",
    boxShadow: "0 5px 1px var(--nextui-colors-gray500)",
    transition: "transform 300ms cubic-bezier(0,0.5,0.5,-2)",
    outline: ".0025em solid var(--nextui-colors-blue800)",
    "@dark":{
        boxShadow: "0 3px 3px var(--nextui-colors-blue700), 0 0 10px var(--nextui-colors-blue600) inset"
    },
    "@light":{
    },
    "&:hover":{
        transform: "scale(1.025)",
        cursor: "pointer"
    }
};

const cardLabel:CSS = { 
    color: "var(--nextui-colors-text)",
    padding: "$1",
    backgroundImage: "linear-gradient(var(--nextui-colors-background), var(--nextui-colors-background)), var(--nextui-colors-gradient)",
    borderRadius: "$rounded",
    width: 40,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}; 


export {stroked, cardLabel};