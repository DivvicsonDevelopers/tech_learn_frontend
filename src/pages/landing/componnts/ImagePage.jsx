import { Box, Flex, Image } from "@chakra-ui/react";
import ImageLeft from "../../../assets/imageLeft.png";
import ImageRight from "../../../assets/imageRight.png";

const ImagePage = () => {
  return (
    <Box
      width={"100%"}
      my="20px"
      p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
    >
      <Flex
        justify={"center"}
        gap={"50px"}
        flexDir={["column", "column", "column", "row"]}
      >
        <Box data-aos="fade-right" data-aos-duration="700" data-aos-delay="300">
          <Image src={ImageLeft} />
        </Box>
        <Box data-aos="fade-left" data-aos-duration="700" data-aos-delay="300">
          <Image src={ImageRight} />
        </Box>
      </Flex>
    </Box>
  );
};

export default ImagePage;
