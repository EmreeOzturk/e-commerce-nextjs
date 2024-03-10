import Image from 'next/image'
import React from 'react'
import logo from '../../../public/assets/shoppi.png'
import iconn from '../../../public/assets/logo.png'

type LogoProps = {
    icon?: boolean
}
const Logo: React.FC<LogoProps> = ({
    icon = false
}) => {
    return (
        icon ? <Image src={iconn} alt="Shoppi" width={50} height={50} /> : <Image src={logo} alt="Shoppi" width={200} height={50} />
    )
}

export default Logo