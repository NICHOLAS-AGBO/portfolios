"use client";

import { deepmerge } from '@mui/utils';
import {
    experimental_extendTheme as extendMuiTheme,
} from '@mui/material/styles';
import colors from '@mui/joy/colors';
import {
    extendTheme as extendJoyTheme,
    CssVarsProvider, getInitColorSchemeScript,
} from '@mui/joy/styles';
import {FC, ReactNode, useEffect} from "react";
<<<<<<< HEAD:app/components/UI.tsx
import {Box, CssBaseline, useColorScheme} from "@mui/joy";
=======
import {CssBaseline, useColorScheme} from "@mui/joy";
import {
    experimental_extendTheme as extendMuiTheme,
} from '@mui/material/styles';
import {DefaultColorScheme, ExtendedColorScheme} from "@mui/joy/styles/types";
>>>>>>> 73b91e0c617e3bc18ace378cc6b8285217bf21ec:components/UI.tsx

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


mergedTheme.generateCssVars = (colorScheme) => ({
    css: {
        ...muiTheme.generateCssVars(colorScheme).css,
        ...joyTheme.generateCssVars(colorScheme).css
    },
    //@ts-ignore
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

    return <>
        {children}
    </>
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
