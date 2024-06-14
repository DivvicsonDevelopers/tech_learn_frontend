import { Box, Flex, Image, Text } from "@chakra-ui/react";
import journey from "../../../assets/journey.png";
import books from "../../../assets/book.svg";
import buld from "../../../assets/light-bulb.svg";
import education from "../../../assets/education.svg";
import calendar from "../../../assets/calendar.svg";
import portfolio from "../../../assets/portfolio.svg";
import profit from "../../../assets/profit-growth.svg";
import reload from "../../../assets/reload.svg";
import { CustomButton } from "../../../components/CustomButton";
import { TiArrowRight } from "react-icons/ti";

const Journey = () => {
  return (
    <Box
      p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
      mt="30px"
      fontFamily={"sourceSansPro-rg"}
    >
      <Flex
        gap={["20px", "20px", "20px", "50px"]}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexDir={["column", "column", "column", "row"]}
      >
        <Box data-aos="fade-right" data-aos-duration="700" data-aos-delay="150">
          <Image src={journey} height={["400px", "400px", "400px", "500px"]} />
        </Box>
        <Box data-aos="fade-up" data-aos-duration="700" data-aos-delay="150">
          <Text fontSize={["25px", "25px", "25px", "40px"]}>
            Your Journey At Divvicson: What to Expect.
          </Text>
          <Text fontSize={"18px"} py="20px">
            As you embark on this journey, we have exciting things in store for
            you!
          </Text>
          <Box fontSize={"18px"} mb={"50px"}>
            <Flex gap={"15px"} mb="10px" alignItems={"center"}>
              <Box p={"10px"} borderRadius={"30px"} bg={"#F9F9FF"}>
                <Image src={books} />
              </Box>
              <Text>Comprehensive Curriculum with Real-World Relevance</Text>
            </Flex>
            <Flex gap={"15px"} mb="10px" alignItems={"center"}>
              <Box p={"10px"} borderRadius={"30px"} bg={"#F9F9FF"}>
                <Image src={buld} />
              </Box>
              <Text>Engaging Learning Experience</Text>
            </Flex>
            <Flex gap={"15px"} mb="10px" alignItems={"center"}>
              <Box p={"10px"} borderRadius={"30px"} bg={"#F9F9FF"}>
                <Image src={education} />
              </Box>

              <Text>Expert Instructors </Text>
            </Flex>
            <Flex gap={"15px"} mb="10px" alignItems={"center"}>
              <Box p={"10px"} borderRadius={"30px"} bg={"#F9F9FF"}>
                <Image src={calendar} />
              </Box>

              <Text>Flexible Learning Options </Text>
            </Flex>
            <Flex gap={"15px"} mb="10px" alignItems={"center"}>
              <Box p={"10px"} borderRadius={"30px"} bg={"#F9F9FF"}>
                <Image src={portfolio} />
              </Box>

              <Text>Practical Projects and Career Support </Text>
            </Flex>
            <Flex gap={"15px"} mb="10px" alignItems={"center"}>
              <Box p={"10px"} borderRadius={"30px"} bg={"#F9F9FF"}>
                <Image src={profit} />
              </Box>

              <Text>Personalized Progress Tracking</Text>
            </Flex>
            <Flex gap={"10px"} mb="10px" alignItems={"center"}>
              <Box p={"10px"} borderRadius={"30px"} bg={"#F9F9FF"}>
                <Image src={reload} />
              </Box>

              <Text>Lifetime Learning </Text>
            </Flex>
          </Box>
          <CustomButton
            btnText={"Enroll Today"}
            rightIcon={<TiArrowRight size={25} />}
            
            color={"#fff"}
            px={"50px"}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Journey;
