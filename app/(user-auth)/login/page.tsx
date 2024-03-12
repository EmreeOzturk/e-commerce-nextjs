import LoginForm from '@/components/form/LoginForm'
import { Group, Stack, Text, Title, TextInput, Button, Divider } from '@mantine/core'
import { IconChevronLeft, IconMail, IconKey, IconArrowRight, IconBrandGithub, IconBrandTwitter, IconBrandGoogle, IconBrandAuth0 } from '@tabler/icons-react'
import { getProviders } from "next-auth/react"
const LoginPage = async () => {
  const providers = await getProviders()
  console.log(providers)
  return (
    <Stack align='center' justify='start' mt="20px" >
      <Stack>
        <Group >
          <IconChevronLeft style={{
            borderRadius: "50%",
            border: "1px solid #000",
            padding: "5px",
          }} size={32} />
          <Text c="dark.5">We&apos; be happy to join us!</Text>
        </Group>
        <Stack>
          <Title c="gray.8" fz={66} order={1}>Login</Title>
          <Text c="gray.5" fz={16}>
            Enter your personal details and start journey with us
          </Text>
          <LoginForm />
          <Text fz="sm" td="underline" c="gray.6">
            Forgot your password?
          </Text>
          <Divider label="or" labelPosition="center" size={"sm"} />
          {
            Object.values(providers!)?.map((provider) => {
              return (
                <Button
                  key={provider.name}
                  variant="outline"
                  size='md'
                  leftSection={provider.id === "github" ? <IconBrandGithub size={22} /> : provider.id === "twitter" ? <IconBrandTwitter size={22} /> : provider.id === "google" ? <IconBrandGoogle size={22} /> : <IconBrandAuth0 size={22} />}
                >
                  {provider.name}
                </Button>
              )
            })
          }
        </Stack>
      </Stack>
    </Stack >
  )
}

export default LoginPage