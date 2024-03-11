"use client"
import Image from 'next/image'
import React from 'react'
import logo from '../../../public/assets/shoppi.png'
import iconn from '../../../public/assets/logo.png'
import { useRouter } from 'next/navigation'
type LogoProps = {
    icon?: boolean
}
const Logo: React.FC<LogoProps> = ({
    icon = false
}) => {
    const router = useRouter()
    return (
        icon ? <Image src={iconn} onClick={() => router.push("/")} alt="Shoppi" width={50} height={50} /> : <Image
            onClick={() => router.push("/")}
            src={logo}
            alt="Shoppi"
            width={200}
            height={50}
            style={{
                cursor: "pointer"
            }}
        />
    )
}

export default Logo