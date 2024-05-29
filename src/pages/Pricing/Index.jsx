import { Box, Text } from '@chakra-ui/react'
import UserPlan from './components/UserPlan';
import FaqsPage from './components/FaqsPage';
// import Footer from "../../../src/pages/landing/componnts/Footer"


const Index = () => {
  return (
      <Box p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]} mt="30px">
        <Box mb="30px" textAlign={["center"]}>
          <Text fontSize={["40px","40px","40px","50px"]} pb="10px" fontWeight={"500"}>
            Embrace Boundless Learning At <br></br> A Budget
          </Text>
          <Text fontSize={"20px"} maxW={"900px"} margin={"auto"}>
            Discover affordable pricing options at Divvicson Tech Academy,
            empowering you to unleash your full potential in tech with
            accessible and value-packed learning plans. Enroll now and embark on
            your transformative tech journey.
          </Text>
        </Box>
        <UserPlan />
        <FaqsPage />
        {/* <Footer /> */}
      </Box>
  );
}

export default Index