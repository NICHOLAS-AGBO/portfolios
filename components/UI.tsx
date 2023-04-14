import { deepmerge } from '@mui/utils';
import {
    experimental_extendTheme as extendMuiTheme,
} from '@mui/material/styles';
import colors from '@mui/joy/colors';
import {
    extendTheme as extendJoyTheme,
    CssVarsProvider, getInitColorSchemeScript,
} from '@mui/joy/styles';
import {FC, ReactNode, useLayoutEffect} from "react";
import {Box, CssBaseline, useColorScheme} from "@mui/joy";

const { unstable_sxConfig: muiSxConfig, ...muiTheme } = extendMuiTheme({

    cssVarPrefix: 'mui-joy',
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: colors.blue[600],
                },
                secondary:{
                    main: "#ff8c00"
                },
                grey: colors.grey,
                error: {
                    main: colors.red[500],
                },
                info: {
                    main: colors.purple[500],
                },
                success: {
                    main: colors.green[500],
                },
                warning: {
                    main: colors.yellow[200],
                },
                common: {
                    white: '#FFF',
                    black: '#09090D',
                },
                divider: colors.grey[200],
                text: {
                    primary: colors.grey[800],
                    secondary: colors.grey[600],
                },
                body: {
                    main: "#fff"
                }
            },
        },
        dark: {
            palette: {
                primary: {
                    main: colors.blue[500],
                },
                secondary:{
                    main: "#ec9f12"
                },
                grey: colors.grey,
                error: {
                    main: colors.red[600],
                },
                info: {
                    main: colors.purple[600],
                },
                success: {
                    main: colors.green[600],
                },
                warning: {
                    main: colors.yellow[300],
                },
                common: {
                    white: '#FFF',
                    black: '#09090D',
                },
                divider: colors.grey[800],
                text: {
                    primary: colors.grey[100],
                    secondary: colors.grey[300],
                },
                 body:{
                    main: "#25252D"
                 }
            },
        },
    },
});

const { unstable_sxConfig: joySxConfig, ...joyTheme } = extendJoyTheme({cssVarPrefix: "mui-joy"});

const mergedTheme = ({
    ...muiTheme,
    ...joyTheme,
    colorSchemes: deepmerge(muiTheme.colorSchemes, joyTheme.colorSchemes),
    typography: {
        ...muiTheme.typography,
        ...joyTheme.typography
    }
} as unknown) as ReturnType<typeof extendJoyTheme>;


//@ts-ignore
mergedTheme.generateCssVars = (colorScheme) => ({
    css: {
        ...muiTheme.generateCssVars(colorScheme).css,
        ...joyTheme.generateCssVars(colorScheme).css
    },
    vars: deepmerge(
        muiTheme.generateCssVars(colorScheme).vars,
        joyTheme.generateCssVars(colorScheme).vars
    )
});

mergedTheme.unstable_sxConfig = {
    ...muiSxConfig,
    ...joySxConfig
};

const UIBody:FC<{children:ReactNode}> = ({children})=>{
    const {mode,systemMode} = useColorScheme();

    useLayoutEffect(() => {
        if ((mode||systemMode)==="dark")
            document.body.style.background = "#25252d";
        else document.body.style.background = "#fff";

    },[mode, systemMode]);

    return <Box sx={{backgroundColor: "body.main"}}>{children}</Box>
}

const UI = ({children}:{children:ReactNode})=>{
    return <CssVarsProvider theme={mergedTheme} defaultMode="system" disableNestedContext>
        <CssBaseline/>
        {getInitColorSchemeScript({defaultMode: "system"})}
        <UIBody>
            {children}
        </UIBody>
    </CssVarsProvider>
}


export default UI;
