import { Box, Text } from "@chakra-ui/react";
import { CustomButton } from "../../../components/CustomButton";
import { useState } from "react";

const Home = () => {
  const [color, setColor] = useState("red");
  const colors = ["purple", "blue", "yellow"];

  setInterval(() => {
    // setColor(colors[Math.floor(Math.random() * colors.length)+1]);
    setColor(colors[(colors.indexOf(color) + 1) % colors.length]);
    // setColor(randomColor)
  }, 2000);

  return (
    <Box>
      <Box
        p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
        textAlign={"center"}
        data-aos="fade-up"
        data-aos-duration="200"
        data-aos-delay="150"
      >
        <Text
          fontSize={["40px", "40px", "40px", "60px"]}
          margin={"0px auto"}
          maxW={"1900px"}
          fontFamily={"sourceSansPro-rg"}
          pb="20px"
        >
          Unlock Your Potential with Cutting-Edge Tech Courses – Level Up Your
          <span style={{ color: color }}> Skills </span>
          Today!
        </Text>
        <Text
          fontSize={["18px", "18px", "18px", "20px"]}
          maxW={"1000px"}
          margin={"0px auto"}
          pb="20px"
          fontFamily={"sourceSansPro-rg"}
        >
          Are you ready to embark on a journey of limitless possibilities? At
          Divvicson, we&apos;re here to empower you with the knowledge and skills to
          thrive in the ever-evolving world of technology.
        </Text>
        <CustomButton
          btnText={"Get Started"}
          px={"50px"}
          color={"#fff"}
        />
      </Box>
    </Box>
  );
};

export default Home;
