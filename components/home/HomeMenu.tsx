import React from 'react'
import { BiCategory } from 'react-icons/bi'
import { menuArray } from '@/data/home'
import { Flex } from '@mantine/core'
const HomeMenu = () => {
    return (
        <Flex direction="column" w="100%"
            style={{
                userSelect: 'none',
            }}
        >
            <Flex gap={10} align="center" justify="center" p={10} fz={16} fw="bolder">
                <BiCategory size={20} />
                Categories
            </Flex>
            {menuArray.map((menu, index) => (
                <Flex key={index} gap={10}
                    className='menu-item'
                    style={{
                        width: '100%',
                        padding: '4px',
                        cursor: 'pointer',
                        borderRadius: '5px',
                        fontWeight: 'bold',
                        fontSize: '14px',
                        margin: 'auto',
                    }}
                >
                    {menu.icon && <menu.icon size={20} />}
                    {menu.name}
                </Flex>
            ))}
        </Flex>
    )
}

export default HomeMenu