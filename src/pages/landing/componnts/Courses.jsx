import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { coursesCard } from "./coursesCard";
import Calender from "../../../assets/CalendarBlank.png";
import HourglassHigh from "../../../assets/HourglassHigh.png";
import { CustomButton } from "../../../components/CustomButton";

const Courses = () => {
  return (
    <Box
      p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
      mt="30px"
      fontFamily={"sourceSansPro-rg"}
    >
      <Box
        mb="30px"
        textAlign={"center"}
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay="150"
      >
        <Text fontSize={["30px", "30px", "30px", "40px"]} pb="10px">
          Popular Courses
        </Text>
        <Text
          fontSize={["18px", "18px", "18px", "20px"]}
          maxW={"900px"}
          margin={"auto"}
        >
          These popular courses offer valuable skills and knowledge to thrive in
          the dynamic world of technology and innovation.
        </Text>
      </Box>
      <Flex
        alignItems={"center"}
        gap={"20px"}
        justifyContent={"space-between"}
        flexDir={["column", "column", "column", "row"]}
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay="150"
      >
        {coursesCard.map((course) => {
          return (
            <Box
              key={course?.id}
              border={"1px solid #ECEBFF"}
              borderRadius={"20px"}
              p="20px"
              px="20px"
              w={"fit-content"}
            >
              <Box>
                <Image src={course?.img} w="250px" borderRadius={"20px"} />
              </Box>
              <Text maxW={"250px"} my="10px" fontWeight={"bold"}>
                {course?.title}
              </Text>
              <Text maxW={"250px"}>{course?.text}</Text>
              <Flex
                my="20px"
                justifyContent={"space-between"}
                align={"center"}
                mb="30px"
              >
                <Flex gap={"5px"} alignItems={"center"}>
                  <Image src={Calender} />
                  <Text>{course?.duration}</Text>
                </Flex>

                <Flex gap={"5px"} alignItems={"center"}>
                  <Image src={HourglassHigh} />
                  <Text>{course?.time}</Text>
                </Flex>
              </Flex>
              <CustomButton
                w="full"
                btnText={"Download Syllabus"}
                border={"1px solid #9F9BF5"}
                borderRadius={"10px"}
                bg={"none"}
              />
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

export default Courses;
