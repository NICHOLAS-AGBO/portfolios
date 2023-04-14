import {
    AspectRatio,
    Card,
    CardContent,
    Container,
    Grid,
    IconButton,
    Sheet,
    Stack,
    Typography,
    useColorScheme
} from "@mui/joy";
import colors from "@mui/joy/colors";
import {ArrowOutward} from "@mui/icons-material";
import Image from "next/image";
import c1 from "@/img/black_man_on_laptop.png";
import Link from "next/link";


const Extras = ()=>{
    const {mode, systemMode} = useColorScheme();
    const isDark = (mode||systemMode);

    return(
        <Container maxWidth={"lg"} sx={{py: 16}}>
            <Grid container justifyContent={"space-around"}>
                 <Grid xs={11} md={5.5} lg={5}>
                <Link href={"#"} style={{textDecoration: "none"}}>
                    <Card variant={"outlined"}
                          sx={(theme) => ({
                              transition: 'transform 0.3s, border 0.3s',
                              '&:hover': {
                                  borderColor: theme.vars.palette.primary.outlinedHoverBorder,
                                  transform: 'translateY(-2px)',
                              },
                          })}
                    >

                            <Typography level={"h2"}>
                                Components
                            </Typography>
                            <Typography textColor={colors.grey[600]} level={"body2"}>Beautiful UI components for your project</Typography>

                        <IconButton
                            aria-label="bookmark Bahamas Islands"
                            variant="plain"
                            color="neutral"
                            size="sm"
                            sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem', flexGrow: 0 }}
                        >
                            <ArrowOutward/>
                        </IconButton>

                        <Typography py={3}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Unde aut doloribus in inventore alias, natus quas consequuntur
                            necessitatibus similique voluptatum aliquam, accusamus suscipit.
                            Tempore dolorem sapiente, iste vel voluptatem odio Lorem ipsum dolor sit,
                            amet consectetur adipisicing elit.
                        </Typography>

                        <AspectRatio variant={"outlined"} ratio={10/7}>
                            <Image src={c1} alt={"component image"}/>
                        </AspectRatio>
                        <CardContent>
                        </CardContent>

                    </Card>
                </Link>
                 </Grid>

                 <Grid xs={11} md={5.5} lg={5}>
                <Link href={"#"} style={{textDecoration: "none"}}>
                    <Card variant={"outlined"}
                          sx={(theme) => ({
                              transition: 'transform 0.3s, border 0.3s',
                              '&:hover': {
                                  borderColor: theme.vars.palette.primary.outlinedHoverBorder,
                                  transform: 'translateY(-2px)',
                              },
                          })}
                    >

                            <Typography level={"h2"}>
                                React code for UIs
                            </Typography>
                            <Typography textColor={colors.grey[600]} level={"body2"}>Download and copy UI React code</Typography>

                        <IconButton
                            aria-label="bookmark Bahamas Islands"
                            variant="plain"
                            color="neutral"
                            size="sm"
                            sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem', flexGrow: 0 }}
                        >
                            <ArrowOutward/>
                        </IconButton>

                        <Typography py={3}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Unde aut doloribus in inventore alias, natus quas consequuntur
                            necessitatibus similique voluptatum aliquam, accusamus suscipit.
                            Tempore dolorem sapiente, iste vel voluptatem odio Lorem ipsum dolor sit,
                            amet consectetur adipisicing elit.
                        </Typography>

                        <AspectRatio variant={"outlined"} ratio={10/7}>
                            <Image src={c1} alt={"component image"}/>
                        </AspectRatio>
                        <CardContent>
                        </CardContent>

                    </Card>
                </Link>
                 </Grid>



            </Grid>


        </Container>
    );

};

export default Extras;