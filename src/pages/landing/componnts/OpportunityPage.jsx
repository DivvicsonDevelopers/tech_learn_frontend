import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { CustomButton } from "../../../components/CustomButton";
import { TiArrowRight } from "react-icons/ti";
import Clock from "../../../assets/clock.png";
import LimitCircle from "../../../assets/LinitCircle.png";

const OpportunityPage = () => {
  return (
    <Box
      p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
      mt="30px"
      fontFamily={"sourceSansPro-rg"}
    >
      <Flex
        gap={"30px"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexDir={["column", "column", "column", "row"]}
      >
        <Box data-aos="fade-up" data-aos-duration="700" data-aos-delay="150">
          <Box position={"relative"} mb={["70px"]}>
            <Text
              fontSize={["25px", "25px", "25px", "30px"]}
              fontWeight={"bold"}
              pb="20px"
              position={"absolute"}
            >
              Limitless Opportunities
            </Text>
            <Image
              src={LimitCircle}
              position={"absolute"}
              h={["50px", "50px", "50px", "70px"]}
            />
          </Box>
          <Text fontSize={"18px"} maxW={"600px"} pb="70px">
            In the vast realm of tech, there are no boundaries. Dare to dream
            big, and we&apos;ll guide you towards success.
          </Text>
          <CustomButton
            color={"#fff"}
            btnText={"Start Your Journey"}
            rightIcon={<TiArrowRight size={25} />}
            px="50px"
          />
        </Box>
        <Box data-aos="fade-left" data-aos-duration="700" data-aos-delay="150">
          <Image src={Clock} height={["300px", "400px", "400px", "500px"]} />
        </Box>
      </Flex>
    </Box>
  );
};

export default OpportunityPage;
