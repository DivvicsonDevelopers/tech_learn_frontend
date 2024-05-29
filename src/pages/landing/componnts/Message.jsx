import { Box, Flex, Text } from '@chakra-ui/react'


const Message = () => {
  return (
    <Box
      p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
      mt="30px"
      fontFamily={"sourceSansPro-rg"}
    >
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={["20px", "20px", "20px", "0px"]}
        flexDir={["column", "column", "column", "row"]}
      >
        <Box
          w={["300px", "300px", "300px", "500px"]}
          h={["300px"]}
          bg={"red"}
        ></Box>

        <Box>
          <Text fontSize={"30px"} fontWeight={"500"} pb="30px">
            A Personal Message From Our CEO
          </Text>
          <Text maxW={"600px"}>
            Join us in this exclusive video where our CEO shares insights into
            our Divvicson’s journey, values, and unwavering dedication to
            delivering excellence. Gain a deeper understanding of our mission
            and vision as we pave the path for a brighter future together.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default Message