"use client"
import { Carousel, CarouselSlide } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { useRef } from 'react';
const HomeSwiper = () => {
    const autoplay = useRef(Autoplay({ delay: 4000 }));

    return (
        <Carousel
            h="45vh"
            plugins={[autoplay.current]} loop withIndicators w="100%" pos="relative" controlSize="40px" c="white"
            styles={{
                control: {
                    backgroundColor: 'rgb(255, 255, 255)',
                    color: 'black',
                },
                indicator: {
                    transition: 'all 0.3s ease',
                    padding: '5px',
                    backgroundColor: 'white',
                    width: '20px',
                },
            }}
            style={{
                borderRadius: '10px',
                overflow: 'hidden',
            }}
        >
            {
                Array.from(Array(10).keys()).map((_, index) => (
                    <CarouselSlide
                        className='indicator' key={index} pos="relative" h="45vh">
                        <Image
                            src={`/home-swiper/${index + 1}.jpg`}
                            alt="Random Image"
                            fill
                            style={{
                                borderRadius: '10px',
                                overflow: 'hidden',
                            }}
                        />
                    </CarouselSlide>
                ))
            }
        </Carousel >
    )
}

export default HomeSwiper