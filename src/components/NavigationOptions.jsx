/* eslint-disable react/prop-types */
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { TiArrowRight } from "react-icons/ti";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import Web from "../../src/assets/Web.png";
import Design from "../../src/assets/Design.png";
import Management from "../../src/assets/Management.png";

function NavigationOptions({ title }) {
  const [show, setShow] = useState(false);
  let interval = "";

  return (
    <Flex position="relative" zIndex={"999"}>
      <Flex
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => {
          interval = setTimeout(() => {
            setShow(false);
          }, 100);
        }}
        gap="10px"
        alignItems={"center"}
        cursor="pointer"
      >
        <Text color="#202020">{title}</Text>
        <IoIosArrowDown />
      </Flex>

      {show && (
        <Flex
          bg="#fff"
          onMouseEnter={() => {
            clearTimeout(interval);
            console.log("in", interval);

            // setShow(true);
          }}
          onMouseLeave={() => {
            clearTimeout(interval);

            setShow(false);
          }}
          position={"absolute"}
          // p={"30px"}
          left={"-100px"}
          top="40px"
          // top={["100px", "100px", "100px", "30px"]}
          // bottom={["-220px", title === "Courses" ? "-120px" : "-120px"]}
          // alignItems={"center"}
          // w={"800px"}
          w={title.toLowerCase() === "courses" ? "800px" : "500px"}
          // w="fit-content"
          // width={["500px", "unset"]}
          boxShadow={"2px 2px 4px gray"}
          borderRadius="10px"
          justifyContent={"space-between"}
          zIndex={999}
        >
          {title.toLowerCase() === "courses" ? (
            // <Flex
            //   justifyContent={"space-between"}
            //   px={"10px"}
            //   // gap="5px"
            //   // w="300px"
            //   h={"fit-content"}
            //   // bg={"green"}
            //   borderRadius={"5px"}
            // >
            <Flex
              justifyContent={"space-between"}
              display={["none", "none", "none", "flex"]}
              // alignItems={"flex-start"}
              // gap={"100px"}
              // px="20px"
              w={"100%"}
            >
              <Box w={"100%"} bg={"#fff"} px={"20px"} flex={1.5} py="20px">
                <Text pb="15px"  color={"#05A51F"} fontWeight={800}>
                  All Courses
                </Text>
                <Flex gap={"30px"} color={"#202020"} >
                  <Flex
                    gap={"10px"}
                    w="100%"
                    flexDir={"column"}
                    fontSize={"15px"}
                  >
                    <Link to={"/pre-login"}>
                      <Text>Web Development</Text>
                    </Link>
                    <Link to={"/pre-login"}>
                      <Text>Data Science</Text>
                    </Link>
                    <Link to={"/pre-login"}>
                      <Text>Mobile App Development</Text>
                    </Link>
                    <Link to={"/pre-login"}>
                      <Text>UI/UX Design</Text>
                    </Link>
                    <Link to={"/pre-login"}>
                      <Text>Cybersecurity</Text>
                    </Link>
                    <Link to={"/pre-login"}>
                      <Text>Product Management</Text>
                    </Link>
                  </Flex>
                  <Flex
                    gap={"10px"}
                    w="100%"
                    flexDir={"column"}
                    fontSize={"15px"}
                  >
                    <Link to={"/pre-login"}>
                      <Text>DevOps</Text>
                    </Link>
                    <Link to={"/pre-login"}>
                      <Text>Social Media Marketing</Text>
                    </Link>
                    <Link to={"/pre-login"}>
                      <Text>Software Engineering</Text>
                    </Link>
                    <Link to={"/pre-login"}>
                      <Text>User Experience Engneering</Text>
                    </Link>
                  </Flex>
                </Flex>
              </Box>

              <Box w={"100%"} px={"20px"} bg="#F7F7FB" flex={1} py={"20px"}>
                <Text pb="15px" color={"#05A51F"} fontWeight={800}>Check Our Trending Courses</Text>
                <Flex gap={"20px"} w="100%" mb="5px" alignItems={"center"}>
                  <Image src={Web} h={"70px"} />
                  <Box color={"#B88A68"}>
                    <Link to={"/pre-login"}>
                      <Flex alignItems={"center"}>
                        <Text fontSize={"15px"}>
                          Web Development
                        </Text>
                        <TiArrowRight size={20} />
                      </Flex>
                    </Link>
                    <Text fontSize={"12px"} color={"#202020"}>
                      Master Front-end and Back-end
                    </Text>
                  </Box>
                </Flex>
                <Flex gap={"20px"} w="100%" mb="5px" alignItems={"center"}>
                  <Image src={Design} h={"70px"} />
                  <Box color={"#B88A68"}>
                    <Link to={"/pre-login"}>
                      <Flex alignItems={"center"}>
                        <Text fontSize={"15px"}>
                          Product Design
                        </Text>
                        <TiArrowRight size={20}/>
                      </Flex>
                    </Link>
                    <Text fontSize={"12px"} color={"#202020"}>
                      Learn user-centered design
                    </Text>
                  </Box>
                </Flex>
                <Flex gap={"20px"} w="100%" align={"center"}>
                  <Image src={Management} h={"70px"} />
                  <Box color={"#B88A68"}>
                    <Link to={"/pre-login"}>
                      <Flex align={"center"}>
                        <Text fontSize={"15px"}>
                          Product Management
                        </Text>
                        <TiArrowRight size={20} />
                      </Flex>
                    </Link>
                    <Text fontSize={"12px"} color={"#202020"}>
                      Develop skills to strategize tech product
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          ) : // </Flex>
          title.toLowerCase() === "resources" ? (
            <Box
              // flexDir={"column"}
              // gap="5px"
              display={["none", "none", "none", "block"]}
              w="100%"
              py={"20px"}
              px="30px"
              h={"fit-content"}
              // bg={"green"}
              // borderRadius={"5px"}
            >
              <Text pb="15px" color={"#05A51F"} fontWeight={800}>
                Resources
              </Text>
              <Flex gap={"10px"} color={"#202020"}w={"100%"}>
                <Flex
                  gap={"10px"}
                  w="100%"
                  flexDir={"column"}
                  fontSize={"15px"}
                >
                  <Link to={"/pre-login"}>
                    <Text>Video Lectures</Text>
                  </Link>
                  <Link to={"/pre-login"}>
                    <Text>Interactive Quizzes</Text>
                  </Link>
                  <Link to={"/pre-login"}>
                    <Text>Practical Projects</Text>
                  </Link>
                  <Link to={"/pre-login"}>
                    <Text>Learning Materials</Text>
                  </Link>
                  <Link to={"/pre-login"}>
                    <Text>Case Studies</Text>
                  </Link>
                </Flex>
                <Flex
                  gap={"10px"}
                  w="100%"
                  flexDir={"column"}
                  fontSize={"15px"}
                >
                  <Link to={"/pre-login"}>
                    <Text>Webinars and Workshops</Text>
                  </Link>
                  <Link to={"/pre-login"}>
                    <Text>Tech Articles</Text>
                  </Link>
                </Flex>
              </Flex>
            </Box>
          ) : (
            <Box
              // flexDir={"column"}
              // gap="5px"
              w="100%"
              display={["none", "none", "none", "block"]}
              py={"20px"}
              px="30px"
              h={"fit-content"}
              // bg={"green"}
              // borderRadius={"5px"}
            >
              <Text pb="15px" color={"#05A51F"} fontWeight={800}>
                Curriculum
              </Text>
              <Flex gap={"10px"} color={"#202020"} w={"100%"}>
                <Flex
                  gap={"10px"}
                  w="100%"
                  flexDir={"column"}
                  fontSize={"15px"}
                >
                  <Link to={"/pre-login"}>
                    <Text>Tech Pathways</Text>
                  </Link>
                  <Link to={"/pre-login"}>
                    <Text>Course Syllabus</Text>
                  </Link>
                  <Link to={"/pre-login"}>
                    <Text>Learning Tracks</Text>
                  </Link>
                  <Link to={"/pre-login"}>
                    <Text>Course Outlines</Text>
                  </Link>
                  <Link to={"/pre-login"}>
                    <Text>Project-Based Learning</Text>
                  </Link>
                </Flex>
                <Flex
                  gap={"10px"}
                  w="100%"
                  flexDir={"column"}
                  fontSize={"15px"}
                >
                  <Link to={"/pre-login"}>
                    <Text>Accessment Methods</Text>
                  </Link>
                  <Link to={"/pre-login"}>
                    <Text>Certification Details</Text>
                  </Link>
                </Flex>
              </Flex>
            </Box>
          )}
        </Flex>
      )}
    </Flex>
  );
}

export default NavigationOptions;
