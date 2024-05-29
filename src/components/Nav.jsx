import { Box, Flex, Img, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import MobileHamBugerNav from "./MobileHamBurgerNav";
import { CustomButton } from "./CustomButton";
import NavigationOptions from "./NavigationOptions";
import { IoLockClosedOutline } from "react-icons/io5";

const  Navigation =()=> {
  return (
    <Flex
      alignItems={"center"}
      fontFamily={"sourceSansPro-rg"}
      justifyContent="space-between"
      fontWeight="500"
      fontSize={[".9em", "1.1em"]}
      flexDir={"row"}
      gap={["20px", "20px", "20px", "unset"]}
      // p="20px 150px"
      p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
      h="70px"
    >
      <Link to={"/"}>
        <Flex gap={"2"} alignItems={"center"}>
          <Img loading="lazy" src={logo} alt="logo" w={["100%", "100%"]} />
        </Flex>
      </Link>

      <MobileHamBugerNav display={["block", "block", "block", "none"]} />
      <>
        <Flex
          display={["none", "none", "none", "flex"]}
          alignItems={"center"}
          gap={["20px", "50px"]}
          color={"#000000"}
        >
          <NavigationOptions title="Courses" />

          <NavigationOptions title="Resources" />

          <NavigationOptions title="Curriculum" />

          <Link to={"/pricing"}>
            <Text>Pricing</Text>
          </Link>
        </Flex>
        <Flex
          display={["none", "none", "none", "flex"]}
          alignItems={"center"}
          gap="50px"
        >
          <CustomButton
            color={"#1A1489"}
            btnText={"Login"}
            px="35px"
            bg={"none"}
            leftIcon={<IoLockClosedOutline color="#1A1489" />}
          />
        </Flex>
      </>
    </Flex>
  );
}

export default Navigation;
