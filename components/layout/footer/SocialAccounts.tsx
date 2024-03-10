import { Group, Stack, Title, ActionIcon } from '@mantine/core'
import { socialAccounts } from '@/consts'
const SocialAccounts = () => {
    return (
        <Stack gap={7}>
            <Title order={5}>
                STAY CONNECTED
            </Title>
            <Group>
                {
                    socialAccounts.map((account) => {
                        return (
                            <ActionIcon size={"lg"} key={account.label} variant="subtle" color={account.brandColor} >
                                {account.icon}
                            </ActionIcon>
                        )
                    })
                }
            </Group>
        </Stack>
    )
}

export default SocialAccounts