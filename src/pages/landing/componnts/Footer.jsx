import { Box, Flex, Img, Input, Text } from "@chakra-ui/react";
import { CustomButton } from "../../../components/CustomButton";
import { useState } from "react";
import { successNotifier } from "../../../components/notifier";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from '../../../assets/foot.png'

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmail((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit= async (e)=>{
    e.preventDefault()
    try {
      const response = await axios.patch(
        `https://techlearn-backend.onrender.com/api/v1/course/add-module/${courseId}`,
        email,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      setResponse(response?.data); // Save the entire response object
      // navigate("/lesson",{state: responseData})
      successNotifier("Module Created Successfully");
    } catch (error) {
      errorNotifier(error?.message);
      console.error("Error:", error);
    }

  }
  return (
    <Box
      bg={"#05A51F"}
      color={"#fff"}
      p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
      mt="70px"
      fontFamily={"sourceSansPro-rg"}
    >
      <Flex
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        alignItems={"start"}
        flexDir={["column-reverse", "column-reverse", "column-reverse", "row"]}
      >
        <Box>
        <Link to={"/"}>
        <Flex gap={"2"} alignItems={"center"}>
          <Img loading="lazy" src={logo} alt="logo" w={"150px"} />
        </Flex>
      </Link>
          <Box mb="20px">
            <Text>copyright @ 2023 Divvicson</Text>
            <Text>All Right Reserved</Text>
          </Box>
          <Box>
            <Text>Suscribe to Our Newsletter</Text>
            <Text pb="20px">
              As you embark on this journey, we have exciting thingsin store for
              you!
            </Text>
          </Box>
          <Flex>
            <Input
              type="email"
              name="email"
              value={email}
              bg={"#fff"}
              placeholder="Enter your email address"
              onChange={handleChange}
            />
            <CustomButton
              btnText={"Subscribe"}
              bg={"#fff"}
              
              border={"none"}
              onClick={handleSubmit}
            />
          </Flex>
        </Box>
        <Box>
          <Text fontWeight={"bold"} pb={"20px"}>
            Product
          </Text>
          <Text pb="10px">Features</Text>
          <Text pb="10px">Pricing</Text>
          <Text pb="10px">Get Started</Text>
        </Box>
        <Box>
          <Text fontWeight={"bold"} pb={"20px"}>
            Company
          </Text>
          <Text pb="10px">About</Text>
          <Text pb="10px">Contact us</Text>
          <Text pb="10px">Careers</Text>
        </Box>
        <Box>
          <Text fontWeight={"bold"} pb={"20px"}>
            Support
          </Text>
          <Text pb="10px">Getting started</Text>
          <Text pb="10px">Help center</Text>
          <Text pb="10px">Report a bug</Text>
        </Box>
        <Box>
          <Text fontWeight={"bold"} pb={"20px"}>
            Follow us
          </Text>
          <Text pb="10px">Facebook</Text>
          <Text pb="10px">Instragram</Text>
          <Text pb="10px">Twitter</Text>
          <Text pb="10px">LinkedIn</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
