import { Badge, Box, Flex, Image, Text } from "@chakra-ui/react"
import { CustomButton } from "../../../components/CustomButton";
import { TiArrowRight } from "react-icons/ti";
import Stars from "../../../assets/stars.png";
import CheckCircle from "../../../assets/CheckCircle.png";
import StandardChecked from "../../../assets/StandardChecked.png";


const UserPlan = () => {
  return (
    <Box>
      <Flex gap={"50px"} flexDir={["column", "column", "column", "row"]}>
        <Box
          borderRadius={"20px"}
          border={"1px solid #D4D2E3"}
          px={"25px"}
          py={"35px"}
          flex={1.5}
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
            <Flex alignItems={"center"} gap={"10px"} mb="5px">
              <Image src={CheckCircle} />
              <Text>Access to GenZStarsHub(Study Center)</Text>
            </Flex>
          </Box>
          <Flex justifyContent={["center", "center", "center", "start"]}>
            <CustomButton
              color={"#fff"}
              btnText={"Get Started"}
              rightIcon={<TiArrowRight size={25} />}
            
              px="50px"
              borderRadius={"15px"}
            />
          </Flex>
        </Box>

        <Box
          borderRadius={"20px"}
          // bg={"#080638"}
          bgGradient='radial( #05A51F, #023F0C)'
          px={"25px"}
          py={"35px"}
          flex={3}
          color={"#fff"}
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
            <Text fontSize={["20px","20px","20px","25px"]} fontWeight={"bold"} color={"#ECEBFF"}>
              Premium Plan
            </Text>
            <Text>
              Our Standard Plan provides access to tech courses. With a monthly
              subscription of 45,000 Naira
            </Text>
          </Box>


          <Flex
            mb="30px"
            
            gap={["20px", "20px", "20px", "10px"]}
          >
            <Flex mb="5px" flexDir={"column"} >
              <Flex alignItems={"center"} gap={"10px"} mb="5px">
                <Image src={StandardChecked}  h={"20px"}/>
                <Text>All Standard Plan Features</Text>
              </Flex>
              <Flex alignItems={"center"} gap={"10px"} mb="5px">
                <Image src={StandardChecked}  h={"20px"}/>
                <Text>Live One-on-One Classes</Text>
              </Flex>
              <Flex alignItems={"center"} gap={"10px"} mb="5px">
                <Image src={StandardChecked}  h={"20px"}/>
                <Text>Personalized Learning Path</Text>
              </Flex>
              <Flex alignItems={"center"} gap={"10px"} mb="5px">
                <Image src={StandardChecked}  h={"20px"}/>
                <Text>Advanced Project Portfolio</Text>
              </Flex>
              <Flex alignItems={"center"} gap={"10px"} mb="5px">
              <Image src={StandardChecked}  h={"20px"}/>
              <Text>Access to GenZStarsHub(Study Center)</Text>
            </Flex>
            </Flex>

            <Flex mb="5px" flexDir={"column"}>
              <Flex alignItems={"center"} gap={"10px"} mb="5px">
                <Image src={StandardChecked}  h={"20px"}/>
                <Text>Internship Placement</Text>
              </Flex>
              <Flex alignItems={"center"} gap={"10px"} mb="5px">
                <Image src={StandardChecked}  h={"20px"}/>
                <Text>Portfolio Reviews</Text>
              </Flex>
              <Flex alignItems={"center"} gap={"10px"} mb="5px">
                <Image src={StandardChecked}  h={"20px"}/>
                <Text>Personalized Feedbacks</Text>
              </Flex>
              <Flex alignItems={"center"} gap={"10px"} mb="5px">
                <Image src={StandardChecked}  h={"20px"}/>
                <Text>Certificate of Completion</Text>
              </Flex>
              <Flex alignItems={"center"} gap={"10px"} mb="5px">
              <Image src={StandardChecked} h={"20px"}/>
              <Text>3 months paid internship placement</Text>
            </Flex>

            </Flex>
          </Flex>

          <Flex justifyContent={["center", "center", "center", "start"]}>
            <CustomButton
              color={"#05A51F"}
              btnText={"Get Started"}
              rightIcon={<TiArrowRight size={25} />}
              bg={"#fff"}
              px="50px"
              borderRadius={"15px"}
            />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default UserPlan