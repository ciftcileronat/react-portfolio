import {
  Flex,
  Stack,
  Circle,
  useColorMode,
  useMediaQuery,
  Box,
  Text,
  Button,
  Image,
  Spacer,
} from "@chakra-ui/react";
import React from "react";

function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Stack>
      <Circle
        position="absolute"
        bg="blue.100"
        opacity="0.1"
        w="300px"
        h="300px"
        alignSelf="flex-end"
      />
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start"
      >
        <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
          <Text fontSize="5xl" fontWeight="semibold">
            Hi, I am
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
          >
            Onat Ciftciler
          </Text>
          <Text color={isDark ? "gray.200" : "gray.500"}>
            Software Engineer | MSc in Cybersecurity | Full-Stack Developer
          </Text>
          <Button mt={8} colorScheme="blue" onClick={null}>
            Contact
          </Button>
        </Box>
        <Image
          alignSelf="center"
          mt={isNotSmallerScreen ? "0" : "12"}
          mb={isNotSmallerScreen ? "0" : "12"}
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="lg"
          boxSize="300px"
          src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
        />
      </Flex>
    </Stack>
  );
}

export default Header;
