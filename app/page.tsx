import { Flex, Text } from "@mantine/core";
import { getIPData } from "@/app/actions";
export default async function Home() {
  const data = await getIPData();
  return <Flex h={"100vh"} justify="center" direction={"column"} >
  </Flex>;
}
