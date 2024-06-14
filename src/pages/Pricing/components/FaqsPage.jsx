
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

import { faqData } from "./faqData";

const FaqsPage = () => {
 
  return (
    <Box mt="50px">
      <Box textAlign={"center"}>
        <Text fontSize={["30px","30px","30px","50px"]} pb="10px" fontWeight={"500"}>
          Pricing FAQs
        </Text>
      </Box>
      <Box
        bg={"#FFFFFF"}
        rounded={"lg"}
        w={["100%", "100%", "100%", "100%"]}
        h="fit-content"
        // overflowY="scroll"
      >
        {faqData.map((faq, index) => (
          <Accordion w={"100%"} key={index} allowMultiple>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton _expanded={{ bg: "#05A51F", color: 'white' }}>
                      <Box
                        as="span"
                        flex="1"
                        border={"nonen"}
                        textAlign="left"
                        // color={"#1A0031"}
                        fontSize={"1rem"}
                        fontWeight={"semibold"}
                        py={"7px"}
                      >
                        {faq.question}
                      </Box>
                      {isExpanded ? (
                        <FaMinus fontSize="12px" />
                      ) : (
                        <FaPlus fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} fontSize={"15px"}>
                    {faq.answer}
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default FaqsPage;
