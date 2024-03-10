import '@mantine/core/styles.css';
import '@mantine/spotlight/styles.css';
import type { Metadata } from 'next';
import { Roboto_Slab } from 'next/font/google';
import { ColorSchemeScript } from '@mantine/core';
import AppLayout from '@/components/layout';
import ReduxProvider from '@/context/ReduxProvider';
import AppMantineProvider from '@/context/MantineProvider';
import AuthProvider from '@/context/AuthProvider';

const robotoSlab = Roboto_Slab({ subsets: ['latin'], weight: ['300', '400', '700'] });

export const metadata: Metadata = {
  title: 'E-Commerce Shop',
  description: 'Online shopping made easy',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={robotoSlab.className}>
        <ReduxProvider>
          <AuthProvider >
            <AppMantineProvider
            >
              <AppLayout>
                {children}
              </AppLayout>
            </AppMantineProvider>
          </AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
