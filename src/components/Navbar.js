import React from "react";
import {
  Flex,
  Heading,
  IconButton,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Flex w="100%">
      <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
        Logo
      </Heading>
      <Spacer />

      <IconButton icon={<FaLinkedin />} isRound="true" />
      <IconButton ml={2} icon={<FaGithub />} isRound="true" />
      <IconButton ml={2} icon={<FaInstagram />} isRound="true" />
      <IconButton
        ml={8}
        icon={isDark ? <FaSun /> : <FaMoon />}
        isRound="true"
        onClick={toggleColorMode}
      />
    </Flex>
  );
}

export default Navbar;
