import {
    AspectRatio,
    Card,
    CardOverflow,
    Container, Divider,
    Grid,
    IconButton,
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
    const isDark = (mode||systemMode)==="dark";

    return(
        <Container maxWidth={"lg"} sx={{py: 16}}>
            <Grid container justifyContent={"space-around"} spacing={5}>
                <Grid xs={11} md={4}>
                    <Link href={"#"} style={{textDecoration: "none"}}>
                        <Card variant={"outlined"}
                              sx={(theme) => ({
                                  transition: 'transform 0.3s, border 0.3s',
                                  backgroundColor: isDark?"common.black":colors.grey["50"],
                                  '&:hover': {
                                      borderColor: theme.vars.palette.primary.outlinedHoverBorder,
                                      transform: 'translateY(-2px)',
                                  },
                              })}
                        >
                            <CardOverflow variant={"outlined"} ratio={10/7}>
                                <AspectRatio ratio={2}>
                                    <Image src={c1} alt={"component image"}/>
                                </AspectRatio>
                            </CardOverflow>
                            <Typography level={"h3"} mt={1}>
                                Components
                            </Typography>
                            <Typography textColor={colors.grey[600]} level={"body2"}>Beautiful UI components for your project</Typography>

                            <IconButton
                                color="neutral"
                                size="sm"
                                sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem', flexGrow: 0 }}
                            >
                                <ArrowOutward/>
                            </IconButton>
                            <Divider sx={{mt: 1}}/>
                            <Typography py={3}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Unde aut doloribus in inventore alias, natus quas consequuntur
                                necessitatibus similique voluptatum aliquam, accusamus suscipit.
                                Tempore dolorem sapiente, iste vel voluptatem odio Lorem ipsum dolor sit,
                                amet consectetur adipisicing elit.
                            </Typography>

                        </Card>
                    </Link>
                </Grid>

                <Grid xs={11} md={4}>
                    <Link href={"#"} style={{textDecoration: "none"}}>
                        <Card variant={"outlined"}
                              sx={(theme) => ({
                                  transition: 'transform 0.3s, border 0.3s',
                                  backgroundColor: isDark?"common.black":colors.grey["50"],
                                  '&:hover': {
                                      borderColor: theme.vars.palette.primary.outlinedHoverBorder,
                                      transform: 'translateY(-2px)',
                                  },
                              })}
                        >
                            <CardOverflow variant={"outlined"} ratio={10/7}>
                                <AspectRatio ratio={2}>
                                    <Image src={c1} alt={"component image"}/>
                                </AspectRatio>
                            </CardOverflow>
                            <Typography level={"h3"} mt={1}>
                                React code for UIs
                            </Typography>
                            <Typography textColor={colors.grey[600]} level={"body2"}>Download and copy UI React code</Typography>

                            <IconButton
                                color="neutral"
                                size="sm"
                                sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem', flexGrow: 0 }}
                            >
                                <ArrowOutward/>
                            </IconButton>
                            <Divider sx={{mt: 1}}/>
                            <Typography py={3}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Unde aut doloribus in inventore alias, natus quas consequuntur
                                necessitatibus similique voluptatum aliquam, accusamus suscipit.
                                Tempore dolorem sapiente, iste vel voluptatem odio Lorem ipsum dolor sit,
                                amet consectetur adipisicing elit.
                            </Typography>

                        </Card>
                    </Link>
                </Grid>

                <Grid xs={11} md={4}>
                    <Link href={"#"} style={{textDecoration: "none"}}>
                        <Card variant={"outlined"}
                              sx={(theme) => ({
                                  transition: 'transform 0.3s, border 0.3s',
                                  backgroundColor: isDark?"common.black":colors.grey["50"],
                                  '&:hover': {
                                      borderColor: theme.vars.palette.primary.outlinedHoverBorder,
                                      transform: 'translateY(-2px)',
                                  },
                              })}
                        >
                            <CardOverflow variant={"outlined"} ratio={10/7}>
                                <AspectRatio ratio={2}>
                                    <Image src={c1} alt={"component image"}/>
                                </AspectRatio>
                            </CardOverflow>
                            <Typography level={"h3"} mt={1}>
                                Premium templates
                            </Typography>
                            <Typography textColor={colors.grey[600]} level={"body2"}>Purchase web, mobile templates</Typography>

                            <IconButton
                                color="neutral"
                                size="sm"
                                sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem', flexGrow: 0 }}
                            >
                                <ArrowOutward/>
                            </IconButton>
                            <Divider sx={{mt: 1}}/>
                            <Typography py={3}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Unde aut doloribus in inventore alias, natus quas consequuntur
                                necessitatibus similique voluptatum aliquam, accusamus suscipit.
                                Tempore dolorem sapiente, iste vel voluptatem odio Lorem ipsum dolor sit,
                                amet consectetur adipisicing elit.
                            </Typography>

                        </Card>
                    </Link>
                </Grid>

            </Grid>


        </Container>
    );

};

export default Extras;