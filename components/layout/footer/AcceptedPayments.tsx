import { Group, Stack, Title } from '@mantine/core'
import { paymentMethods } from '@/consts'
const AcceptedPayments = () => {
    return (
        <Stack gap={7}>
            <Title order={5} fz={"md"}>
                PAYMENT METHODS
            </Title>
            <Group>
                {
                    paymentMethods.map((method) => {
                        return (
                            <Group c={method.brandColor} key={method.label} >
                                {method.icon}
                            </Group>
                        )
                    })
                }
            </Group>
        </Stack>
    )
}

export default AcceptedPayments