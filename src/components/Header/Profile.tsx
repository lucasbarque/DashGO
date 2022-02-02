import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Lucas Barque</Text>
          <Text color="gray.300" fontSize="small">lucas.barque@gmail.com</Text>
        </Box>
      )}
      <Avatar size="md" name="Lucas Barque" src="https://github.com/lucasbarque.png" />
    </Flex>
  )
}