'use client';

import { deepmerge } from '@mui/utils';
import colors from '@mui/joy/colors';
import {
    extendTheme as extendJoyTheme,
    CssVarsProvider, getInitColorSchemeScript,
} from '@mui/joy/styles';
import {FC, ReactNode, useEffect} from "react";
import {Box, CssBaseline, useColorScheme} from "@mui/joy";
import {
    experimental_extendTheme as extendMuiTheme,
} from '@mui/material/styles';
import {DefaultColorScheme, ExtendedColorScheme} from "@mui/joy/styles/types";

const { unstable_sxConfig: muiSxConfig, ...muiTheme } = extendMuiTheme({
    cssVarPrefix: 'mui-joy',
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: colors.blue[400],
                },
                grey: colors.grey,
                secondary:{
                    main: "#e6990c"
                }
            },
        },
        dark: {
            palette: {
                primary: {
                    main: colors.blue[500],
                },
                grey: colors.grey,
                secondary:{
                    main: "#ff8d00"
                }
            },
        },
    },
});

const { unstable_sxConfig: joySxConfig, ...joyTheme } = extendJoyTheme();

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
mergedTheme.generateCssVars = (colorScheme?:(DefaultColorScheme|ExtendedColorScheme)) => ({
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
    const {mode, systemMode} = useColorScheme();
    useEffect(() => {
        if (mode||systemMode==="dark")
            document.body.style.background = colors.grey[800];
        else document.body.style.background = "#fff";

    }, [systemMode, mode]);

   return <Box sx={{background: (theme)=>( mode||systemMode==="dark"? colors.grey[800]:theme.palette.common.white )}}>
        {children}
    </Box>
}


export default function UI ({children}:{children:ReactNode}){
    return <CssVarsProvider theme={mergedTheme} defaultMode="system" disableNestedContext>
        <CssBaseline/>
        {getInitColorSchemeScript({defaultMode: "system"})}
        <UIBody>
            {children}
        </UIBody>
    </CssVarsProvider>
}
