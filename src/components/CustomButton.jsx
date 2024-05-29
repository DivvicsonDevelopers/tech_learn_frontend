import { Button } from "@chakra-ui/button"
import { useNavigate }from "react-router-dom"
// import React from "react"

export const CustomButton = ({leftIcon,py,px,bg,color,hover,onClick,borderRadius,border,mr,w,btnText,fontSize,my}) => {
   const navigate = useNavigate()
  return (
    <Button
      leftIcon={leftIcon}
      fontSize={fontSize || "1rem"}
      fontFamily={"sourceSansPro-rg"}
      py={py}
      px={px}
      bg={bg}
      color={color}
      _hover={{ hover }}
      onClick={()=>{
       navigate("/pre-login")
      }}
      borderRadius={borderRadius}
      border={border}
      mr={mr}
      my={my}
      w={w}
      outline={"none"}
    >
      {btnText}
    </Button>
  );
}
