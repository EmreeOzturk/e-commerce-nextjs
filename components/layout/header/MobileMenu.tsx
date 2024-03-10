import { Drawer, Divider, Stack, UnstyledButton, Center, Box, Button, Group } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons-react';

type MobileMenuProps = {
    opened: boolean,
    toggle: () => void
}

export const MobileMenu: React.FC<MobileMenuProps> = (
    {
        opened,
        toggle
    }
) => {
    return (
        <Drawer
            opened={opened}
            onClose={toggle}
            size="100%"
            padding="md"
            title="Navigation"
            hiddenFrom="sm"
            zIndex={1000000}
        >
            <Stack h={`calc(100vh)`} mx="-md">
                <Divider my="sm" />
                <a href="#" >
                    Home
                </a>
                <UnstyledButton >
                    <Center inline>
                        <Box component="span" mr={5}>
                            Features
                        </Box>
                        <IconChevronDown />
                    </Center>
                </UnstyledButton>
                <a href="#" >
                    Learn
                </a>
                <a href="#" >
                    Academy
                </a>
                <Divider my="sm" />
                <Group justify="center" grow pb="xl" px="md">
                    <Button variant="default">Log in</Button>
                    <Button>Sign up</Button>
                </Group>
            </Stack>
        </Drawer>
    )
}
