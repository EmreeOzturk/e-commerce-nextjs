"use client"
import { MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({
    fontFamily: 'Inknut Antiqua Regular, serif',
    primaryColor: 'shoppi-primary',
    colors: {
        'shoppi-primary': [
            '#38302E',
            '#433A37',
            '#4E4340',
            '#594D49',
            '#645652',
            '#6F605B',
            '#7D706B',
            '#8C807C',
            '#9A908C',
            '#A9A09D',
            '#B7B0AD',
        ],
        'shoppi-secondary': [
            '#7A3314',
            '#923D17',
            '#AA471B',
            '#C2511F',
            '#DB5B23',
            '#F36527',
            '#F4743D',
            '#F58452',
            '#F79368',
            '#F8A37D',
            '#F9B293',
        ],
    }
});
const AppMantineProvider = (
    {
        children
    }: {
        children: React.ReactNode
    }
) => {
    return (
        <MantineProvider
            theme={theme}
            defaultColorScheme='light'
        >
            {children}
        </MantineProvider >
    )
}

export default AppMantineProvider