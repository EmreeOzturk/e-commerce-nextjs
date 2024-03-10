"use client"
import React from 'react'
import { Group, ActionIcon, Tooltip, Text, Indicator, rem } from '@mantine/core';
import { Spotlight, SpotlightActionData, spotlight } from '@mantine/spotlight';
import { IconSearch } from '@tabler/icons-react';
import ReactCountryFlag from 'react-country-flag';
import { headerRightMenu } from "@/consts"
import { useAppSelector } from '@/hooks/useAppSelector';
import { getIPData } from '@/app/actions';
import Image from 'next/image'
import { HeaderRightSideProps } from '@/prop-types';


const actions: SpotlightActionData[] = Array(3000)
    .fill(0)
    .map((_, index) => ({
        id: `item-${index}`,
        label: `Item ${index}`,
        description: `Item ${index} description`,
    }));
const HeaderRightSide: React.FC<HeaderRightSideProps> = ({
    setShowAccountDropdown,
    showAccountDropdown,
    sessionData
}) => {
    const ipData = getIPData();
    const isLoggedIn = !!sessionData
    return (
        <Group gap="lg" justify='center'>
            {
                headerRightMenu.map((item, index) => {
                    if (item.label === 'Account') {
                        return <ActionIcon w={"auto"} onClick={() => setShowAccountDropdown(!showAccountDropdown)} pos="relative" variant={"transparent"} key={index} >
                            {isLoggedIn ? <Image key={index} src={sessionData?.user?.image as string} alt='avatar' width={22} height={22} /> : item.icon}
                        </ActionIcon>

                    }
                    if (item.label === 'Cart') {
                        return (
                            <ActionIcon w={"auto"} key={index} pos={"relative"} aria-label={item.label} variant={"transparent"}>
                                <Indicator label={0} size={14} variant="dot" color="red" >
                                    {item.icon}
                                </Indicator>
                            </ActionIcon>)
                    }
                    if (item.label === 'Search') {
                        return (
                            <ActionIcon w={"auto"} onClick={spotlight.open} key={index} pos={"relative"} aria-label={item.label} variant={"transparent"}  >
                                {item.icon}
                            </ActionIcon>)
                    }
                    return (
                        <Tooltip key={index} fz={12} label={item.label} position="bottom" withArrow openDelay={500} >
                            <ActionIcon w={"auto"} variant='transparent' aria-label={item.label}>
                                {item.icon}
                            </ActionIcon>   
                        </Tooltip>
                    )
                })
            }
            <ReactCountryFlag countryCode="TR"
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                style={{
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                }}
                title="US" />
            <Spotlight
                actions={actions}
                nothingFound="Nothing found..."
                highlightQuery
                limit={4}
                searchProps={{
                    leftSection: <IconSearch style={{ width: rem(20), height: rem(20) }} stroke={1.5} />,
                    placeholder: 'Search...',
                }}
            />
        </Group>
    )
}

export default HeaderRightSide