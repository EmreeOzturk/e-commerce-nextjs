"use client"
import { Carousel, CarouselSlide } from '@mantine/carousel'
import { Flex } from '@mantine/core'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { useRef } from 'react'
import { offersArray } from '@/data/home'
const FlashSale = () => {
    const autoplay = useRef(Autoplay({ delay: 2000 }))
    return (
        <Flex
            className='flashSale'
            w="100%"
            align="center"
            justify="center"
            h="25vh"
            style={{
                borderRadius: '10px',
                overflow: 'hidden',
            }}
        >
            <Carousel
                slideSize="25%"
                slideGap="5px"
                plugins={[autoplay.current]}
                loop
                ml="auto"
                w="100%"
                pos="relative"
                withControls={false}
                align="start"
            >
                {
                    offersArray.map((offer, index) => (
                        <CarouselSlide key={index} pos="relative" >
                            <Flex direction="column" pos="relative" h="25vh"
                            >
                                <Image
                                    style={{ borderRadius: "20px", padding: "5px" }}
                                    src={offer.image}
                                    alt={"Random Image"}
                                    fill
                                />
                                <Flex pos="absolute"
                                    right="0px"
                                    h="40px"
                                    w="40px"
                                    bg="red"
                                    c="white"
                                    align="center"
                                    justify="center"
                                    style={{ borderRadius: "50%" }}
                                >
                                    {offer.discount}%
                                </Flex>
                                <Flex
                                    pos="absolute"
                                    bottom="15px"
                                    h="20px"
                                    w="140px"
                                    left="80px"
                                    bg="yellow"
                                    c="white"
                                    align="center"
                                    justify="center"
                                    style={{ borderRadius: "5px" }}
                                >
                                    {offer.price}$
                                </Flex>
                            </Flex>
                        </CarouselSlide>
                    ))
                }
            </Carousel >
        </Flex>
    )
}

export default FlashSale