import React from 'react'
import { Group, Stack, BackgroundImage } from '@mantine/core'
import Link from 'next/link'
import Logo from '@/components/common/logo'
const SignupPage = () => {
    return (
        <Group gap="0" h="100dvh">
            <Stack align='center' h="100%" w="55%">
                <Group p={20} justify='space-around' w="100%" >
                    <Logo />
                    <Link style={{
                        textDecoration: 'none',
                        color: 'black',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                    }}
                        href="/signin">
                        Create an account
                    </Link>
                </Group>
                <Stack>
                    <h1>Welcome Back</h1>
                    <p>Enter your personal details</p>
                </Stack>
            </Stack>
            <Stack align='center' h="100%" w="45%" bg={"blue"}>
                <BackgroundImage h="100%" bgp={"center"} bgsz={"contain"} src='/assets/sign-up-bg.jpg'>
                    <h1>Sign up</h1>
                </BackgroundImage>
            </Stack>
        </Group>
    )
}

export default SignupPage