"use client"
import { Group, ActionIcon, Tooltip, Indicator, rem } from '@mantine/core';
import { Spotlight, spotlight } from '@mantine/spotlight';
import { IconSearch } from '@tabler/icons-react';
import { headerRightMenu, spotlightActionData } from "@/consts"
import Image from 'next/image'
import { HeaderRightSideProps } from '@/prop-types';
import AccountDropdown from './AccountDropdown';


const HeaderRightSide: React.FC<HeaderRightSideProps> = ({
    setShowAccountDropdown,
    showAccountDropdown,
    sessionData
}) => {
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
            <AccountDropdown
                showAccountDropdown={showAccountDropdown}
                setShowAccountDropdown={setShowAccountDropdown}
                sessionData={sessionData}
            />
            {/* <ReactCountryFlag countryCode="TR"
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                style={{
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                }}
                title="US" /> */}
            <Spotlight
                actions={spotlightActionData}
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