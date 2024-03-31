"use client"
import { Carousel, CarouselSlide } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { useRef } from 'react';
const HomeSwiper = () => {
    const autoplay = useRef(Autoplay({ delay: 2000 }));

    return (
        <Carousel plugins={[autoplay.current]} loop withIndicators w="100%" h="100%" pos="relative" controlSize="40px" c="white"
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
        >
            {
                Array.from(Array(10).keys()).map((_, index) => (
                    <CarouselSlide className='indicator' key={index} pos="relative" h="330px">
                        <Image
                            src={`/home-swiper/${index + 1}.jpg`}
                            alt="Random Image"
                            fill

                        />
                    </CarouselSlide>
                ))
            }
        </Carousel >
    )
}

export default HomeSwiper