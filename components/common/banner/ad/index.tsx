import React from 'react'
import Link from 'next/link'
import { BackgroundImage } from '@mantine/core'
const AdBanner = () => {
    return (
        <Link href="/browse">
            <BackgroundImage
                w="100%"
                h={55}
                src="/assets/banner.avif"
                bgr={"no-repeat"}
                bgsz={"cover"}
                bgp={"40% 60%"}
                mx={"auto"}
            >
            </BackgroundImage>
        </Link>
    )
}

export default AdBanner