import { Group, Stack } from '@mantine/core'
import Sitemap from './Sitemap'
import Copyright from './Copyright'
import Links from './Links'
import SocialAccounts from './SocialAccounts'
import EmailSubs from './EmailSubs'
import AcceptedPayments from './AcceptedPayments'
const Footer = () => {
    return (
        <Group p={20} bg={"gray.1"} align='center' h={"23rem"} justify='center' gap={40}>
            <Stack justify='space-between' h="100%">
                <Sitemap />
                <Stack gap={7}>
                    <Copyright />
                    <Links />
                </Stack>
            </Stack>
            <Stack justify='space-between' h="100%">
                <SocialAccounts />
                <EmailSubs />
                <AcceptedPayments />
            </Stack>
        </Group>
    )
}

export default Footer