import { Flex, Text } from "@mantine/core";
import { getIPData } from "@/app/actions";
import HomeSwiper from "@/components/home/HomeSwiper";
import FlashSale from "@/components/home/FlashSale";
import HomeMenu from "@/components/home/HomeMenu";
import HomeHeader from "@/components/home/HomeHeader";
import CountDown from "@/components/home/CountDown";
export default function Home() {
  return (
    <Flex h="100vh" gap={10} direction="column">
      <Flex h="80vh">
        <Flex w="20%" className="section">
          <HomeMenu />
        </Flex>
        <Flex w="80%" gap={10} direction="column">
          <Flex w="100%" h="10vh" gap={10} className="section" align="center" pl={10}>
            <HomeHeader />
          </Flex>
          <Flex gap={10} direction="column" className="section">
            <Flex h="45vh" className="section">
              <HomeSwiper />
            </Flex>
            <Flex h="25vh" className="section">
              <FlashSale />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        bg="#f36527"
        h="10vh" gap={10} className="section" align="center" justify="space-between" p={10}
      >
        <Text
          fw="bolder"
          fz={40}
        >FLASH SALE</Text>
        <CountDown />
      </Flex>
    </Flex>
  )
}
