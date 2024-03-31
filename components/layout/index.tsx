"use client"
import { AppShell, Container, rem } from '@mantine/core';
import { usePathname } from 'next/navigation';
import Header from './header';
import Footer from './footer';
export default function AppLayout(
    {
        children
    }: {
        children: React.ReactNode
    }
) {
    const pathname = usePathname();
    return (
        <AppShell
            padding="xl"
            m="auto"
            withBorder={false}
            footer={{
                height: pathname === '/signup' ? 0 : '/login' ? 0 : "auto",
            }}
        >
            {
                pathname === '/signup' ? null :
                    <AppShell.Header>
                        <Header />
                    </AppShell.Header>
            }
            <AppShell.Main
                mt={80}
            >
                <Container miw="90em" >
                    {children}
                </Container>
            </AppShell.Main>
            {
                pathname === '/signup' || pathname === '/login' ? null :
                    <AppShell.Footer
                        style={{
                            position: 'relative',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            zIndex: 60,
                        }}
                    >
                        <Footer />
                    </AppShell.Footer>
            }
        </AppShell >
    );
}