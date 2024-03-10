import { Group } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

const Links = () => {
    return (
        <Group  fz={
            {
                base: "sm",
                md: "xs",
                lg: "sm"
            }
        }>
            <Link href="/">Privacy Center</Link>
            <Link href="/">Privacy & Cookie Policy</Link>
            <Link href="/">Manage Cookies</Link>
            <Link href="/">Terms & Conditions</Link>
            <Link href="/">Copyright Notice</Link>
        </Group>
    )
}

export default Links