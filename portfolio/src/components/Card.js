import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <div
      style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", borderRadius: "10px" ,backgroundColor:"#fff"}}
    >
        <Image
          width={"100%"}
          borderRadius="10px"
          src={imageSrc}
          alt="project image"
          fallbackSrc="https://via.placeholder.com/150"
        />
      <VStack alignItems="start" padding="10px">
        <Text as="b" color="#000" fontSize="xl">
          {title}
        </Text>
        <Text color="gray" fontSize="md">{description}</Text>
        <HStack style={{cursor:'pointer'}}>
          <Text color="#000" fontSize="md" >See more</Text>
          <FontAwesomeIcon color="#000" icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </div>
  );
};

export default Card;


// import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react"; 
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; 
// import React from "react"; 
 
// const Card = ({ title, description, imageSrc }) => { 
//    return ( 
//      <VStack 
//        color="black" 
//        backgroundColor="white" 
//        cursor="pointer" 
//        borderRadius="xl" 
//      > 
//        <Image borderRadius="xl" src={imageSrc} alt={title} /> 
//        <VStack spacing={4} p={4} alignItems="flex-start"> 
//          <HStack justifyContent="space-between" alignItems="center"> 
//            <Heading as="h3" size="md"> 
//              {title} 
//            </Heading> 
//          </HStack> 
//          <Text color="#64748b" fontSize="lg"> 
//            {description} 
//          </Text> 
//          <HStack spacing={2} alignItems="center"> 
//            <p>See more</p> 
//            <FontAwesomeIcon icon={faArrowRight} size="1x" /> 
//          </HStack> 
//        </VStack> 
//      </VStack> 
//    ); 
// }; 
 
// export default Card; 