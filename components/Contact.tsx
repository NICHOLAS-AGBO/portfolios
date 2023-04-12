// import { Title } from "./Services";
import { Button, Container, Grid, Typography, useColorScheme } from "@mui/joy";
import contactImg from "@/img/black_man_on_laptop.png";

const Contact = ()=>{
    const {mode, systemMode} = useColorScheme();


    return(
        <Container id="contact" maxWidth={"md"} sx={{
            backgroundImage: mode||systemMode==="dark"?`linear-gradient(rgba(0,0,0,.75),rgba(0,0,0,.95)) ,url('${contactImg.src}')`
                : `linear-gradient(rgba(255,255,255,.65),rgba(255,255,255.35)) ,url('${contactImg.src}')`,
            backgroundSize: "cover",
            backgroundPositionY: "100%"
        }}>
            <Grid container direction="column" gap={1} alignItems="center" justifyContent="center" sx={{
                minHeight: "300px",
                border: "2px common.white solid",
                mx: "auto"
            }}>

                <Grid>
                    <Typography level="h2" fontWeight={"sm"}
                                sx={{
                                    textAlign: "center",
                                    cursor: "default",
                                }}>Take your time to reach us</Typography>


                </Grid>

                <Grid>
                    <Button size={"lg"} sx={{
                        backgroundColor: (theme)=>theme.palette.text.primary,
                        borderColor: (theme)=>theme.palette.text.primary,
                        color: "common.black",
                        "&:hover":{
                            color: mode||systemMode==="dark"?"common.black":"common.white",
                            backgroundColor: mode||systemMode==="dark"?"common.white":"common.black",

                        }
                    }}>Contact us</Button>
                </Grid>



            </Grid>



        </Container>

    );
}
export default Contact;