'use client';

import {createTheme, NextUIProvider} from "@nextui-org/react";
import {ReactNode} from "react";
import {ThemeProvider} from "next-themes";
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false


export default function UI ({children}:{children:ReactNode}){

    const lightTheme = createTheme({
        type: 'light',
        theme: {
            colors: {
                primary: "$blue600",
                primaryLight: "$blue600",
                primaryDark: "$blue800",
                secondary: "#ff8100",
                secondaryLight: "#ff8100",
                secondaryDark: "$yellow500",
                gradient: "linear-gradient(112deg, $blue600 -50.59%, #ff8100 -20.3%, $blue600 50.46%)"
            },
        }
    })

    const darkTheme = createTheme({
        type: 'dark',
        theme: {
            colors: {
                primary: "$blue600",
                primaryLight: "$blue600",
                primaryDark: "$blue800",
                secondary: "#ff8100",
                secondaryLight: "#ff8100",
                secondaryDark: "$yellow500",
                gradient: "linear-gradient(112deg, $blue600 -63.59%, #ff8100 -20.3%, $blue600 70.46%)"
            },
        }
    })

    return <ThemeProvider
        defaultTheme={"system"}
        attribute={"class"}
        storageKey={"theme"}
        value={{
            light: lightTheme.className,
            dark: darkTheme.className
        }}
    >
        <NextUIProvider>
                {children}
        </NextUIProvider>
    </ThemeProvider>
}