/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Text, Flex, Image } from "@chakra-ui/react";
import { tesData } from "../pages/landing/componnts/tesData";
import { BsArrowRightSquare, BsArrowLeftSquare } from "react-icons/bs";

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "black" }}
//       onClick={onClick} 
//     />
//   );
// }
const SlickSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <BsArrowRightSquare color="black" size={30} />,
    prevArrow: <BsArrowLeftSquare color="black" size={30}/>,
  };
  return (
    <Box>
      <Slider {...settings}>
        {tesData.map((data) => (
          <Box key={data.id}>
            <Flex
              w="100%"
              align="center"
              justifyContent="center"
              gap="40px"
              flexDirection={["column", "column", "row"]}
            >
              <Box >
                <Image src={data.img} boxSize={["sm", "sm", "sm"]} h={["300px","300px","300px","500px"]} />
              </Box>

              <Box w={["100%", "100%", "50%"]}>
                <Text fontWeight="bold" fontSize={["20px", "30px", "35px"]}>
                  {data.name}
                </Text>
                <Text color="#828281" fontSize={["16px", "16px", "18px"]} fontWeight={"700"}>
                  {data?.skill}
                </Text>
                <Text
                  color="#828281"
                  fontSize={["16px", "16px", "18px"]}
                  lineHeight={["25px", "25px", "30px"]}
                  py="20px"
                >
                  {data.testimony}
                </Text>
              </Box>
            </Flex>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default SlickSlider;
