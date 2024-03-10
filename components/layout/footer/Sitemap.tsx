import { Group, Stack, Title, Text } from '@mantine/core'
import Image from 'next/image'

const Sitemap = () => {
    return (
        <Group align='start' gap={50} >
            <Stack align='start' gap={3}>
                <Image src={"/assets/shoppi.png"} alt='logo' width={160} height={40} />
                <Text fz={14} component='a' href='/'>About Us</Text>
                <Text fz={14} component='a' href='/'>Contact Us</Text>
                <Text fz={14} component='a' href='/'>Social Responsibility</Text>
            </Stack>
            <Stack align='start' gap={3}>
                <Title order={3} fz={"md"}> HELP & SUPPORT</Title>
                <Text fz={14} component='a' href='/'>Shipping Info</Text>
                <Text fz={14} component='a' href='/'>Returns</Text>
                <Text fz={14} component='a' href='/'>How To Order</Text>
                <Text fz={14} component='a' href='/'>How To Track</Text>
                <Text fz={14} component='a' href='/'>Size Guide</Text>
            </Stack>
            <Stack align='start' gap={3}>
                <Title order={3} fz={"md"}>CUSTOMER SERVICE</Title>
                <Text fz={14} component='a' href='/'>Customer Service</Text>
                <Text fz={14} component='a' href='/'>Terms and Conditions</Text>
                <Text fz={14} component='a' href='/'>Consumers</Text>
                <Text fz={14} component='a' href='/'>Take our feedback survey</Text>
            </Stack>
        </Group>
    )
}

export default Sitemap