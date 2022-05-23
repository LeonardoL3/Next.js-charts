import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData: boolean
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {!!showProfileData && (
        <Box mr="4" textAlign="right">
          <Text> Leonardo Lazzaretti </Text>
          <Text color="gray.300" fontSize="small">
            leonardolazzaretti3@gmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Leonardo Lazzaretti" src="https://github.com/diego3g.png" />
    </Flex>
  )
}