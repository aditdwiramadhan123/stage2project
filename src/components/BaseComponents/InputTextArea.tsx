import React from 'react';
import { 
  Avatar,
  Textarea,
  Button,
  Flex,
  Card,
  CardHeader,
} from "@chakra-ui/react";
import { FaImage } from "react-icons/fa";

function InputTextArea({placeHolder,background,inputBackground}:{placeHolder:string,background:string,inputBackground:string}) {
  return (
    <Card  bg={background} borderRadius={0} marginY={0.5}>
      <CardHeader py={2}>
        <Flex alignItems="center">
          <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" size={"sm"} />
          <Textarea
          fontSize={12}
            placeholder={placeHolder}
            rows={1}
            resize="none"
            padding={3}
            ml={3}
            color="white"
            bg={inputBackground}
            borderRadius={30}
            _placeholder={{ color: 'gray.400' }}
            _focus={{ borderColor: 'teal.400' }}
            
          />
          <Button
            leftIcon={<FaImage />}
            bg="#009432"
            color="white"
            height="auto"
            px={4}
            ml={3}
            borderRadius="md"
            _hover={{ bg: 'teal.500' }}
          >
            Post
          </Button>
        </Flex>
      </CardHeader>
    </Card>
  );
}

export default InputTextArea;
