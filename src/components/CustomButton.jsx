/* eslint-disable react/prop-types */
import { Button, } from "@chakra-ui/button"
import { Link  }from "react-router-dom"

export const CustomButton = ({leftIcon,py,px,bg,color,hover,borderRadius,border,mr,w,btnText,fontSize,my}) => {
  return (
    <Link to="http://user.divvicsontechlearn.com/" isExternal>
    <Button
      leftIcon={leftIcon}
      fontSize={fontSize || "1rem"}
      fontFamily={"sourceSansPro-rg"}
      py={py}
      px={px}
    bg={bg || "#05A51F"}
      color={color}
      _hover={{ border:"1px solid #05A51F" }}
      borderRadius={borderRadius}
      border={border}
      
      mr={mr}
      my={my}
      w={w}
      outline={"none"}
    >
      {btnText}
    </Button>
    </Link>
  );
}
