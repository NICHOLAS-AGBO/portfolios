'use client';

import {createTheme, NextUIProvider} from "@nextui-org/react";
import {ReactNode} from "react";
import {ThemeProvider} from "next-themes";
import 'boxicons';



export default function UI ({children}:{children:ReactNode}){

    const lightTheme = createTheme({
        type: 'light',
        theme: {
            colors: {
                primary: "$pink400",
                secondary: "$yellow600",
            },
        }
    })

    const darkTheme = createTheme({
        type: 'dark',
        theme: {
            colors: {
                primary: "$blue700",
                secondary: "$yellow600"
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