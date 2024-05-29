import { Box, Text } from '@chakra-ui/react'
import SlickSlider from '../../../components/SlickSlider'


const Testimony = () => {
  return (
    <Box p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]} mt="30px">
      <Box mb="30px" textAlign={"center"}>
        <Text fontSize={["25px","25px","25px","40px"]} pb="10px">
          What Our Learners Say
        </Text>
        <Text fontSize={["18px","18px","18px","20px"]} maxW={"900px"} margin={"auto"}>
          Hear from our very own learners, who have gone through this same
          process.
        </Text>
      </Box>
      <SlickSlider />
    </Box>
  );
}

export default Testimony
