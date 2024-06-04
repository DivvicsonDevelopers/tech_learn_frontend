import { Badge, Box, Flex, Image, Text } from "@chakra-ui/react";
import Stars from "../../../assets/stars.png";
import CheckCircle from "../../../assets/CheckCircle.png";
import { CustomButton } from "../../../components/CustomButton";
import { TiArrowRight } from "react-icons/ti";
import StandardChecked from "../../../assets/StandardChecked.png"

const Plan = () => {
  return (
    <Box
      p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
      mt="30px"
      fontFamily={"sourceSansPro-rg"}
    >
      <Box mb="30px" textAlign={"center"}   data-aos="fade-up"
      data-aos-duration="700"
      data-aos-delay="150">
        <Text fontSize={["30px", "30px", "30px", "40px"]} pb="10px" maxWidth={"500px"} margin={"0px auto"}>
          Embrace Boundless Learning at a Budget
        </Text>
        <Text
          fontSize={["18px", "18px", "18px", "20px"]}
          maxW={"900px"}
          margin={"auto"}
        >
          Discover affordable pricing options at Divvicson Tech Academy,
          empowering you to unleash your full potential in tech with accessible
          and value-packed learning plans. Enroll now and embark on your
          transformative tech journey.
        </Text>
      </Box>
      <Flex gap={"50px"} flexDir={["column", "column", "column", "row"]}>
        <Box
          borderRadius={"20px"}
          border={"1px solid #D4D2E3"}
          px={"25px"}
          py={"35px"}
          flex={1.5}
          data-aos="fade-right"
          data-aos-duration="700"
          data-aos-delay="150"
        >
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Badge bg={"#ECEBFF"} borderRadius={"20px"} p={"5px"}>
              <Image src={Stars} h={"40px"} />
            </Badge>
            <Text
              p="10px"
              border={"1px solid #D4D2E3"}
              color={"black"}
              variant="outline"
              fontWeight={"bold"}
              borderRadius={"50px"}
            >
              N15,000/Month
            </Text>
          </Flex>
          <Box my={"10px"}>
            <Text fontSize={"25px"} fontWeight={"bold"}>
              Standard Plan
            </Text>
            <Text>
              Our Standard Plan provides access to tech courses. With a monthly
              subscription of 15,000 Naira
            </Text>
          </Box>
          <Box mb="30px">
            <Flex alignItems={"center"} gap={"10px"} mb="5px">
              <Image src={CheckCircle} />
              <Text>Access to Registered Courses</Text>
            </Flex>
            <Flex alignItems={"center"} gap={"10px"} mb="5px">
              <Image src={CheckCircle} />
              <Text>Project Assignments</Text>
            </Flex>
            <Flex alignItems={"center"} gap={"10px"} mb="5px">
              <Image src={CheckCircle} />
              <Text>Advanced Learning Resources</Text>
            </Flex>
            <Flex alignItems={"center"} gap={"10px"} mb="5px">
              <Image src={CheckCircle} />
              <Text>Certificate of Completion</Text>
            </Flex>
          </Box>
          <Flex justifyContent={["center", "center", "center", "start"]}>
            <CustomButton
              color={"#fff"}
              btnText={"Get Started"}
              rightIcon={<TiArrowRight size={25} />}
              bg={"#1A1489"}
              px="50px"
              borderRadius={"15px"}
            />
          </Flex>
        </Box>

        <Box
          borderRadius={"20px"}
          bg={"#080638"}
          px={"25px"}
          py={"35px"}
          flex={2}
          data-aos="fade-left"
          data-aos-duration="700"
          data-aos-delay="150"
        >
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Badge bg={"#ECEBFF"} borderRadius={"20px"} p={"5px"}>
              <Image src={Stars} h={"40px"} />
            </Badge>
            <Text
              p="10px"
              bg={"#ECEBFF"}
              color={"black"}
              variant="outline"
              fontWeight={"bold"}
              borderRadius={"50px"}
            >
              N45,000/Month
            </Text>
          </Flex>
          <Box my={"10px"}>
            <Text fontSize={"25px"} fontWeight={"bold"} color={"#ECEBFF"}>
              Premium Plan
            </Text>
            <Text color={"#9F9BF5"}>
              Our Standard Plan provides access to tech courses. With a monthly
              subscription of 45,000 Naira
            </Text>
          </Box>
          <Flex
            mb="30px"
            color={"#9F9BF5"}
            gap={["20px", "20px", "20px", "100px"]}
          >
            <Flex mb="5px" flexDir={"column"}>
              <Flex alignItems={"center"} gap={"10px"} mb="5px">
                <Image src={StandardChecked} />
                <Text>All Standard Plan Features</Text>
              </Flex>
              <Flex alignItems={"center"} gap={"10px"} mb="5px">
                <Image src={StandardChecked} />
                <Text>Live One-on-One Classes</Text>
              </Flex>
              <Flex alignItems={"center"} gap={"10px"} mb="5px">
                <Image src={StandardChecked} />
                <Text>Personalized Learning Path</Text>
              </Flex>
              <Flex alignItems={"center"} gap={"10px"} mb="5px">
                <Image src={StandardChecked} />
                <Text>Advanced Project Portfolio</Text>
              </Flex>
            </Flex>

            <Flex mb="5px" flexDir={"column"}>
              <Flex alignItems={"center"} gap={"10px"} mb="5px">
                <Image src={StandardChecked} />
                <Text>Internship Placement</Text>
              </Flex>
              <Flex alignItems={"center"} gap={"10px"} mb="5px">
                <Image src={StandardChecked} />
                <Text>Portfolio Reviews</Text>
              </Flex>
              <Flex alignItems={"center"} gap={"10px"} mb="5px">
                <Image src={StandardChecked} />
                <Text>Personalized Feedbacks</Text>
              </Flex>
              <Flex alignItems={"center"} gap={"10px"} mb="5px">
                <Image src={StandardChecked} />
                <Text>Certificate of Completion</Text>
              </Flex>
            </Flex>
          </Flex>

          <Flex justifyContent={["center", "center", "center", "start"]}>
            <CustomButton
              color={"#fff"}
              btnText={"Get Started"}
              rightIcon={<TiArrowRight size={25} />}
              bg={"#1A1489"}
              px="50px"
              borderRadius={"15px"}
            />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};


export default Plan;
