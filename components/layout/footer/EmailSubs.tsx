import { Stack, Title, Input, Group, Button, Text } from '@mantine/core'
import React from 'react'

const EmailSubs = () => {
    return (
        <Stack gap={7}>
            <Title order={5} fz={"md"}>
                SIGN UP FOR OUR NEWSLETTER
            </Title>
            <Group gap={0}>
                <Input placeholder="Enter your email address" mr="2px" w={{
                    base: "50%",
                    xs: "100%",
                    sm: "100%",
                    md: "100%",
                    lg: "50%",
                    xl: "50%",
                }} />
                <Button color='shoppi-secondary'>SUBSCRIBE</Button>
            </Group>
            <Text fz={"sm"} >
                By clicking the <b>SUBSCRIBE</b> button, I agree to receive Shoppi emails and I accept the Privacy Policy.
            </Text>
        </Stack>
    )
}

export default EmailSubs