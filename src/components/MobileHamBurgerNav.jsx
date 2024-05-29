import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import NavigationOptions from "./NavigationOptions";

function MobileHamBugerNav({ ...props }) {

  const [show, setShow] = useState(false);

  return (
    <Box {...props}>
      <GiHamburgerMenu
        cursor={"pointer"}
        onClick={() => setShow((prev) => !prev)}
        fontSize={"2em"}
        color="black"
      />
      {show && (
        <Box
          data-aos="fade-left"
          position="fixed"
          bottom={"0"}
          left="0"
          right="0"
          top="0"
          w="100%"
          bg={`linear-gradient(to bottom right, #FFF3B0, #D9D9D9)`}
          zIndex={1022}
        >
          <Flex
            flexDir={"column"}
            justifyContent="center"
            alignItems={"center"}
            color={"white"}
            fontWeight="600"
            w="100%"
            p="20px"
          >
            <FaTimes
              style={{ alignSelf: "flex-end" }}
              fontSize="1.5em"
              cursor={"pointer"}
              onClick={() => setShow(false)}
              color="black"
            />
            <Flex
              gap="50px"
              flexDir={"column"}
              alignItems="center"
              justifyContent="center"
              fontSize={"1.5em"}
              color={"black"}
            >
              <Box onClick={() => setShow(false)}>
                <Link to={"/pre-login"}>
                <NavigationOptions title="Courses" />
                </Link>
              </Box>

              <Box onClick={() => setShow(false)}>
                 <Link to={"/pre-login"}>
                <NavigationOptions title="Resources" />
                </Link>
              </Box>
              <Box onClick={() => setShow(false)}>
                 <Link to={"/pre-login"}>
                  <NavigationOptions title="Curriculum" />
                 </Link>
                
              </Box>
              <Link to={"/pricing"} onClick={() => setShow(false)}>
                <Text>Pricing</Text>
              </Link>
            </Flex>
          </Flex>
        </Box>
      )}{" "}
    </Box>
  );
}

export default MobileHamBugerNav;
