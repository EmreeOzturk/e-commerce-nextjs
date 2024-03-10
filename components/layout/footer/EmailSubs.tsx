import { Stack, Title, Input, Group, Button } from '@mantine/core'
import React from 'react'

const EmailSubs = () => {
    return (
        <Stack gap={7}>
            <Title order={5}>
                SIGN UP FOR OUR NEWSLETTER
            </Title>
            <Group gap={0}>
                <Input placeholder="Enter your email address" w={400} />
                <Button  color='shoppi-secondary'>SUBSCRIBE</Button>
            </Group>
            By clicking the SUBSCRIBE button, I agree to receive Shoppi emails and I accept the Privacy Policy.
        </Stack>
    )
}

export default EmailSubs