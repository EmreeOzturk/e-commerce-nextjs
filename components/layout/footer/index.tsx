import { Group, Stack, Flex } from '@mantine/core'
import Sitemap from './Sitemap'
import Copyright from './Copyright'
import Links from './Links'
import SocialAccounts from './SocialAccounts'
import EmailSubs from './EmailSubs'
import AcceptedPayments from './AcceptedPayments'
const Footer = () => {
    return (
        <Flex p={20} bg={"gray.1"} align='start' min-h={"23rem"} justify='center' gap={40}>
            <Stack justify='space-between' h="100%" w={
                {
                    base: 500, sm: 1200, lg: 1000, xl: 1000
                }
            }>
                <Sitemap />
                <Stack gap={7}>
                    <Copyright />
                    <Links />
                </Stack>
            </Stack>
            <Stack justify='space-between' h="100%" w={
                {
                    base: 500, sm: 500, lg: 600, xl: 700

                }
            } >
                <SocialAccounts />
                <EmailSubs />
                <AcceptedPayments />
            </Stack>
        </Flex>
    )
}

export default Footer