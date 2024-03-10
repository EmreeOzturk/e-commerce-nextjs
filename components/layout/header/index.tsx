"use client"
import { useDisclosure } from '@mantine/hooks';
import { Burger, Grid, Group, Stack } from '@mantine/core';
import AdBanner from '@/components/common/banner/ad';
import HeaderRightSide from './HeaderRightSide';
import Logo from '@/components/common/logo';
import HeaderLeftSide from './HeaderLeftSide';
import { MobileMenu } from './MobileMenu';
import AccountDropdown from './AccountDropdown';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
const Header = () => {
    const [opened, { toggle }] = useDisclosure();
    const [showAccountDropdown, setShowAccountDropdown] = useState(false);
    const { data: session } = useSession();
    return (
        <>
            <AdBanner />
            <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
            {showAccountDropdown &&
                <AccountDropdown
                    showAccountDropdown={showAccountDropdown}
                    setShowAccountDropdown={setShowAccountDropdown}
                    sessionData={session}
                />}
            <Group pos={"relative"} align='center' px={0} h={100}>
                <Stack hiddenFrom='md' >
                    asdasdasdas
                </Stack>
                <Grid grow w="100%" align='center' justify='center'>
                    <Grid.Col span={4} visibleFrom='md' >
                        <HeaderLeftSide />
                    </Grid.Col>
                    <Grid.Col span={"auto"} visibleFrom='md' >
                        <Logo />
                    </Grid.Col>
                    <Grid.Col span={3.5} >
                        <HeaderRightSide
                            sessionData={session}
                            showAccountDropdown={showAccountDropdown}
                            setShowAccountDropdown={setShowAccountDropdown}
                        />
                    </Grid.Col>
                </Grid>
            </Group>
            <MobileMenu opened={opened} toggle={toggle} />
        </>
    )
}

export default Header