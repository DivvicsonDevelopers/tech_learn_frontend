import { Box, Flex, Image} from '@chakra-ui/react'
import ImageLeft from "../../../assets/imageLeft.png";
import ImageRight from "../../../assets/imageRight.png"


const ImagePage = () => {
  return (
    <Box
      width={"100%"}
      my="20px"
      p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
    >
      <Flex
        flexDir={["column", "column", "column", "row"]}
        alignItems={"center"}
        position={"relative"}
        gap={["40px", "40px", "40px", "0px"]}
        width={"100%"}
        height={["fit-content", "fit-content", "fit-content", "500px"]}
        mt={["20px", "20px", "20px", "70px"]}
        justifyContent={"center"}
      >
        <Box
          position={["static", "static", "static", "absolute"]}
          right={["0px", "0px", "0px", "600px"]}
        >
          <Image
            src={ImageLeft}
            height={["300px", "400px", "400px", "400px"]}
          />
        </Box>
        <Box
          left={"600px"}
          position={["static", "static", "static", "absolute"]}
          bottom={"150px"}
        >
          <Image
            src={ImageRight}
            height={["300px", "400px", "400px", "400px"]}
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default ImagePage