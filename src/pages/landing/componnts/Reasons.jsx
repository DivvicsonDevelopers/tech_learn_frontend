import { Box, Flex, Text } from "@chakra-ui/react";
import { reasonCards } from "./reasonCards";
import { CustomButton } from "../../../components/CustomButton";

const Reasons = () => {
  return (
    <Box
      fontFamily={"sourceSansPro-rg"}
      mt="30px"
      p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
      textAlign={"center"}
    >
      <Box mb="30px">
        <Text fontSize={["30px", "30px", "30px", "40px"]} pb="10px">
          Not sure why you’re here?
        </Text>
        <Text
          fontSize={["18px", "18px", "18px", "20px"]}
          maxW={"900px"}
          margin={"auto"}
        >
          If you’ve found yourself on this page and you’re unsure about what
          steps to take , don’t worry- you’re not alone. Below are options to
          help you out while you’re here.
        </Text>
      </Box>
      <Flex
        gap={"30px"}
        flexDir={["column", "column", "column", "row"]}
        alignItems={"center"}
      >
        {reasonCards.map((card) => {
          return (
            <Flex key={card?.id}>
              <Box
                border={"1px solid #ECEBFF"}
                padding={"20px"}
                borderRadius={"20px"}
              >
                <Text
                  fontSize={["25px", "25px", "25px", "30px"]}
                  fontWeight={"bold"}
                  mt={"30px"}
                >
                  {card?.title}
                </Text>
                <Text fontSize={"18px"} pt={"20px"}>
                  {card?.text}
                </Text>
                <CustomButton
                  my="30px"
                  px={"50px"}
                  color={"#fff"}
                  btnText={
                    card?.title === "Explore Our Popular Courses"
                      ? "Discover Courses"
                      : card?.title === "Unlock Personalized Tutoring"
                      ? "Start Learning Today"
                      : "Explore Now"
                  }
                  bg={"#1A1489"}
                />
              </Box>
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
};

export default Reasons;
