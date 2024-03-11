import { Group, Stack, Collapse, Text, Button } from '@mantine/core'
import { Session } from 'next-auth'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { signOut } from 'next-auth/react';

type AccountDropdownProps = {
    showAccountDropdown: boolean
    setShowAccountDropdown: (prev: boolean) => void
    sessionData: Session | null | undefined
}
const AccountDropdown: React.FC<AccountDropdownProps> = ({
    showAccountDropdown,
    setShowAccountDropdown,
    sessionData
}) => {
    return (
        <Collapse py={15} transitionDuration={1000} in={showAccountDropdown} pos={"absolute"} top={"80%"} right={"20%"} w={"220px"}
            translate='yes' onMouseLeave={() => setShowAccountDropdown(false)}
            style={{
                boxShadow: "0px 0px 2px 0px rgba(40,40,40,0.35)",
                borderRadius: "3px",
                zIndex: 9999,
                backgroundColor: "#fff"
            }}
        >
            {
                sessionData ? (
                    <Stack p={0} gap={10}>
                        <Stack align="start" gap={10}>
                            <Group p={15} align='center' gap={5}>
                                <Image src={sessionData?.user?.image!} alt='avatar' width={72} height={72} />
                                <Stack align='start' gap={2} >
                                    <Text>Welcome Back</Text>
                                    <Text>
                                        {sessionData?.user?.name}
                                    </Text>
                                    <Button onClick={() => signOut()}  >Sign Out</Button>
                                </Stack>
                            </Group>
                            <Stack mt={15} gap={15} w="100%">
                                {["Account", "My Orders", "Message Center", "Address", "Whishlist"].map((item, index) => {
                                    return (<Link
                                        onMouseEnter={(e: any) => {
                                            e.target.style.backgroundColor = "#ddd"
                                        }}
                                        onMouseLeave={(e: any) => {
                                            e.target.style.backgroundColor = "#fff"
                                        }}
                                        href='/' key={index}
                                        style={{
                                            textDecoration: "none",
                                            width: "100%",
                                        }}
                                    >
                                        <Text c="shoppi-primary" pl={15}>{item}</Text>
                                    </Link>)
                                })}
                            </Stack>
                        </Stack>
                    </Stack>
                ) :
                    (
                        <Stack align='center' justify='center' w={"100%"}>
                            <Button component='a' href='/signup' w={"60%"} variant='filled' color='shoppi-secondary'>
                                Login
                            </Button>
                            <Button w={"60%"} component='a' href='/signup' variant='outline' color='shoppi-secondary'>
                                Sign Up
                            </Button>
                        </Stack>
                    )
            }
        </Collapse >
    )
}

export default AccountDropdown