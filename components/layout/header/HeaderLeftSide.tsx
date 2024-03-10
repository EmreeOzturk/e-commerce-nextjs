import { Button, Group } from '@mantine/core'
import React from 'react'

const HeaderLeftSide = () => {
    return (
        <Group justify='center' gap="0" >
            {
                ['Home', 'About', 'Contact', 'Shop'].map((item, index) => (
                    <Button key={index} variant="subtle" >
                        {item}
                    </Button>
                ))
            }
        </Group>
    )
}

export default HeaderLeftSide