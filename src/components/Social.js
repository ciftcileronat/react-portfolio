import React from "react";
import { HStack, Icon } from "@chakra-ui/react";
import { FaFacebookF, FaGoogle, FaSpotify, FaLinkedin } from "react-icons/fa";
function Social() {
  return (
    <HStack spacing="24">
      <Icon as={FaFacebookF} boxSize="50" />
      <Icon as={FaGoogle} boxSize="50" />
      <Icon as={FaLinkedin} boxSize="50" />
      <Icon as={FaSpotify} boxSize="50" />
    </HStack>
  );
}

export default Social;
