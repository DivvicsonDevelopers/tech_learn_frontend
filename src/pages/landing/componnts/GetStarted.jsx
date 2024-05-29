import { Box, Flex, Image, Text } from '@chakra-ui/react'
import line from "../../../assets/line-7.png"
import { getStartedData } from './getStartedData';


const GetStarted = () => {
  return (
    <Box
      p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
      mt="30px"
      fontFamily={"sourceSansPro-rg"}
    >
      <Box mb={["30px"]} textAlign={"center"}>
        <Text fontSize={["25px", "25px", "25px", "40px"]} pb="10px">
          How Can You Get Started?
        </Text>
        <Text
          fontSize={["18px", "18px", "18px", "20px"]}
          maxW={"900px"}
          margin={"auto"}
        >
          We believe in empowering every student with the best learning
          experience. Whether you choose our Regular or Premium program,
          you&apos;ll embark on a transformative tech journey that will set you
          on the path to success.
        </Text>
        <Flex justifyContent={"center"} mt="10px">
          <Image src={line} />
        </Flex>
      </Box>

      <Flex
        justifyContent={"space-between"}
        gap={["20px", "20px", "20px", "40px"]}
        alignItems={"center"}
        flexDir={["column", "column", "column", "row"]}
      >
        {getStartedData.map((datum) => {
          return (
            <Box key={datum?.id}>
              <Box
                w="50px"
                borderRadius={"30px"}
                bg={"#F9F9FF"}
                textAlign={"center"}
              >
                <Text fontSize={"35px"} fontWeight={"bold"}>
                  {datum?.number}
                </Text>
              </Box>
              <Text py="10px" fontWeight={"bold"}>
                {datum?.header}
              </Text>
              <Text maxW={"300px"}>{datum?.body}</Text>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
}

export default GetStarted