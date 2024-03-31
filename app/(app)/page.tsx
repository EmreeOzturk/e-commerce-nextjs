import { Flex, Text } from "@mantine/core";
import { getIPData } from "@/app/actions";
import HomeSwiper from "@/components/home/HomeSwiper";
import FlashSale from "@/components/home/FlashSale";
export default async function Home() {
  return (
    <Flex h="80vh" gap={10} >
      <Flex bg={"red"} w="20%">
        Menu
      </Flex>
      <Flex w="80%" gap={10} direction="column">
        <Flex bg="grape" w="100%" h="100px">
          Header
        </Flex>
        <Flex h="100%" gap={10}>
          <Flex w="70%" gap={10} direction="column">
            <Flex h="60%" >
              <HomeSwiper />
            </Flex>
            <Flex h="40%" >
              <FlashSale />
            </Flex>
          </Flex>
          <Flex bg="pink" w="30%">
            User
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
