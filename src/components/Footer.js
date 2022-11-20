import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { HStack, Icon } from "@chakra-ui/react";
import { FaFacebookF, FaGoogle, FaSpotify, FaLinkedin } from "react-icons/fa";

function Footer() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <HStack spacing="24">
      <Text>Footer | 2022</Text>
      <Icon as={FaFacebookF} boxSize="50" />
      <Icon as={FaGoogle} boxSize="50" />
      <Icon as={FaLinkedin} boxSize="50" />
      <Icon as={FaSpotify} boxSize="50" />
    </HStack>
  );
}

export default Footer;

/**
 * import React from "react";
import {Box, Flex} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="#18181b">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <p>Băcă --- 2022</p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;







*/
