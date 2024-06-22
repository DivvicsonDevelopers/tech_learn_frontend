import { Box, Flex, Image, Text } from '@chakra-ui/react'
import Experienced from "../../../assets/Experience.png"
import Diverse  from "../../../assets/Diverse.png"
import Engage from "../../../assets/Engage.png"


const Works = () => {
  return (
    <Box
      p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
      mt="30px"
      fontFamily={"sourceSansPro-rg"}
    >
      <Box mb="30px" textAlign={"center"}   data-aos="fade-up"
      data-aos-duration="700"
      data-aos-delay="150">
        <Text fontSize={["25px", "25px", "25px", "40px"]} pb="10px">
          Why Intellio Works
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
      </Box>
      <Flex
        justifyContent={"center"}
        gap={"50px"}
        alignItems={"center"}
        mt="70px"
        flexDir={["column", "column", "column", "row"]}
      >
        <Box   data-aos="fade-left"
      data-aos-duration="700"
      data-aos-delay="150">
          <Image
            src={Experienced}
            width={"500px"}
            h={["400px", "400px", "400px", "500px"]}
          />
        </Box>
        <Flex flexDir={"column"} gap={"20px"}   data-aos="fade-left"
      data-aos-duration="700"
      data-aos-delay="150">
          <Image src={Engage} />
          <Image src={Diverse} />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Works