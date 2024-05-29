import { Box } from '@chakra-ui/react'
import Home from './componnts/Home'
import ImagePage from './componnts/ImagePage'
import Reasons from './componnts/Reasons'
import OpportunityPage from './componnts/OpportunityPage'
import Plan from './componnts/Plan'
import Courses from './componnts/Courses'
import Journey from './componnts/Journey'
import GetStarted from './componnts/GetStarted'
import Message from './componnts/Message'
import Works from './componnts/Works'
// import Testimony from './componnts/Testimony'
// import Footer from './componnts/Footer'

const Index = () => {
  return (
    <Box>
        <Home />
        <ImagePage />
        <Reasons />
        <OpportunityPage />
        <Plan />
        <Courses />
        <Journey />
        <GetStarted />
        <Message />
        <Works />
        {/* <Testimony /> */}
        {/* <Footer /> */}
    </Box>
  )
}

export default Index