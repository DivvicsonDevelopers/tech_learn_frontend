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
      <Flex justify={"center"} gap={"50px"} flexDir={["column","column","column","row"]}>
        <Box>
          <Image src={ImageLeft} />
        </Box>
        <Box>
          <Image src={ImageRight} />
        </Box>
      </Flex>
    </Box>
  );
};

export default ImagePage;
